// import Head from 'next/head'
// import Header from '@components/Header'
// import Footer from '@components/Footer'
// import "bootstrap/dist/css/bootstrap.min.css";

// import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useEffect, useState,useRef } from 'react'
import Header from '../components/header/Header'
import home_banner from '../public/assets/home_banner.webp'

import home_discover from '../public/assets/HOME_discover_01.jpg'
import ai from '../public/assets/ai.svg'
import arvr from '../public/assets/arvr.svg'
import bc from '../public/assets/bc.svg'
import dm from '../public/assets/dm.svg'
import Mobile_App from '../public/assets/Mobile_App.svg'
import Ui_ux from '../public/assets/ui_ux.svg'
import Web_Development from '../public/assets/Web_Development.svg'
import Cart from '../public/assets/Cart.svg'
import Anthony from "../public/assets/Anthony-5.jpg"
import Comma from '../public/assets/comma.png'

import { requirePropFactory } from '@mui/material'

import Modal from './Modal'
import { useRouter } from 'next/router'



import $ from 'jquery'



export default function Home() {
  const router=useRouter()
  const focus = useRef()
//   useEffect(() => {
//     function handleClickOutside (event) {
//       console.log(event.target)
//       console.log(focus.current)
//       if (focus.current && !focus.current.contains(event.target)) {
       
//         // $('.hide').css('display', 'none')
//         // $('#myInputautocomplete-list').css('height','0vh')
//         // myInputautocomplete-list
// console.log("outside click")
//         // setHandFocus(false)
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [focus])
  
  
  const [data, setData] = useState('')
  const [readMore, setReadMore] = useState(false)
  const[showModal,setShowModal]=useState(false)
 

  useEffect(() => {

    console.log(location,"location")
    if (router.query.state == 'make_services') {
      setData('Service')
    } else if (router.query.state == 'make_stories') {
      setData('Stories')
    } else {
      setData('Home')
    }
  }, [router.query])
  useEffect(()=>{
    if(showModal){
      
    $('#whole_content').css("-webkit-filter","brightness(50%)")
    // $('#whole_content').css("background","black")
    // $('#whole_content').css("filter","8px")
    $('#whole_content').css("background-color","rgba(0,0,0,.5)")
    $('#whole_content').css("-webkit-filter","blur(8px)")
    }
    

  },[showModal])


  return (
    <>

<div id='whole_content'>
      {' '}
      {setData.length > 0 && <Header navData={data} />}
      <div className='container height_unset' id='banner'>
        <div className='hero-content'>
          <div className='left-side'>
            <h1>
              Crafting Digital Solutions
              <br />
              for your business
            </h1>
            <ul>
              <li> Shopify Plus &amp; eCom Development </li>
              <li> Web &amp; Mobile App Development </li>
              <li> Marketing Solutions </li>
            </ul>
            <button className='wt-btn first-button' tabindex='0'>
              Lets Work Together
            </button>
          </div>
          <div className='right-side'>
            <img
              alt='Crafting Digital Solutions for your business image'
              height='650'
              src={home_banner.src}
              width='650'
            />
          </div>
        </div>
      </div>
      <div className='home_new_one'>
        <div className='container'>
          <div className='home_new_one_inner'>
            <div className='hnoi_left'>
              <div className='hnoi_left_destop'>
                <img
                  alt='Discover the digital possibilities we can help you unlock for your business! image'
                  height='460'
                  // src={home_discover}
                  src={home_discover.src}
                  width='600'
                />
              </div>
              {/* <div className='hnoi_left_responsive'>
                <img
                  alt='Discover the digital possibilities we can help you unlock for your business! image'
                  height='350'
                  src='assets/img/HOME_discover_responsive.webp'
                  width='350'
                />
              </div> */}
            </div>
            <div className='hnoi_right'>
              <div>
                <h2>
                  Discover the digital possibilities we can help you unlock for
                  your business!
                </h2>
                <p>
                  We understand your unique way of work and provide bespoke
                  technology solutions. Our team works in sync with you ensuring
                  seamless delivery and optimum quality.
                </p>
                <p>We are eager to know about your business</p>
                <div className='hnoi_right_button'>
                  <button
                    _ngcontent-c5=''
                    className='wt-btn hnoi_right_button_holder'
                    tabindex='0'
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ..................our services........... */}
      <div className='padding-area' id='services'>
        <section className='container mt-5'>
          <h3 className='text-center heading-2 mb-5'>Our Services</h3>
          <div className='row'>
            <div className='col-6 col-sm-6 col-md-4 service' id='service1'>
              <div className='fbox-icon'>
                <img
                  alt='E-Commerce icon'
                  height='50'
                  src={Cart.src}
                  // {require('../assets/Cart.svg')}
                  // {require('./assets/ap_logo.png')}
                  width='50'
                />
              </div>
              <p>Shopify Plus</p>
              <div className='overlay-area'>
                <p> Shopify Development </p>
                <span className='d-block'>
                  Shopify Plus design &amp; development, migration, app
                  integration, private apps &amp; custom e-commerce development
                  and implementation{' '}
                </span>
              </div>
            </div>
            <div className='col-6 col-sm-6 col-md-4 service' id='service2'>
              <div className='fbox-icon'>
                <img
                  alt='Web Development icon'
                  height='50'
                  src={Web_Development.src}
                  width='50'
                />
              </div>
              <p>Web Development</p>
              <div className='overlay-area'>
                <p>Web App Development</p>
                <span className='d-block'>
                  {' '}
                  Websites &amp; Custom Development in Webflow, Shopify,
                  Angular, React JS, Node.js, MongoDB, PHP, MySQL{' '}
                </span>
              </div>
            </div>
            <div
              _ngcontent-c5=''
              className='col-6 col-sm-6 col-md-4 service'
              id='service3'
            >
              <div _ngcontent-c5='' className='fbox-icon'>
                <img
                  _ngcontent-c5=''
                  alt='Mobile App icon'
                  height='50'
                  src={Mobile_App.src}
                  width='50'
                />
              </div>
              <p>Mobile Apps</p>
              <div className='overlay-area'>
                <p>Mobile App Development</p>
                <span className='d-block'>
                  {' '}
                  React Native, Flutter, Native iOS &amp; Android Apps{' '}
                </span>
              </div>
            </div>
            <div className='col-6 col-sm-6 col-md-4 service' id='service4'>
              <div _ngcontent-c5='' className='fbox-icon'>
                <img
                  _ngcontent-c5=''
                  alt='Artificial Intelligence icon'
                  height='50'
                  src={ai.src}
                  width='50'
                />
              </div>
              <p>Artificial Intelligence</p>
              <div className='overlay-area'>
                <p>Artificial Intelligence</p>
                <span className='d-block'>
                  {' '}
                  Give your applications Intelligence. Increase efficiency by
                  automating manual processes
                </span>
              </div>
            </div>
            <div className='col-6 col-sm-6 col-md-4 service' id='service5'>
              <div className='fbox-icon'>
                <img alt='Blockchain icon' height='50' src={bc.src} width='50' />
              </div>
              <p>Blockchain</p>
              <div className='overlay-area'>
                <p>Blockchain</p>
                <span className='d-block'>
                  {' '}
                  Secure, tamperproof and encrypted storage of information with
                  Blockchain
                </span>
              </div>
            </div>
            <div className='col-6 col-sm-6 col-md-4 service' id='service6'>
              <div className='fbox-icon'>
                <img alt='AR &amp; VR icon' height='50' src={arvr.src} width='50' />
              </div>
              <p _ngcontent-c5=''>AR &amp; VR</p>
              <div _ngcontent-c5='' className='overlay-area'>
                <p _ngcontent-c5=''>AR &amp; VR</p>
                <span _ngcontent-c5='' className='d-block'>
                  {' '}
                  Experts in building next generation User Experiences with
                  Augmented &amp; Virtual Reality{' '}
                </span>
              </div>
            </div>
            <div
              _ngcontent-c5=''
              className='col-6 col-sm-6 col-md-4 service'
              id='service7'
            >
              <div _ngcontent-c5='' className='fbox-icon'>
                <img
                  _ngcontent-c5=''
                  alt='Digital Marketing Icon'
                  height='50'
                  src={dm.src}
                  width='50'
                />
              </div>
              <p _ngcontent-c5=''>Digital Marketing</p>
              <div _ngcontent-c5='' className='overlay-area'>
                <p _ngcontent-c5=''>Digital Marketing</p>
                <span _ngcontent-c5='' className='d-block'>
                  {' '}
                  Build your Brand, Go Viral &amp; Grow your Customer Base by
                  10X with our Digital Marketing team
                </span>
              </div>
            </div>
            <div
              _ngcontent-c5=''
              className='col-6 col-sm-6 col-md-4 service'
              id='service8'
            >
              <div _ngcontent-c5='' className='fbox-icon'>
                <img
                  _ngcontent-c5=''
                  alt='UI UX icon'
                  height='50'
                  src={Ui_ux.src}
                  width='50'
                />
              </div>
              <p _ngcontent-c5=''>UI/UX</p>
              <div _ngcontent-c5='' className='overlay-area'>
                <p _ngcontent-c5=''>UI/UX</p>
                <span _ngcontent-c5='' className='d-block'>
                  {' '}
                  Figma, Invision, XD, Sketch - Wireframing, Mobile App Design,
                  Responsive Web Design, HTML5, CSS3, SASS, PSD to HTML{' '}
                </span>
              </div>
            </div>
            <div
              _ngcontent-c5=''
              className='col-6 col-sm-6 col-md-4 service'
              id='service9'
            >
              <div _ngcontent-c5='' className='fbox-icon'>
                <img
                  _ngcontent-c5=''
                  alt='Design &amp; Creative icon'
                  height='50'
                  src={Ui_ux.src}
                  width='50'
                />
              </div>
              <p _ngcontent-c5=''>Design &amp; Creatives</p>
              <div _ngcontent-c5='' className='overlay-area'>
                <p _ngcontent-c5=''>Design &amp; Creatives</p>
                <span _ngcontent-c5='' className='d-block'>
                  {' '}
                  Crafting digital logos, flyers, banners, icons, infographics,
                  Performance Creatives, posters &amp; illustrations{' '}
                </span>
              </div>
            </div>
            <div
              _ngcontent-c5=''
              className='col-6 col-sm-6 col-md-4 service'
              id='service10'
            >
              <div _ngcontent-c5='' className='fbox-icon'>
                <img
                  _ngcontent-c5=''
                  alt='Wordpress icon'
                  height='50'
                  src={Ui_ux.src}
                  width='50'
                />
              </div>
              <p _ngcontent-c5=''>WordPress</p>
              <div _ngcontent-c5='' className='overlay-area active'>
                <p _ngcontent-c5=''>WordPress | WooCommerce</p>
                <span _ngcontent-c5='' className='d-block'>
                  {' '}
                  WordPress CMS &amp; WordPress development, WordPress
                  customization, plugin development and integration with 3rd
                  party applications{' '}
                </span>
              </div>
            </div>
            <div
              _ngcontent-c5=''
              className='col-6 col-sm-6 col-md-4 service'
              id='service11'
            >
              <div _ngcontent-c5='' className='fbox-icon'>
                <img
                  _ngcontent-c5=''
                  alt='Social icon'
                  height='50'
                  src={Ui_ux.src}
                  width='50'
                />
              </div>
              <p _ngcontent-c5=''>Startup Consulting</p>
              <div _ngcontent-c5='' className='overlay-area'>
                <p _ngcontent-c5=''>Startup Consulting</p>
                <span _ngcontent-c5='' className='d-block'>
                  {' '}
                  Consult us to accelerate growth with digital transformation
                </span>
              </div>
            </div>
            <div
              _ngcontent-c5=''
              className='col-6 col-sm-6 col-md-4 service'
              id='service12'
            >
              <div _ngcontent-c5='' className='fbox-icon'>
                <img
                  _ngcontent-c5=''
                  alt='CRM &amp; ERP icon'
                  height='50'
                  src={Ui_ux.src}
                  width='50'
                />
              </div>
              <p _ngcontent-c5=''>CRM &amp; ERP</p>
              <div _ngcontent-c5='' className='overlay-area'>
                <p _ngcontent-c5=''>CRM &amp; ERP</p>
                <span _ngcontent-c5='' className='d-block'>
                  {' '}
                  Custom CRM &amp; ERP for your business. We specialize in Real
                  Estate, Mortgage, Financial Industry{' '}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* ...........Stories section.......... */}
      <section
        _ngcontent-c5=''
        className='padding-area testimonials'
        id='stories'
        shown='0'
      >
        <div _ngcontent-c5='' className='container-fluid'>
          <h3 _ngcontent-c5='' className='text-center heading-2'>
            Stories
          </h3>
          <p _ngcontent-c5='' className='text-center sub-heading-p'>
            What our clients say about us
          </p>
          <div _ngcontent-c5='' className='row justify-content-center'>
          {[...Array(9)].map(arr => {
            return(
            <div
              _ngcontent-c5=''
              className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3 testi-ani grayscaleani'
            >
              <div _ngcontent-c5='' className='testimonial-child'>
                <div _ngcontent-c5='' className='author-img'>
                  <img
                    _ngcontent-c5=''
                    alt='Client - Reece Wabara'
                    height='100'
                    src={Anthony.src}
                    width='100'
                  />
                </div>
                <p _ngcontent-c5='' className='content'>
                  <img
                    _ngcontent-c5=''
                    alt='quote-start'
                    height='12'
                    src={Comma.src}
                    width='12'
                  />
                  Ayan and his team are superstars, they interpret suggestions
                  well and propose even better and more efficient alternatives,
                  the team's work is to a very high standard and turn around
                  time is much faster than a UK equivalent
                  <img
                    _ngcontent-c5=''
                    alt='quote-end'
                    className='last'
                    height='12'
                    src={Comma.src}
                    width='12'
                  />
                </p>
                <div _ngcontent-c5='' className='bottom'>
                  <p _ngcontent-c5=''>Reece Wabara</p>
                  <span _ngcontent-c5=''>
                    CEO, Maniére De Voir, UK | Forbes 30 Under 30{' '}
                  </span>
                </div>
              </div>
            </div>
            )
          })}

        
            {readMore && (
              <div className='row'>
                {' '}
                <div
                  _ngcontent-c5=''
                  className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3 testi-ani hide-show'
                >
                  <div _ngcontent-c5='' className='testimonial-child'>
                    <div _ngcontent-c5='' className='author-img'>
                      <img
                        _ngcontent-c5=''
                        alt='Client Dan Miller'
                        height='100'
                        src={Anthony}
                        width='100'
                      />
                    </div>
                    <p _ngcontent-c5='' className='content'>
                      <img
                        _ngcontent-c5=''
                        alt='quote-start'
                        height='12'
                        src={Comma}
                        width='12'
                      />
                      We have worked with Bitpastel now for over 2 years and
                      we've been really happy with the level of service and
                      development work we have had done. They now manage all of
                      our technology needs on an ongoing basis and nothing ever
                      seems to be an issue with our requirements. Work is
                      completed on time and to the highest quality that meets
                      our expectations.
                      <img
                        _ngcontent-c5=''
                        alt='quote-end'
                        className='last'
                        height='12'
                        src={Comma}
                        width='12'
                      />
                    </p>
                    <div _ngcontent-c5='' className='bottom'>
                      <p _ngcontent-c5=''>Dan Miller</p>
                      <span _ngcontent-c5=''>CEO, Young Professionals, UK</span>
                    </div>
                  </div>
                </div>
                <div
                  _ngcontent-c5=''
                  className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3 testi-ani hide-show'
                >
                  <div _ngcontent-c5='' className='testimonial-child'>
                    <div _ngcontent-c5='' className='author-img'>
                      <img
                        _ngcontent-c5=''
                        alt='Client Charles Fried'
                        height='100'
                        src={Anthony}
                        width='100'
                      />
                    </div>
                    <p _ngcontent-c5='' className='content'>
                      <img
                        _ngcontent-c5=''
                        alt='quote-start'
                        height='12'
                        src={Comma}
                        width='12'
                      />
                      Ayan is a sharp individual and showed a very good ability
                      to quickly understand our brief and get his team to
                      deliver according to our specification. I recommend
                      <img
                        _ngcontent-c5=''
                        alt='quote-end'
                        className='last'
                        height='12'
                        src={Comma}
                        width='12'
                      />
                    </p>
                    <div _ngcontent-c5='' className='bottom'>
                      <p _ngcontent-c5=''>Charles Fried</p>
                      <span _ngcontent-c5=''>
                        CTO &amp; Co-Founder, BlockSmith Capital Ltd, UK
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  _ngcontent-c5=''
                  className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3 testi-ani hide-show'
                >
                  <div _ngcontent-c5='' className='testimonial-child'>
                    <div _ngcontent-c5='' className='author-img'>
                      <img
                        _ngcontent-c5=''
                        alt='Client - Alf Bergin'
                        height='100'
                        src={Anthony}
                        width='100'
                      />
                    </div>
                    <p _ngcontent-c5='' className='content'>
                      <img
                        _ngcontent-c5=''
                        alt='quote-start'
                        height='12'
                        src={Comma}
                        width='12'
                      />
                      Bitpastel is an ambitious design &amp; development team.
                      They take good care of the client and have a professional
                      attitude. What I really appreciate is that work is done
                      quickly and without delays which is very important for a
                      long-term business relationship. I really like their way
                      to communicate
                      <img
                        _ngcontent-c5=''
                        alt='quote-end'
                        className='last'
                        height='12'
                        src='assets/img/comma.png'
                        width='12'
                      />
                    </p>
                    <div _ngcontent-c5='' className='bottom'>
                      <p _ngcontent-c5=''>Alf Bergin</p>
                      <span _ngcontent-c5=''>
                        CEO, Svart på Kvitt SA, Norway
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {!readMore && (
              <div
                _ngcontent-c5=''
                className='hide_show_button position-relative ng-star-inserted'
              >
                <div _ngcontent-c5='' className='hnoi_right_button'>
                  <button
                    _ngcontent-c5=''
                    className='wt-btn hnoi_right_button_holder explorebtn'
                    onClick={() => setReadMore(!readMore)}
                  >
                    Explore more stories
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section
        _ngcontent-c5=''
        className='text-center  d-flex justify-content-center align-items-center common_banner_bottom'
        id='contact'
      >
        <button _ngcontent-c5='' className='wt-btn small-padding' onClick={()=>{
        setShowModal(!showModal) ; }} tabindex='0'>
          {/* {' '} */}
          Leave a Message{' '}
        </button>
      </section>

     




    </div>
     
    {
      (showModal &&
      <div className="overlay" >
      <div className="overlay-inner " >
      <Modal />
      </div>
      
      </div>
        

  
      )
      }


    </>
  )
}
