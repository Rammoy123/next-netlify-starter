import React, { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import badgeCard from '../../public/assets/badge-card.png'

import carrierBanner from '../../public/assets/career-banner.png'

import Autocomplete from '@mui/material/Autocomplete'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperclip } from '@fortawesome/free-solid-svg-icons'
import Popper from '@mui/material/Popper';
import countries1 from '@components/Mapdata'



import $ from 'jquery'
import {
  getFirestore,
  collection,
  getDocs,
  query,
  doc
} from 'firebase/firestore'
import { onSnapshot } from 'firebase/firestore'
import { db } from '@components/Firebase-config'
import InputAdornment from '@mui/material/InputAdornment'
import Axios from 'axios'

import Footer from '@components/footer/Footer'

// import { BsPaperclip } from 'react-icons/Bs'
import { BiCheckCircle } from 'react-icons/bi'
const careerOnly = () => {
  // const styles = (theme) => ({
  //   popper: {
  //     width: "20"
  //   }
  // });
  // const PopperMy = function (props) {
  //   return <Popper {...props} style={styles.popper} placement="bottom-start" />;
  // };
  const router = useRouter()
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
  })
  const [onlyData, setOnlyData] = useState([])
  const [formerror, setFormError] = useState({})

  const [isSubmit, setIsSubmit] = useState(false)
  // const [input,setInput]=useState([])
  // const [checker, setChecker] = useState(false)
  const [cvName,setCvName]=useState("Attach your CV / Resume")
  const [countries, setCountries] = useState(countries1)



 
  const changeBt = e => {
    console.log(e)
    const { name, value } = e.target

    console.log(name, value, 'kolllllllll')
    setInputValue({
      ...inputValue,

      [name]: value
    })
  }
  const changeBt1 = e => {
    const { name, value } = e.target
    // URL.createObjectURL(e.target.files[0])
    //  setEditPhoto({photo: URL.createObjectURL(e.target.files[0])})
   setCvName(e.target.files[0].name)
    setInputValue({ ...inputValue, [name]: e.target.files[0] })
    // console.log(editPhoto,"edit photo")
  }

  // useEffect(() => {
  //   Axios.get(
  //     'https://api.geoapify.com/v1/ipinfo?apiKey=93ee004727e446fa8c081ba0c7fe2428'
  //   )
  //     .then(response => {
  //       console.log(response)

  //       const array = countries.filter(
  //         arr =>
  //           arr.code.toUpperCase() ==
  //           response.data.country.iso_code.toUpperCase()
  //       )
  //       array.map(obj => setInputValue({ ...inputValue, ph_code: obj }))
  //       console.log(array, 'array123444')
  //     })
  //     .catch(error => console.log('error', error))
  // }, [])
  useEffect(() => {
    async function getData (db) {
      //..........using getDocs without real time update------
      // const citiesCol = collection(db, '12345')

      // const data = await getDocs(citiesCol)

      // const dataOrg = data.docs.map(doc => doc.data())

      //........ Using onSnapShot real time update from firebase-------
      //https://firebase.google.com/docs/firestore/query-data/listen
      // const q = query(collection(db, "cities"), where("state", "==", "CA"));

      const q = query(collection(db, '12345'))

      const unsubscribe = onSnapshot(q, querySnapshot => {
        console.log(querySnapshot, 'snapshott')
        setOnlyData(
          querySnapshot.docs.map(doc => {
            let original = doc.data()

            return Object.assign(original, { id_: doc.id })
          })
        )

        // console.log(snapData,"snapDtaaa")
      })

      // return cityList;
      console.log(unsubscribe, 'kolkatatattat')
      // setOnlyData(dataOrg)
    }
    getData(db)
  }, [])

  useEffect(() => {
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

    return error
  }
  const goCarrier = e => {
    console.log(e.target.id,"valueee")
    e.preventDefault()
    if(e.target.id=='goCard'){
    setTimeout(() => {
      $('html, body').animate(
        {
          scrollTop: $('#cardOnlySec').offset().top - 100
        },
        2
      )
    }, 120)
  }
  else if(e.target.id=='hereOnly'){
    setTimeout(() => {
      $('html, body').animate(
        {
          scrollTop: $('#formOnly').offset().top - 100
        },
        2
      )
    }, 120)

  }
  }

  return (
    <>
      <Header navData='Carrier' />

      <div
        _ngcontent-c13=''
        className='container career_banner_holder'
        id='banner'
      >
        <div className='hero-content'>
          <div className='left-side'>
            <h1>
              Work @ Bitpastel <br />
              on Awesome Projects
            </h1>
            <ul>
              <li>
                <BiCheckCircle className='first-check ' />
                Dynamic Teams working on new ideas
              </li>
              <li>
                <BiCheckCircle className='first-check ' />
                Enjoy a Happy work enviroment
              </li>
              <li>
                <BiCheckCircle className='first-check ' />
                Fast-track career progress
              </li>
            </ul>
            <button onClick={goCarrier} className='wt-btn' id='goCard'>
              Explore Opportunities
            </button>
          </div>
          <div className='right-side'>
            <img
              alt='Work at Bitpastel on Awesome Projects'
              height='650'
              src={carrierBanner.src}
              width='650'
            />
          </div>
        </div>
      </div>
      <div className='container opportunities-area' id='cardOnlySec'>
        <section className='padding-area padding_twenty_twenty'>
          <p className='text-center body-text m-bot-30'>
            {' '}
            To apply for any of the current job openings, please go to the
            respective box below and click on the
            <strong className='job-desc'>"Apply"</strong>
            button.
            <br />
            If you don't see any suitable vacancy, send your resume
            <strong>
              {' '}
              <a onClick={goCarrier}  id='hereOnly'> here </a>{' '}
            </strong>
            and we'll get in touch with you as soon as there is any opening that
            matches your profile.
          </p>
          <div className='carrier_card'>

          {onlyData.map((arr, index) => {
           return (
            <Link href={{  pathname: '/careers/careers-detail',
              query: { slug: arr.id_ }}} >
            <a style={{textDecoration:'none',color:'#2a2a2a'}}>

            
            <div key={index} id={`${index}`} className='carrier_card_holder'>
              <div className='job-thumbnail'>
                <div className='carrier_card_heading color-grad'>
                  <p>{arr.jobTitle}</p>
                </div>
                <div className='carrier_card_body'>
                  <div>
                    <div className='text-capitalize carrier_card_twenty first_twenty mb-2'>
                      <div className='cip_holder'>
                        <img src={badgeCard.src} width={15} height={15} />
                      </div>
                      <p>
                      {arr.subTitle}
                      </p>
                    </div>
                    <div className='text-capitalize carrier_card_twenty mb-2'>
                      <div className='cip_holder'>
                        <img src={badgeCard.src} width={15} height={15} />
                      </div>
                      <p>Experience : {arr.experience}</p>
                    </div>
                  </div>
                </div>
                <div className='carrier_card_button'>
                  <button className='btn btn-primary ripple1 cc_button_holder'>
                    Apply
                  </button>
                </div>
              </div>
            </div>
            </a>
            </Link>
            )
          })
          }

          </div>
        </section>
      </div>

      {/* enctype="multipart/form-data" */}
      {/* name: '',
    email: '',
    phone: '',
    current_location:'',
    qualification:'',
    experience:'',
    noticePeriod:'',
    cv:null */}

      <section  className='form-sec jobform-area'>
        <div id='formOnly' className='text-center'>
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

            <div className='col-lg-6 inputForm col-md-6 relativeError'>
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
                // PopperComponent={PopperMy}
                  id='controllable-states-demo'
                  sx={{ width: 800, marginTop: 1.2 }}
                  disableClearable
                  value={inputValue.ph_code}
                  onChange={(event, newValue) => {
                    console.log(newValue, 'value of thisss')
                    setInputValue({ ...inputValue, ph_code: newValue })
                  }}
                  inputValue={inputValue.textChange1}
                  onInputChange={(event, newInputValue) => {
                    // console.log(event,"event")

                    console.log(newInputValue, 'inputttvaluethjpolp')
                    setInputValue({ ...inputValue, textChange1: newInputValue })
                  }}
                  getOptionLabel={option => `  +${option.phone}`}
                  // value={inputValue.}
                  // onChange={(event, newValue) => {
                  //     console.log(newValue,"value of thisss")
                  //     setInputValue({...inputValue1,option2:newValue});
                  //   }}
                  //   inputValue={inputValue1.textChange2}
                  //   onInputChange={(event, newInputValue) => {
                  //     setInputValue({...inputValue1,textChange2:newInputValue});

                  //   }}

                  //  '& input': {
                  //    width: 200,
                  //    outline:'none',
                  //    borderTop:'none',
                  //    color:"red",
                  //    bgcolor: 'background.paper',
                  //    color: (theme) =>
                  //      theme.palette.getContrastText(theme.palette.background.paper),
                  //  },

                  // sx={{

                  // '& input': {

                  //       borderTop:'none'}

                  //  }}
                  //   countries.map((arr)=>arr.phone)
                  // style={{ width: 300, paddingTop: 300 }}
                  // disablePortal={true}
                  // ListboxProps={{sx={{ width: 800, marginTop: 1.2 }}}}
                  options={countries}
                  autoHighlight
                  fullWidth={false}
                  // getOptionLabel={(option) => option.label}
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
                      // label='Choose a country'
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
                      //   renderInput={(params) => (
                      //   <div ref={params.InputProps.ref}>
                      //     <input type="text" {...params.inputProps} />
                      //   </div>
                      // )}
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
                  // title='Please provide only gmail.com email'
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
                // title='Please provide only gmail.com email'
                onChange={changeBt}
                onKeyDown={() => {
                  setFormError({ ...formerror, Current_location: '' })
                }}
              />
              <div className='formerror'>
                {<p>{formerror.Current_location} </p>}
              </div>
            </div>

            <div className='col-lg-6 inputForm col-md-6'>
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
            <div className='col-lg-6 inputForm col-md-6'>
              <input
                type='text'
                className='form-controller'
                id='experience'
                name='experience'
                value={inputValue.experience}
                placeholder='Years of experience(Optional)'
                // title='Please provide only gmail.com email'
                onChange={changeBt}
              />
            </div>

            <div className='col-lg-6 inputForm  col-md-6'>
              <input
                className='form-controller'
                type='text'
                placeholder='Notice Period(Optional)'
                name='noticePeriod'
                value={inputValue.noticePeriod}
                onChange={changeBt}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12 inputForm col-md-12 relativeError'>
            {/* <BsPaperclip className='paperClip'/> */}
            {/* <FontAwesomeIcon className='paperClip' icon={faPaperclip}  /> */}
            <label  className="form-controller twenty_twenty_file" for="file-choose" >  <FontAwesomeIcon className='paperClip' icon={faPaperclip}  />
            <span className="green-text ">{cvName}</span></label>
              <input
                // className='name2'
                className='form-controller hiden'
                type='file'
                // onKeyDown={() => {
                //   setFormError({ File: '' })
                // }}
                id='file-choose'
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
            <button
              
              className='wt-btn hol btn'
              type='submit'
              // disabled=''
            >
              Send
            </button>
            <p class='agree-policy'>
              By clicking "Send", you agree to our{' '}
              <a
                
                // routerlink='/privacy-policy'
                target='_blank'
               href='https://www.bitpastel.com/#/privacy-policy'
              >
                Privacy Policy.
              </a>
            </p>
          </div>
        </form>
      </section>

      <section
        _ngcontent-c11=''
        className='text-center padding-area d-flex justify-content-center align-items-center common_banner_bottom'
        id='contact'
      ></section>
      <Footer />
    </>
  )
}

export default careerOnly

{
  /* <div class="card-body">
<h5 class="card-title">Special title treatment</h5>
<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div> */
}

{
  /* <section id='cardOnlySec' className='card-section'>
<div className='container text-center'>
  <div className='row'>
{onlyData.map((arr, index) => {
      return (
        <div
          key={index}
          id={`${index}`}
          className='card col-6 col-sm-6 col-md-4 mb-4'
          style={{ border: 'none' }}
          onClick={() => {
            router.push({
              pathname: '/careers/careers-detail',
              query: { slug: arr.id_ }
            })
          }}
        >
         
          <div className='carrier_card_holder'>
            <div className='card-header'>
              <p> {arr.jobTitle}</p>
            </div>
            <div className='card-body-only'>
              <div className='card-body-inner'>
              <div className="name-flex">

                <div className='card-image'>
                  <img src={badgeCard.src} />
                </div>
                <div className='subtitile-sec'>
                <p> {arr.subTitle}</p>
                </div>
              </div>

                <div className='card-image'>
                  <img src={ndBadge.src} />
                </div>
                <p>Experience : {arr.experience}</p>
                <div className='onlyButton mt-4'>
                  <button className='btn btn-primary ripple1 cc_button_holder'>
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })}
  </div>
</div>
</section> */
}
