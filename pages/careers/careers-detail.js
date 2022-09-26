import React from 'react'
import detailphoto from '../../public/assets/160008573810806.png'
import Header from '@components/header/Header'

import badgeCard from '../../public/assets/badge-card.png'
import ndBadge from '../../public/assets/2nd-badge.png'
import locationBadge from '../../public/assets/lication_carrier.png'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { useRouter } from 'next/router'
import InputAdornment from '@mui/material/InputAdornment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperclip } from '@fortawesome/free-solid-svg-icons'
// import { BsPaperclip } from 'react-icons/Bs'
import Axios from 'axios'
import $ from 'jquery'
import Footer from '@components/footer/Footer'
import countries1 from '@components/Mapdata'
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  onSnapshot,
  query
} from 'firebase/firestore'

import { db } from '@components/Firebase-config'
// https://codesandbox.io/s/selectedvalue-with-icon-cicoo3?file=/demo.js

const detail = () => {
  const router = useRouter()
  const routerData = router.query.slug

  useEffect(() => {
    console.log(router, 'router')
  }, [router.query])
  const [onlyData, setOnlyData] = useState({})

  const [formerror, setFormError] = useState({})

  const [isSubmit, setIsSubmit] = useState(false)
  // const [input,setInput]=useState([])
  // const [checker, setChecker] = useState(false)
  const [cvName,setCvName]=useState("Attach your CV / Resume")

  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    phone: '',
    ph_code: '',
    current_location: '',
    qualification: '',
    experience: '',
    noticePeriod: '',
    cv: null,
    textChange1: ''
    //   inputValue1: ''
  })
  const [countries, setCountries] = useState(countries1)
  useEffect(() => {
    console.log(router, 'outside router')
   
    async function getData (db) {
      //..........using getDocs without real time update------
      // const citiesCol = collection(db, '12345')
      // const data = await getDocs(citiesCol)
      // const dataOrg = data.docs.map(doc => doc.data())

      //........ Using onSnapShot real time update from firebase-------
      const q = query(collection(db, '12345'))
     
     
      const unsubscribe = onSnapshot(q, querySnapshot => {
        console.log(querySnapshot, 'snapshott')
        // let dataOrg=querySnapshot.docs.map(doc => doc.data())
        let dataOrg=querySnapshot.docs.map(doc => {  let original = doc.data()
     

          return Object.assign(original, { id_: doc.id })
          })
        console.log(routerData,"routerData")
        const dataFiltered = dataOrg.filter(arr => arr.id_ == routerData)
        let dataFilteredOnly = dataFiltered[0]
        if (dataFilteredOnly) {
          dataFilteredOnly = {
            ...dataFilteredOnly,
            technicalSkill: dataFilteredOnly.technicalSkill.trim().split(','),
            softSkill: dataFilteredOnly.softSkill.trim().split(','),
            desiredSkill: dataFilteredOnly.desiredSkill.trim().split(',')
          }
          console.log(dataFilteredOnly.softSkill.length,"dataFilteredOnlyyy")
          setOnlyData(dataFilteredOnly)
        }
       
       
        
      })
      
      




     
      // if(Object.keys(dataFilteredOnly).length>0)
 

      //  const takenData=dataFiltered.map((arr)=>{
      //   console.log(arr,"arr")
      //   if(Object.keys(arr).map((arrDe)=>{if(arrDe=="technicalSkill"){
      //     console.log(dataFilteredOnly,"da")
      //  dataFilteredOnly={...dataFilteredOnly,technicalSkill: arr.technicalSkill.split(',')}
      // console.log(dataFilteredOnly,"dataOnlyOriginal")
      // }
      // else if(arrDe=="softSkill"){

      // }

      // }))
      //   {
      //     console.log(arr.softSkill,"lol")

      //   }

      //  })

      //  dataFiltered.map((arr)=>setOnlyData(arr))
      // setOnlyData( dataOrg.filter((arr)=>arr.title==routerData))
    }
    getData(db)
    
  }, [routerData])

 

  const changeBt = e => {
    console.log(e)
    const { name, value } = e.target

    // console.log(e.target.files[0],"kkkkkkk")
    console.log(name, value, 'kolllllllll')
    setInputValue({
      ...inputValue,

      [name]: value
    })
    console.log(inputValue, 'inputvalueeee')
  }
  const changeBt1 = e => {
    const { name, value } = e.target
    setCvName(e.target.files[0].name)

    setInputValue({ ...inputValue, [name]: e.target.files[0] })
  }

  useEffect(() => {

    Axios.get(
      'https://api.geoapify.com/v1/ipinfo?apiKey=93ee004727e446fa8c081ba0c7fe2428'
    )
      .then(response => {
        console.log(response)

        const array = countries.filter(
          arr =>
            arr.code.toUpperCase() ==
            response.data.country.iso_code.toUpperCase()
        )
        array.map(obj => setInputValue({ ...inputValue, ph_code: obj }))
        console.log(array, 'array123444')
      })
      .catch(error => console.log('error', error))
  }, [])

  useEffect(() => {
    console.log(formerror, 'errorllll')
    console.log(Object, 'object')

    if (Object.keys(formerror).length === 0 && isSubmit) {
      console.log(inputValue, 'passed object')
    }
  }, [formerror])

  const handleClick = e => {
    console.log('form this')
    e.preventDefault()

    setFormError(validate(inputValue))
    console.log(formerror, 'formError')

    setIsSubmit(true)
  }

  const validate = values => {
    const error = {}
    //     Email with gmail.com
    //    const regx= /^[a-z0-9](\.?[a-z0-9]){2,}@g(oogle)?mail\.com$/gm;
    const regxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const regxPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    const regxName = /^[A-Za-z\s]+$/

    const pass_regx = /[0-9]/gm
    //    console.log(arr,"arrrrr")
    if (!values.name) {
      error.Name = 'Please Enter A Name !'
    } else if (!regxName.test(values.name)) {
      error.Name = 'Name must have only characters !'
    }

    if (!values.email) {
      error.Email = 'Please Enter An Email !'
    } else if (!regxEmail.test(values.email)) {
      error.Email = 'Please enter a valid email (i.e user@gmail.com) !'
    }

    //    else if(!pass_regx.test(values.password))
    //    {
    //     error.Password="Please Enter only numeric number !"
    //    }

    if (!values.phone) {
      error.Phone = 'Please Enter A Phone No !'
    } else if (!regxPhone.test(values.phone)) {
      error.Phone = 'Phone no must be of 10 digits !'
    }

    if (!values.current_location) {
      error.Current_location = 'Please enter your location !'
    }
    if (!values.cv) {
      error.Cv = 'Please upload your cv !'
    }

    //    if(!values.photo){
    //     error.File="Please select a file !"
    //    }

    // $('.flexbox .flexBox-inner .wrong').css("display","block")

    // else if( (values.password!=arr[0].password)) {
    //     console.log(arr[0].password,"emailll")
    //  error.Password=" Username And Password din't match !"

    // $('.flexbox .flexBox-inner .wrong').css("display","block")

    return error
  }
const goToApply=(e)=>{
  e.preventDefault()
  setTimeout(() => {
    $('html, body').animate(
      {
        scrollTop: $("#forFormOnly").offset().top - 10
      },
      2
    )
  }, 120)

}

  return (
    <>
      <Header navData='Carrier' />
      {Object.keys(onlyData).length > 0 && (
        <section className='first'>
          <div className='banner'>
            <div className=' banner-parent'>
              <img
                className='img-fluid banner_img'
                src={detailphoto.src}
                alt=''
              />
            </div>

            <div _ngcontent-c14='' className='details_banner_twenty'>
              <div _ngcontent-c14='' className='container'>
                <div _ngcontent-c14='' className='twenty_twenty'>
                  <div _ngcontent-c14='' className='twenty_twenty_right'>
                    <div
                      _ngcontent-c14=''
                      className='detail_holder_heading text-capiatlize'
                    >
                      <h3 _ngcontent-c14='' className='heading2  '>
                        {onlyData.jobTitle}
                      </h3>
                      <div
                        _ngcontent-c14=''
                        className='carrier_card_twenty mt-4'
                      >
                        <div _ngcontent-c14='' className='cip_holder'>
                          <img
                            _ngcontent-c14=''
                            className='career_icon_pic'
                            src={badgeCard.src}
                          />
                        </div>
                        <p>{onlyData.subTitle}</p>
                      </div>
                      <div
                        _ngcontent-c14=''
                        className='carrier_card_twenty mt-0'
                      >
                        <div _ngcontent-c14='' className='cip_holder'>
                          <img
                            _ngcontent-c14=''
                            className='career_icon_pic'
                            src={ndBadge.src}
                          />
                        </div>
                        <p _ngcontent-c14=''>
                          Experience : {onlyData.experience}
                        </p>
                      </div>
                      <div
                        _ngcontent-c14=''
                        className='carrier_card_twenty mt-0'
                      >
                        <div _ngcontent-c14='' className='cip_holder'>
                          <img
                            _ngcontent-c14=''
                            className='career_icon_pic'
                            src={locationBadge.src}
                          />
                        </div>
                        <p _ngcontent-c14=''>Location : {onlyData.location}</p>
                      </div>
                      <div _ngcontent-c14='' className='a_holder'>
                        <a onClick={goToApply} className='ripple-btn'>
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container skill-container'>
            <div className='outer'>
              <div className='inner'>
                <div className='heading-sec'>
                  <p className='inner-para'>
                    We are hiring dynamic Business Development
                    Associate/Business Development Manager experienced in Online
                    Bidding platforms
                    <br />
                    <br />
                    The current position requires the following skills:
                  </p>
                </div>
                {
                  (onlyData.technicalSkill[0]!='') &&(
                <div className='row'>
                  <div className='col-md-4'>
                    <h3>Technical Skills:</h3>
                  </div>
                  <div className='col-md-8'>
                    <ul className='un-list'>
                      {onlyData.technicalSkill &&
                        onlyData.technicalSkill.map(arr => <li>{arr}</li>)}
                    </ul>
                  </div>
                </div>
      )}
                {
                  (onlyData.softSkill[0]!='') &&(
                <div className='row'>
                  <div className='col-md-4'>
                    <h3>Soft Skills:</h3>
                  </div>
                  <div className='col-md-8'>
                    <ul className='un-list'>
                  
                      {onlyData.softSkill &&
                        onlyData.softSkill.map(arr => <li>{arr}</li>
                        )}
                    </ul>
                  </div>
                </div>
       ) }
       {
        (onlyData.desiredSkill[0]!='') &&(

       
                <div className='row'>
                  <div className='col-md-4'>
                    <h3>Desired Candidate Profile:</h3>
                  </div>
                  <div className='col-md-8'>
                    <ul className='un-list'>
                      {onlyData.desiredSkill &&
                        (onlyData.desiredSkill.length == 1
                          ? onlyData.desiredSkill.map(arr => <p>{arr}</p>)
                          : onlyData.desiredSkill.map(arr => <li>{arr}</li>))}
                    </ul>
                  </div>
                </div>
       ) }
              </div>
            </div>
          </div>
        </section>
      )}

      <section id='forFormOnly' className='form-sec jobform-area '>
        <div className='text-center'>
          <h2>Join Our Team</h2>
        </div>
        <form
          onSubmit={handleClick}
          autocomplete='off'
          className='contact-form ng-pristine ng-invalid ng-touched'
        >
          <div className='row text-center'>
            <div className='col-lg-6 col-md-6 inputForm relativeError'>
              <input
                type='text'
                className='form-controller'
                id='name'
                name='name'
                value={inputValue.name}
                placeholder='Name*'
                onChange={changeBt}
                onKeyDown={() => {
                  setFormError({ ...formerror, Name: '' })
                }}
              />
              {console.log(formerror, 'formerror')}
              <div className='formerror'>{<p>{formerror.Name} </p>}</div>
            </div>

            <div className='col-lg-6 inputForm  col-md-6 relativeError'>
              <input
                className='form-controller'
                id='email'
                type='text'
                placeholder='Email Address*'
                name='email'
                value={inputValue.email}
                onChange={changeBt}
                onKeyDown={() => {
                  setFormError({ ...formerror, Email: '' })
                }}
              />
              <div className='formerror'>{<p>{formerror.Email} </p>}</div>
            </div>
          </div>
          <div className='phone-sec'>
            <div className=' row'>
              <div className='phone-left col-md-2 text-center d'>
                <Autocomplete
                  id='controllable-states-demo'
                  disableClearable
                  sx={{ width: 400 ,marginTop:1.2}}
                  value={inputValue.ph_code}
                  onChange={(event, newValue) => {
                    console.log(newValue, 'value of thisss')
                    setInputValue({ ...inputValue, ph_code: newValue })
                  }}
                  inputValue={inputValue.textChange1}
                  onInputChange={(event, newInputValue) => {
                    console.log(newInputValue, 'inputttvaluethjpolp')
                    setInputValue({ ...inputValue, textChange1: newInputValue })
                  }}
                  getOptionLabel={option => `  +${option.phone}`}
                  options={countries}
                  autoHighlight
                  fullWidth={false}
                  renderOption={(props, option) => (
                    <Box
                      component='li'
                      sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      <img
                        loading='lazy'
                        width='20'
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=''
                      />
                      +{option.phone}
                    </Box>
                  )}
                  renderInput={params => (
                    <TextField
                      id='standard-basic'
                      variant='standard'
                      className='textfield'
                      {...params}
                      
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: inputValue.ph_code ? (
                          <InputAdornment>
                            <img
                              loading='lazy'
                              width='20'
                              src={`https://flagcdn.com/w20/${inputValue.ph_code.code.toLowerCase()}.png`}
                              srcSet={`https://flagcdn.com/w40/${inputValue.ph_code.code.toLowerCase()}.png 2x`}
                              alt=''
                            />
                          </InputAdornment>
                        ) : null
                      }}
                    />
                  )}
                />
              </div>
              <div className='right-side col-md-10 inputForm relativeError'>
                <input
                  type='text'
                  id='phone'
                  className='form-controller'
                  name='phone'
                  value={inputValue.phone}
                  placeholder='Phone No*'
                  onChange={changeBt}
                  onKeyDown={() => {
                    setFormError({ ...formerror, Phone: '' })
                  }}
                />
                <div className='formerror'>{<p>{formerror.Phone} </p>}</div>
              </div>
            </div>
          </div>

          <div className='row text-center'>
            <div className='col-lg-6 col-md-6 inputForm relativeError'>
              <input
                type='text'
                className='form-controller'
                id='cuurent_location'
                name='current_location'
                value={inputValue.current_location}
                placeholder='Current Location*'
                onChange={changeBt}
                onKeyDown={() => {
                  setFormError({ ...formerror, Current_location: '' })
                }}
              />
              <div className='formerror'>
                {<p>{formerror.Current_location} </p>}
              </div>
            </div>

            <div className='col-lg-6  col-md-6 inputForm'>
              <input
                className='form-controller'
                type='text'
                placeholder='Qualification(Optional)'
                name='qualification'
                value={inputValue.qualification}
                onChange={changeBt}
              />
            </div>
          </div>

          <div className='row text-center'>
            <div className='col-lg-6 col-md-6 inputForm'>
              <input
                type='text'
                className='form-controller'
                id='experience'
                name='experience'
                value={inputValue.experience}
                placeholder='Years of experience(Optional)'
                onChange={changeBt}
              />
            </div>

            <div className='col-lg-6  col-md-6 inputForm'>
              <input
                className='form-controller'
                type='text'
                placeholder='noticePeriod(Optional)'
                name='Notice Period'
                value={inputValue.noticePeriod}
                onChange={changeBt}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12  col-md-12 relativeError inputForm'>
            {/* <BsPaperclip className='paperClip'/> */}
            {/* <FontAwesomeIcon className='paperClip' icon={faPaperclip}  /> */}
            <label  className="form-controller twenty_twenty_file" for="file-choose" >
            <span className="green-text ">{cvName}</span></label>
              <input
                className='form-controller hiden'
                id='file-choose'
                type='file'
                name='cv'
                onChange={changeBt1}
                onClick={() => {
                  setFormError({ ...formerror, Cv: '' })
                }}
              />
              <div className='formerror'>{<p>{formerror.Cv} </p>}</div>
            </div>
          </div>
          <div className='text-center ng-star-inserted'>
            <button className='wt-btn hol btn' type='submit'>
              Send
            </button>
            <p class='agree-policy'>
              By clicking "Send", you agree to our{' '}
              <a  target='_blank' href='https://www.bitpastel.com/#/privacy-policy'>
                Privacy Policy.
              </a>
            </p>
          </div>
        </form>
      </section>
      <Footer />
    </>
  )
}

export default detail
