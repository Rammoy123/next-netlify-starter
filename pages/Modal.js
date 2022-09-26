import React, { useEffect, useRef } from 'react'
import $ from 'jquery'
import BitpastelNew from '../public/assets/bitpastel_Clientele_5_new.png'

import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment'

import { grey, purple } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import modal_1 from '../public/assets/modal-1.png'
import modal_2 from '../public/assets/modal-2.png'
import modal_3 from '../public/assets/modal-3.png'
import modal_4 from '../public/assets/modal-4.png'
import countries1 from '@components/Mapdata'
import  Axios  from 'axios'


const Modal = ({ hideMe }) => {

  //For large width of autocomplete
  // useEffect(()=>{
    // $(document).ready(function() {
  
      //uncommnent from here.......
      //   $('.MuiAutocomplete-endAdornment').click(function(e) {
      //     $('.MuiAutocomplete-popper').css('width','0px')
      //   console.log(e,"loll clicked")
      //   setTimeout( ()=>{
      //     includeClass()

      //   },20)
       
    
      // });
      //to here
  // });

  // },[])

  

  const focus = useRef()
  useEffect(() => {
    function handleClickOutside (event) {
      console.log(event.target.ariaExpanded, 'roleee')
      // console.log(focus.current)
      if (focus.current && !focus.current.contains(event.target)) {
        console.log(event.target.id, 'roleee111')
        if ((event.target.role != 'option') &&(event.target.role != 'listbox') ){
          hideMe()
        }
  
      }
      //uncomment to enlatge the width of autocomplete
      // else if((event.target.id=='controllable-states-demo') &&(event.target.ariaExpanded
      //   )) {
      //     console.log("in onlyyy")
      //  includeClass()

      // }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [focus])
  // useEffect(()=>{

  // $("#whole_content").css("Filter","blur(2px)")

  // },[])
  // {console.log("modal")}
  // $('#exampleModalLong').on('shown.bs.modal', function () {
  //   $('#myInput').trigger('focus')
  //   $('#exampleModalLong').modal({
  //     backdrop: 'static',
  //     keyboard: false
  // })

  // })

  // const hide=()=>{
  //   console.log($('#myModal'),"modalll")

  //   $('#exampleModalLong').hide()

  //       }
  // const myModal = new bootstrap.Modal('exampleModalLong', {
  //   keyboard: false,
  //   backdrop:false
  // })

  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    phone: '',
    option1: '',
    ph_code: '',
    message: '',
    textChange1: '',
    textChange2: ''
  })
  const [formerror, setFormError] = useState({})

  const [isSubmit, setIsSubmit] = useState(false)
  // const [input,setInput]=useState([])
  const [countries, setCountries] = useState(countries1)


  const changeBt = e => {
    console.log(e)
    const { name, value } = e.target

    console.log(name, value, 'kolllllllll')
    setInputValue({
      ...inputValue,

      [name]: value
    })
    console.log(inputValue, 'inputValue')
  }
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

    return error
  }
  
  // const includeClass=()=>{
  //   console.log("rammmoy")


  //  $('.MuiAutocomplete-popper').addClass('activeDataa')
  // }

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
    console.log(countries,"klop")
   
    if (Object.keys(formerror).length === 0 && isSubmit) {
      console.log(inputValue, 'passed object')
    }
  }, [formerror])
  const services = ['Shopify Store', 'Website', 'Mobile App', 'UI/UX Design']
  return (
    <div className='parent' style={{ overflowY: 'hidden' }}>
  
      <div
        className='modal fade show'
        data-bs-backdrop='false'
        id='exampleModalLong'
        tabindex='-1'
        aria-labelledby='exampleModalLongTitle'
        style={{ display: 'block', paddingLeft: '0px' }}
        aria-modal='true'
        role='dialog'
      >
        <div className='modal-dialog'>
          <div className='modal-content animated zoomIn' ref={focus} >
            {/* style={{minHeight: "1500px"}} */}
            <div className='modal-body'>
              <div className='container'>
                <div className='row '>
                  <div _ngcontent-c1='' className='col-md-6'>
                    <div className='full-height'>
                      <img
                        _ngcontent-c1=''
                        className='img-fluid map-image'
                        alt='Modal Client image'
                        height='1000'
                        src={BitpastelNew.src}
                        width='584'
                      />
                      <div className='map-bottom'>
                        <h3 class='text-center'>
                          {' '}
                          Satisfied Clientele Worldwide{' '}
                        </h3>
                        <div className='client-area'>
                          <div className='area-one animated'>
                            <img
                              className='map-icons'
                              alt=''
                              src={modal_1.src}
                            />
                            <h6 className='ng-tns-c1-0'>800</h6>
                            <p className='ng-tns-c1-0'>Clients</p>
                          </div>
                          <div className='area-two animated'>
                            <img
                              className='map-icons'
                              alt=''
                              src={modal_2.src}
                            />
                            <h6 className='ng-tns-c1-0'>1000</h6>
                            <p className='ng-tns-c1-0'>Projects</p>
                          </div>
                          <div className='area-three animated'>
                            <img
                              className='map-icons'
                              alt=''
                              src={modal_3.src}
                            />
                            <h6 className='ng-tns-c1-0'>30M</h6>
                            <p className='ng-tns-c1-0'>Lines of Code</p>
                          </div>
                          <div className='area-four animated'>
                            <img
                              className='map-icons'
                              alt=''
                              src={modal_4.src}
                            />
                            <h6 className='ng-tns-c1-0'>30</h6>
                            <p className='ng-tns-c1-0'>Countries</p>
                          </div>
                        </div>
                        <div className='text-center calling-area calling-desk-area'>
                          <div className='new_popup_buttom'>
                            <div className='new_popup_buttom_holder'>
                              <a
                                
                                class='number_holder'
                                href='tel:+442081446579'
                              >
                                UK: +44 2081 446579
                              </a>
                            </div>
                          </div>
                          <div className='new_popup_buttom'>
                            <div className='new_popup_buttom_holder'>
                            <a  class="number_holder" href="tel:+1(872)4446679">US: +1 (872) 444 6679  </a>{'  '}
                            </div>

                          </div>
                          <div className='new_popup_buttom_last'>
                            <div className='new_popup_buttom_holder'>
                            <a  class="number_holder" href="tel:+919830566248">IN: +91 9830 566 248</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div _ngcontent-c1='' className='col-md-6'>
                    <div className='form-wrapper'>
                      <div className='form-inner'>
                        <form onSubmit={handleClick}>
                          <div className='row row-modal-p '>
                            <div className='modal-para col-md-4  position-r'>
                              <div className='want-parent'>
                                <p className='p-item'>I want </p>
                              </div>
                            </div>
                            <div className='modal-auto col-md-8' >
                              <Autocomplete
                                value={inputValue.option1}
                                fullWidth
                                onChange={(event, newValue) => {
                                  console.log(newValue, 'value of thisss')
                                  setInputValue({
                                    ...inputValue,
                                    option1: newValue
                                  })
                                }}
                                // style={{ marginTop:"50px" }}
                                inputValue={inputValue.textChange1}
                                onInputChange={(event, newInputValue) => {
                                  setInputValue({
                                    ...inputValue,
                                    textChange1: newInputValue
                                  })
                                }}
                                // style={{width:'100%'}}
                                // id="disable-clearable"
                                disableClearable
                                id='controllable-states-demo'
                                options={services}
                                // sx={{ width: 200 }}
                                renderInput={params => (
                                  <TextField
                                    variant='standard'
                                    {...params}
                                    color='primary'
                                    // focused
                                    label='select'
                                  />
                                )}
                              />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='modal-auto col-md-12 relativeError'>
                              <input
                                type='text'
                                className='form-controller modal-form'
                                id='name'
                                name='name'
                                value={inputValue.name}
                                placeholder='Name*'
                                onChange={changeBt}
                                onKeyDown={() => {
                                  setFormError({ ...formerror, Name: '' })
                                }}
                              />
                              <div className='formerror error-modal'>
                                {<p>{formerror.Name} </p>}
                              </div>
                            </div>

                            <div className='modal-auto col-md-12 relativeError' >
                              <input
                                className='form-controller modal-form'
                                id='email'
                                type='text'
                                placeholder='Email*'
                                name='email'
                                value={inputValue.email}
                                onChange={changeBt}
                                onKeyDown={() => {
                                  setFormError({ ...formerror, Email: '' })
                                }}
                              />
                              <div className='formerror error-modal'>
                                {<p>{formerror.Email} </p>}
                              </div>
                            </div>
                          </div>
                          <div className='phone-sec'>
                            <div className=' row'>
                            {/* onClick={includeClass} */}
                              <div className='phone-left col-md-4 text-center d modal-demo' >
                                <Autocomplete
                                  id='controllable-states-demo1'
                                  sx={{
                                    width: 400,
                                    marginTop: 0.8,
                                    outline: 'none',
                                    color: 'transparent',
                                    outline: 'none',
                                    background: 'transparent'
                                  }}
                                  // ListboxProps={{sx:{right:}}}

                                  className='in'
                                  value={inputValue.ph_code}
                                  disableClearable
                                  onChange={(event, newValue) => {
                                    console.log(
                                      event.target.parentElement.id,
                                      'value of thisss'
                                    )
                                    setInputValue({
                                      ...inputValue,
                                      ph_code: newValue
                                    })
                                  }}
                                  inputValue={inputValue.textChange2}
                                  onInputChange={(event, newInputValue) => {
                                    // console.log(event,"event")

                                    console.log(
                                      newInputValue,
                                      'inputttvaluethjpolp'
                                    )
                                    setInputValue({
                                      ...inputValue,
                                      textChange2: newInputValue
                                    })
                                  }}
                                  getOptionLabel={option =>`  +${option.phone}`}
                                  options={countries}
                                  autoHighlight
                                  // fullWidth={false}
                                  // getOptionLabel={(option) => option.label}
                                  renderOption={(props, option) => (
                                    <Box
                                      component='li'
                                      sx={{
                                        '& > img': { mr: 2, flexShrink: 0 }
                                      }}
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
                                      // color='secondary'
                                      //  focused

                                      {...params}
                                      // disableClearable
                                      // label='Select'
                                      InputProps={{
                                        //  style: { color: "red" } ,
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
                              <div className='right-side col-md-8 relativeError'>
                                <input
                                  type='text'
                                  id='phone'
                                  className='form-controller modal-form'
                                  name='phone'
                                  value={inputValue.phone}
                                  placeholder='Phone No*'
                                  // title='Please provide only gmail.com email'
                                  onChange={changeBt}
                                  onKeyDown={() => {
                                    setFormError({ ...formerror, Phone: '' })
                                  }}
                                />
                                <div className='formerror error-modal'>
                                  {<p>{formerror.Phone} </p>}
                                </div>
                              </div>
                            </div>

                            <div className='right-side col-md-12 relativeError'>
                              <input
                                type='text'
                                id='message'
                                className='form-controller modal-form'
                                name='message'
                                value={inputValue.message}
                                placeholder='Message(optional)'
                                // title='Please provide only gmail.com email'
                                onChange={changeBt}
                                // onKeyDown={() => {
                                //   setFormError({ ...formerror, Phone: '' })
                                // }}
                              />
                              {/* <div className='formerror'>{<p>{formerror.Phone} </p>}</div> */}
                            </div>
                          </div>

                          <div _ngcontent-c1='' className='text-center'>
                            <button
                              _ngcontent-c1=''
                              className='btn btn-secondary send-btn'
                              type='submit'
                            >
                              {' '}
                              Lets Work Together{' '}
                            </button>
                            <p _ngcontent-c1='' className='agree-policy'>
                              By clicking "Lets Work Together", you agree to our{' '}
                              <a
                                _ngcontent-c1=''
                                className='ng-tns-c1-0'
                                // routerlink='/privacy-policy'
                                target='_blank'
                                href='https://www.bitpastel.com/#/privacy-policy'
                              >
                                Privacy Policy.
                              </a>
                            </p>
                          </div>

                        <div  className='text-center calling-area another chatB calling-mob-area'>
                        <a  className="btn btn-secondary send-btn chatWUs" target="_blank" href="https://wa.me/919830566248/?text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&amp;type=phone_number&amp;app_absent=0"> Chat with Us </a>
                        </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  {/* <div _ngcontent-c1='' className='map-bottom'>
                    <h3 _ngcontent-c1='' className='text-center'>
                      Satisfied Clientele Worldwide{' '}
                    </h3>
                    <div _ngcontent-c1='' className='client-area'>
                      <div _ngcontent-c1='' className='area-one animated'>
                        <img
                          _ngcontent-c1=''
                          className='map-icons'
                          alt=''
                          src='assets/img/modal-1.png'
                        />
                        <h6 _ngcontent-c1='' className='ng-tns-c1-0'>
                          800
                        </h6>
                        <p _ngcontent-c1='' className='ng-tns-c1-0'>
                          Clients
                        </p>
                      </div>
                      <div _ngcontent-c1='' className='area-two animated'>
                        <img className='map-icons' alt='' src={BitpastelNew.src} />
                        <h6 _ngcontent-c1='' className='ng-tns-c1-0'>
                          1000
                        </h6>
                        <p _ngcontent-c1='' className='ng-tns-c1-0'>
                          Projects
                        </p>
                      </div>
                      <div _ngcontent-c1='' className='area-three animated'>
                        <img
                          _ngcontent-c1=''
                          className='map-icons'
                          alt=''
                          src='assets/img/modal-3.png'
                        />
                        <h6 _ngcontent-c1='' className='ng-tns-c1-0'>
                          30M
                        </h6>
                        <p _ngcontent-c1='' className='ng-tns-c1-0'>
                          Lines of Code
                        </p>
                      </div>
                      <div _ngcontent-c1='' className='area-four animated'>
                        <img
                          _ngcontent-c1=''
                          className='map-icons'
                          alt=''
                          src='assets/img/modal-4-updated.png'
                        />
                        <h6 _ngcontent-c1='' className='ng-tns-c1-0'>
                          30
                        </h6>
                        <p _ngcontent-c1='' className='ng-tns-c1-0'>
                          Countries
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

{
  /* <div _ngcontent-c1="" class="map-bottom"><h3 _ngcontent-c1="" class="text-center"> 
Satisfied Clientele Worldwide </h3>
<div _ngcontent-c1="" class="client-area">
<div _ngcontent-c1="" class="area-one animated">
<img _ngcontent-c1="" class="map-icons" alt="" src="assets/img/modal-1.png">
<h6 _ngcontent-c1="" class="ng-tns-c1-0">800</h6><p _ngcontent-c1="" class="ng-tns-c1-0">Clients</p></div>
<div _ngcontent-c1="" class="area-two animated"><img  class="map-icons" alt="" src={BitpastelNew.src}/>
<h6 _ngcontent-c1="" class="ng-tns-c1-0">1000</h6><p _ngcontent-c1="" class="ng-tns-c1-0">Projects</p>
</div><div _ngcontent-c1="" class="area-three animated">
<img _ngcontent-c1="" class="map-icons" alt="" src="assets/img/modal-3.png">
<h6 _ngcontent-c1="" class="ng-tns-c1-0">30M</h6>
<p _ngcontent-c1="" class="ng-tns-c1-0">Lines of Code</p></div>
<div _ngcontent-c1="" class="area-four animated">
<img _ngcontent-c1="" class="map-icons" alt="" src="assets/img/modal-4-updated.png">
<h6 _ngcontent-c1="" class="ng-tns-c1-0">30</h6><p _ngcontent-c1="" class="ng-tns-c1-0">Countries</p></div>
</div><div _ngcontent-c1="" class="text-center calling-area calling-desk-area"><div _ngcontent-c1="" class="new_popup_buttom">
<div _ngcontent-c1="" class="new_popup_buttom_holder">
<a _ngcontent-c1="" class="number_holder" href="tel:+442081446579">UK: +44 2081 446579</a></div></div>
<div _ngcontent-c1="" class="new_popup_buttom">
<div _ngcontent-c1="" class="new_popup_buttom_holder"><a _ngcontent-c1="" class="number_holder" href="tel:+1(872)4446679">US: +1 (872) 444 6679</a>
</div></div><div _ngcontent-c1="" class="new_popup_buttom">
<div _ngcontent-c1="" class="new_popup_buttom_holder">
<a _ngcontent-c1="" class="number_holder" href="tel:+919830566248">IN: +91 9830 566 248</a>
</div>
</div>
</div>
</div> */
}

{
  /* <div _ngcontent-c1="" class="map-bottom"><h3 _ngcontent-c1="" class="text-center"> 
Satisfied Clientele Worldwide </h3>
<div _ngcontent-c1="" class="client-area">
<div _ngcontent-c1="" class="area-one animated">
<img _ngcontent-c1="" class="map-icons" alt="" src="assets/img/modal-1.png">
<h6 _ngcontent-c1="" class="ng-tns-c1-0">800</h6><p _ngcontent-c1="" class="ng-tns-c1-0">Clients</p></div>
<div _ngcontent-c1="" class="area-two animated"><img  class="map-icons" alt="" src={BitpastelNew.src}/>
<h6 _ngcontent-c1="" class="ng-tns-c1-0">1000</h6><p _ngcontent-c1="" class="ng-tns-c1-0">Projects</p>
</div><div _ngcontent-c1="" class="area-three animated">
<img _ngcontent-c1="" class="map-icons" alt="" src="assets/img/modal-3.png">
<h6 _ngcontent-c1="" class="ng-tns-c1-0">30M</h6>
<p _ngcontent-c1="" class="ng-tns-c1-0">Lines of Code</p></div>
<div _ngcontent-c1="" class="area-four animated">
<img _ngcontent-c1="" class="map-icons" alt="" src="assets/img/modal-4-updated.png">
<h6 _ngcontent-c1="" class="ng-tns-c1-0">30</h6><p _ngcontent-c1="" class="ng-tns-c1-0">Countries</p></div> */
}
