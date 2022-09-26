import React, { useEffect, useState, useRef } from 'react'
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
// import Anthony from '../public/assets/Anthony-5.jpg'
import Comma from '../public/assets/comma.png'
import Footer from '@components/footer/Footer'
import clientel from '../public/assets/bitpastel_clientele-1.png'
import why1 from '../public/assets/why_work_1.webp'
import why2 from '../public/assets/why_work_2.webp'
import why3 from '../public/assets/why_work_3.webp'
import why4 from '../public/assets/why_work_4.webp'
import why5 from '../public/assets/why_work_5.webp'
import one from '../public/assets/stories/1.jpg'
import two from '../public/assets/stories/2.jpg'
import three from '../public/assets/stories/3.jpg'
import four from '../public/assets/stories/4.jpg'
import five from '../public/assets/stories/5.jpg'
import six from '../public/assets/stories/6.jpg'
import seven from '../public/assets/stories/7.jpg'
import eight from '../public/assets/stories/8.jpg'
import nine from '../public/assets/stories/9.jpg'
import ten from '../public/assets/stories/10.jpg'
import eleven from '../public/assets/stories/11.jpg'
import twelve from '../public/assets/stories/12.jpeg'
import Link from 'next/link'


import { BiCheckCircle } from 'react-icons/bi'

// import { requirePropFactory } from '@mui/material'

import Modal from './Modal'

import { useRouter } from 'next/router'

import $ from 'jquery'
import Image from 'next/image'
const Home1 = () => {
  const router = useRouter()
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
  const [showModal, setShowModal] = useState(false)
 

  useEffect(() => {
    console.log(router.query, 'location')
    if (router.query.home == 'make_services') {
      setData('Service')
    } else if (router.query.home == 'make_stories') {
      setData('Stories')
    } else {
      setData('Home')
    }
    if (router.query.home == 'free-quotes') {
      setShowModal(true)
    }
  }, [router.query])
  useEffect(() => {
    // router.push("/")
    if (showModal) {
      $('#whole_content').addClass('activeHome')
      // $('#whole_content').css('-webkit-filter', 'brightness(50%)')

      // $('#whole_content').css('background-color', 'rgba(0,0,0,.5)')
      // $('#whole_content').css('-webkit-filter', 'blur(8px)')
    } else {
      $('#whole_content').removeClass('activeHome')
    }
  }, [showModal])
  return (
    <>
      <div id='whole_content'>
        {' '}
        {setData.length > 0 && <Header navData={data} />}
        <div className='container height_unset' id='banner'>
          <div className='hero-content' id='horo'>
            <div className='left-side'>
              <h1>
                Crafting Digital Solutions
                <br />
                for your business
              </h1>
              <ul>
                <li>
                  {' '}
                  <BiCheckCircle className='first-check ' /> Shopify Plus &amp;
                  eCom Development{' '}
                </li>
                <li>
                  {' '}
                  <BiCheckCircle className='first-check ' /> Web &amp; Mobile
                  App Development{' '}
                </li>
                <li>
                  {' '}
                  <BiCheckCircle className='first-check ' /> Marketing Solutions{' '}
                </li>
              </ul>
              <button
                onClick={() => {
                  router.push(`/free-quotes`)
                }}
                className='wt-btn first-button'
                tabindex='0'
              >
                Lets Work Together
              </button>
            </div>
            <div className='right-side'>
              <img
                alt='Crafting Digital Solutions for your business image'
                height='650'
                src={home_banner.src}
                width='650'
                // placeholder='blur'
                // priority
              />
            </div>
          </div>
        </div>
        <div className='home_new_one' id='home_new'>
          <div className='container'>
            <div className='home_new_one_inner'>
              <div className='hnoi_left'>
                <div className='hnoi_left_destop'>
                  <img
                    alt='Discover the digital possibilities we can help you unlock for your business! image'
                    height='460'
                    src={home_discover.src}
                    width='600'
                  />
                </div>
              </div>
              <div className='hnoi_right'>
                <div>
                  <h2>
                    Discover the digital possibilities we can help you unlock
                    for your business!
                  </h2>
                  <p>
                    We understand your unique way of work and provide bespoke
                    technology solutions. Our team works in sync with you
                    ensuring seamless delivery and optimum quality.
                  </p>
                  <p>We are eager to know about your business</p>
                  <div className='hnoi_right_button'>
                    <button
                      _ngcontent-c5=''
                      className='wt-btn hnoi_right_button_holder'
                      tabindex='0'
                      onClick={() => {
                        // $('#whole_content').addClass(activeHome)
                        router.push(`/free-quotes`,undefined,{scroll:false})

                        // setShowModal(!showModal)
                      }}
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    width='50'
                  />
                </div>
                <p>Shopify Plus</p>
                <div className='overlay-area'>
                  <p> Shopify Development </p>
                  <span className='d-block'>
                    Shopify Plus design &amp; development, migration, app
                    integration, private apps &amp; custom e-commerce
                    development and implementation{' '}
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
                  <img
                    alt='Blockchain icon'
                    height='50'
                    src={bc.src}
                    width='50'
                  />
                </div>
                <p>Blockchain</p>
                <div className='overlay-area'>
                  <p>Blockchain</p>
                  <span className='d-block'>
                    {' '}
                    Secure, tamperproof and encrypted storage of information
                    with Blockchain
                  </span>
                </div>
              </div>
              <div className='col-6 col-sm-6 col-md-4 service' id='service6'>
                <div className='fbox-icon'>
                  <img
                    alt='AR &amp; VR icon'
                    height='50'
                    src={arvr.src}
                    width='50'
                  />
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
                    Figma, Invision, XD, Sketch - Wireframing, Mobile App
                    Design, Responsive Web Design, HTML5, CSS3, SASS, PSD to
                    HTML{' '}
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
                    Crafting digital logos, flyers, banners, icons,
                    infographics, Performance Creatives, posters &amp;
                    illustrations{' '}
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
                    Custom CRM &amp; ERP for your business. We specialize in
                    Real Estate, Mortgage, Financial Industry{' '}
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
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
              {/* {storiesData.arr.map(arrOrg => {
                return ( */}
              <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3 testi-ani grayscaleani'>
                <div className='testimonial-child'>
                  <div className='author-img'>
                    <img
                      alt='Client - Reece Wabara'
                      height='100'
                      src={one.src}
                      width='100'
                    />
                  </div>
                  <p className='content'>
                    <img
                      alt='quote-start'
                      height='12'
                      src={Comma.src}
                      width='12'
                    />
                    Ayan and his team are superstars, they interpret suggestions
                    well and propose even better and more efficient
                    alternatives, the team's work is to a very high standard and
                    turn around time is much faster than a UK equivalent
                    <img
                      alt='quote-end'
                      className='last'
                      height='12'
                      src={Comma.src}
                      width='12'
                    />
                  </p>
                  <div className='bottom'>
                    <p>Reece Wabara</p>
                    <span>CEO, Maniére De Voir, UK | Forbes 30 Under 30 </span>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3 testi-ani grayscaleani'>
                <div className='testimonial-child'>
                  <div className='author-img'>
                    <img
                      alt='Client - Cameron Sangster'
                      height='100'
                      src={two.src}
                      width='100'
                    />
                  </div>
                  <p className='content'>
                    <img
                      alt='quote-start'
                      height='12'
                      src={Comma.src}
                      width='12'
                    />
                    As soon as I came into contact with Ayan and his Bitpastel
                    team, I felt in safe hands. What impressed me most is Ayan’s
                    level of communication. In the past I have experienced slow
                    turnaround times and lack of communication but with Ayan and
                    his team I genuinely felt like I was their only client and
                    the attention to detail is impeccable. I highly recommend
                    them
                    <img
                      alt='quote-end'
                      className='last'
                      height='12'
                      src={Comma.src}
                      width='12'
                    />
                  </p>
                  <div className='bottom'>
                    <p>Cameron Sangster</p>
                    <span>CEO, Maniére De Voir, UK | Forbes 30 Under 30 </span>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3 testi-ani grayscaleani'>
                <div className='testimonial-child'>
                  <div className='author-img'>
                    <img
                      alt='Client - Honey Patel'
                      height='100'
                      src={three.src}
                      width='100'
                    />
                  </div>
                  <p className='content'>
                    <img
                      alt='quote-start'
                      height='12'
                      src={Comma.src}
                      width='12'
                    />
                    Bitpastel has been a delight to work with! They take the
                    time to truly understand the requirements and provide expert
                    opinion on design, development, and implementation. The team
                    is also very detail oriented and communicate extremely well.
                    Everything is timely, effective, and well done. I keep going
                    back to them to build new things because there is no one
                    else I would rather work with.
                    <img
                      alt='quote-end'
                      className='last'
                      height='12'
                      src={Comma.src}
                      width='12'
                    />
                  </p>
                  <div className='bottom'>
                    <p>Honey Patel</p>
                    <span>Business Strategy & Operations Leader, USA </span>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3 testi-ani grayscaleani'>
                <div className='testimonial-child'>
                  <div className='author-img'>
                    <img
                      alt='Client - Paul R. Turner'
                      height='100'
                      src={four.src}
                      width='100'
                    />
                  </div>
                  <p className='content'>
                    <img
                      alt='quote-start'
                      height='12'
                      src={Comma.src}
                      width='12'
                    />
                    Ayan and his team were excellent to work with. He was a
                    great communicator, took the time to understand my needs and
                    always delivered as promised. I will hire him again in the
                    future
                    <img
                      alt='quote-end'
                      className='last'
                      height='12'
                      src={Comma.src}
                      width='12'
                    />
                  </p>
                  <div className='bottom'>
                    <p>Paul R. Turner</p>
                    <span>
                      International Director & Co-founder, Food for Life Global,
                      USA{' '}
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3 testi-ani grayscaleani'>
                <div className='testimonial-child'>
                  <div className='author-img'>
                    <img
                      alt='Client - David Jones'
                      height='100'
                      src={five.src}
                      width='100'
                    />
                  </div>
                  <p className='content'>
                    <img
                      alt='quote-start'
                      height='12'
                      src={Comma.src}
                      width='12'
                    />
                    Ayan and the Bitpastel team are a reliable and dedicated
                    group. Whenever I reach out to the team about back-end or
                    front-end tasks that need to be completed, they're not only
                    quick to respond but I can rely on their turnaround time.
                    Since partnering with them, my mind has been at ease knowing
                    that they will get the job done so that I can focus on other
                    tasks. It has been a pleasure working with them!
                    <img
                      alt='quote-end'
                      className='last'
                      height='12'
                      src={Comma.src}
                      width='12'
                    />
                  </p>
                  <div className='bottom'>
                    <p>David Jones</p>
                    <span>Marketing Manager, Jax Brands, Canada </span>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3 testi-ani grayscaleani'>
                <div className='testimonial-child'>
                  <div className='author-img'>
                    <img
                      alt='Client - Josiah M. Young, Esq'
                      height='100'
                      src={six.src}
                      width='100'
                    />
                  </div>
                  <p className='content'>
                    <img
                      alt='quote-start'
                      height='12'
                      src={Comma.src}
                      width='12'
                    />
                    Ayan and his team were very helpful, responsive and
                    knowledgeable. This contract has been completed but I will
                    continue to work with Ayan. I would recommend his services
                    to anyone looking to build a website or improve their online
                    presence. The design was very clean. Ayan was also a
                    pleasure to work with and made the process of completing
                    this task much easier.
                    <img
                      alt='quote-end'
                      className='last'
                      height='12'
                      src={Comma.src}
                      width='12'
                    />
                  </p>
                  <div className='bottom'>
                    <p>Josiah M. Young, Esq</p>
                    <span>
                      Managing Shareholder, The Law Office of Josiah Young, USA{' '}
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3 testi-ani grayscaleani'>
                <div className='testimonial-child'>
                  <div className='author-img'>
                    <img
                      alt='Client - Doug Anderson'
                      height='100'
                      src={seven.src}
                      width='100'
                    />
                  </div>
                  <p className='content'>
                    <img
                      alt='quote-start'
                      height='12'
                      src={Comma.src}
                      width='12'
                    />
                    The entire team did a great job and will definitely hire
                    again for future projects. They delivered exactly what they
                    promised on time and on budget. The attention to detail was
                    perfect as was the constant communication. We are happy we
                    finally found a great team to work with
                    <img
                      alt='quote-end'
                      className='last'
                      height='12'
                      src={Comma.src}
                      width='12'
                    />
                  </p>
                  <div className='bottom'>
                    <p>Doug Anderson</p>
                    <span>President, Blue Fence Real Estate, USA </span>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3 testi-ani grayscaleani'>
                <div className='testimonial-child'>
                  <div className='author-img'>
                    <img
                      alt='Client - Anthony Deketelaere'
                      height='100'
                      src={eight.src}
                      width='100'
                    />
                  </div>
                  <p className='content'>
                    <img
                      alt='quote-start'
                      height='12'
                      src={Comma.src}
                      width='12'
                    />
                    The people at Bitpastel are professionals, the SRS (Software
                    Requirement Specification) that the team is working on is
                    the exact translation of my insights and idea's about the
                    app. Bitpastel gives me the guarantee that the app will be
                    all I wanted it to be, and more... I highly recommend them
                    for your next project
                    <img
                      alt='quote-end'
                      className='last'
                      height='12'
                      src={Comma.src}
                      width='12'
                    />
                  </p>
                  <div className='bottom'>
                    <p>Anthony Deketelaere</p>
                    <span>Founder, YesMLS, Belgium </span>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3 testi-ani grayscaleani'>
                <div className='testimonial-child'>
                  <div className='author-img'>
                    <img
                      alt='Client - Brandon Philbrick'
                      height='100'
                      src={nine.src}
                      width='100'
                    />
                  </div>
                  <p className='content'>
                    <img
                      alt='quote-start'
                      height='12'
                      src={Comma.src}
                      width='12'
                    />
                    Bitpastel has been doing custom HubSpot COS development for
                    us and our expectations have been consistently exceeded.
                    There is always a great turnaround on project requests and
                    they are available for talking through upcoming work and
                    ready to take on new challenges
                    <img
                      alt='quote-end'
                      className='last'
                      height='12'
                      src={Comma.src}
                      width='12'
                    />
                  </p>
                  <div className='bottom'>
                    <p>Brandon Philbrick</p>
                    <span>Brand Manager & Designer, USA </span>
                  </div>
                </div>
              </div>

              {/* )
              })} */}

              {readMore && (
                <div className='row'>
                  {' '}
                  {/* {[...Array(6)].map(() => {
                    return ( */}
                  <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3 testi-ani hide-show'>
                    <div className='testimonial-child'>
                      <div className='author-img'>
                        <img
                              alt='Client Dan Miller'
                              height='100'
                              src={ten.src}
                              width='100'
                            />
                      </div>
                      <p className='content'>
                        <img
                          alt='quote-start'
                          height='12'
                          src={Comma.src}
                          width='12'
                        />
                     We have worked with Bitpastel now for over 2 years and we've been really happy with the level of service and development work we have had done. They now manage all of our technology needs on an ongoing basis and nothing ever seems to be an issue with our requirements. Work is completed on time and to the highest quality that meets our expectations.
                        <img
                          alt='quote-end'
                          className='last'
                          height='12'
                          src={Comma.src}
                          width='12'
                        />
                      </p>
                      <div className='bottom'>
                        <p>Dan Miller</p>
                        <span>CEO, Young Professionals, UK</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3 testi-ani hide-show'>
                    <div className='testimonial-child'>
                      <div className='author-img'>
                        <img
                              alt='Client Charles Fried'
                              height='100'
                              src={eleven.src}
                              width='100'
                            />
                      </div>
                      <p className='content'>
                        <img
                          alt='quote-start'
                          height='12'
                          src={Comma.src}
                          width='12'
                        />
                     Ayan is a sharp individual and showed a very good ability to quickly understand our brief and get his team to deliver according to our specification. I recommend
                        <img
                          alt='quote-end'
                          className='last'
                          height='12'
                          src={Comma.src}
                          width='12'
                        />
                      </p>
                      <div className='bottom'>
                        <p>Charles Fried</p>
                        <span>CTO & Co-Founder, BlockSmith Capital Ltd, UK</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3 testi-ani hide-show'>
                    <div className='testimonial-child'>
                      <div className='author-img'>
                        <img
                              alt='Client Alf Bergin'
                              height='100'
                              src={twelve.src}
                              width='100'
                            />
                      </div>
                      <p className='content'>
                        <img
                          alt='quote-start'
                          height='12'
                          src={Comma.src}
                          width='12'
                        />
                     Bitpastel is an ambitious design & development team. They take good care of the client and have a professional attitude. What I really appreciate is that work is done quickly and without delays which is very important for a long-term business relationship. I really like their way to communicate
                        <img
                          alt='quote-end'
                          className='last'
                          height='12'
                          src={Comma.src}
                          width='12'
                        />
                      </p>
                      <div className='bottom'>
                        <p>Alf Bergin</p>
                        <span>CEO, Svart på Kvitt SA, Norway</span>
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
        <div className='home_footer_upper_section pb-0' id='clientele'>
          <h3 className='text-center heading-2'>
            Satisfied Clientele Worldwide
          </h3>
          <div className='container'>
            <div className='padding-area matrices-grid'>
              <div>
                <figure>
                  <img
                    alt='clients wordwide map'
                    className='img-fluid'
                    height='424'
                    src={clientel.src}
                    width='854'
                  />
                </figure>
              </div>
              <div className='container d-flex justify-content-end map_right_holder'>
                <div className='satisfied_clientele'>
                  <div className='child text-center'>
                    <p>800</p>
                    <span className='text-uppercase'>Clients</span>
                  </div>
                  <div className='child text-center'>
                    <p>1000</p>
                    <span className='text-uppercase'>Projects</span>
                  </div>
                  <div className='child text-center'>
                    <p>30M</p>
                    <span className='text-uppercase'>LINES OF CODE</span>
                  </div>
                  <div className='child text-center'>
                    <p>30</p>
                    <span className='text-uppercase'>Countries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-5' id='about'>
          <h3 className='text-center heading-2'>Why work with us?</h3>
        </div>
        <div className='padding-area' id='last_area'>
          <div className='wwu-grid'>
            <div className='left_right_angle_one  position-relative'>
              <div className='container'>
                <div className='wwu-div mb-3'>
                  <div className='lt-side d-flex justify-content-center align-items-center'>
                    <img
                   
                      alt='Reliable Engineering image'
                      className='img-fluid fadeIn'
                      height='380'
                      src={why1.src}
                      width='500'
                    />
                  </div>
                  <div className='rt-side'>
                    <p className='re mb-4 tt'>Reliable Engineering</p>
                    <div className='points d-flex justify-content-start align-items-start mb-4 twenty_gap'>
                      <BiCheckCircle className='re checkOnly' />
                      <p _ngcontent-c5='' className='ml-3 pt'>
                        Multifunctional engineering teams with deep expertise
                      </p>
                    </div>
                    <div className='points d-flex justify-content-start align-items-start mb-4 twenty_gap'>
                      <BiCheckCircle className='re checkOnly' />
                      <p _ngcontent-c5='' className='ml-3 pt'>
                        Multifunctional engineering teams with deep expertise
                      </p>
                    </div>
                    <div className='points d-flex justify-content-start align-items-start mb-4 twenty_gap'>
                      <BiCheckCircle className='re checkOnly' />
                      <p _ngcontent-c5='' className='ml-3 pt'>
                        Multifunctional engineering teams with deep expertise
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='left_right_angle_two  position-relative'>
              <div className='container'>
                <div className='wwu-div mb-3'>
                  <div className='rt-side'>
                    <p className='qa mb-4 tt'>Reliable Engineering</p>
                    <div className='points d-flex justify-content-start align-items-start mb-4 twenty_gap'>
                      <BiCheckCircle className='qa checkOnly' />
                      <p className='ml-3 pt'>
                        Multifunctional engineering teams with deep expertise
                      </p>
                    </div>
                    <div className='points d-flex justify-content-start align-items-start mb-4 twenty_gap'>
                      <BiCheckCircle className='qa checkOnly' />
                      <p className='ml-3 pt'>
                        Multifunctional engineering teams with deep expertise
                      </p>
                    </div>
                    <div className='points d-flex justify-content-start align-items-start mb-4 twenty_gap'>
                      <BiCheckCircle className='qa checkOnly' />
                      <p className='ml-3 pt'>
                        Multifunctional engineering teams with deep expertise
                      </p>
                    </div>
                  </div>
                  <div className='lt-side d-flex justify-content-center align-items-center'>
                    <img
                      alt='Reliable Engineering image'
                      className='img-fluid fadeIn'
                      height='380'
                      src={why2.src}
                      width='500'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='left_right_angle_three  position-relative'>
              <div className='container'>
                <div className='wwu-div mb-3'>
                  <div className='lt-side d-flex justify-content-center align-items-center'>
                    <img
                      alt='Reliable Engineering image'
                      className='img-fluid fadeIn'
                      height='380'
                      src={why3.src}
                      width='500'
                    />
                  </div>
                  <div className='rt-side'>
                    <p className='ced mb-4 tt'>Cool & Elegant Designs</p>
                    <div className='points d-flex justify-content-start align-items-start mb-4 twenty_gap'>
                      <BiCheckCircle className='ced checkOnly' />
                      <p className='ml-3 pt'>
                        Dedicated design studio with a talented team
                      </p>
                    </div>
                    <div className='points d-flex justify-content-start align-items-start mb-4 twenty_gap'>
                      <BiCheckCircle className='ced checkOnly' />
                      <p className='ml-3 pt'>
                        Specialists in high-quality UI/UX
                      </p>
                    </div>
                    <div className='points d-flex justify-content-start align-items-start mb-4 twenty_gap'>
                      <BiCheckCircle className='ced checkOnly' />
                      <p className='ml-3 pt'>
                        Experts in Social & Digital Marketing creatives
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='left_right_angle_four  position-relative'>
              <div className='container'>
                <div className='wwu-div mb-3'>
                  <div className='rt-side'>
                    <p className='idp mb-4 tt'>Idea & Data Protection</p>
                    <div className='points d-flex justify-content-start align-items-start mb-4 twenty_gap'>
                      <BiCheckCircle className='idp checkOnly' />
                      <p className='ml-3 pt'>Non Disclosure Agreements</p>
                    </div>
                    <div className='points d-flex justify-content-start align-items-start mb-4 twenty_gap'>
                      <BiCheckCircle className='idp checkOnly' />
                      <p className='ml-3 pt'>Stringent Data Privacy</p>
                    </div>
                    <div className='points d-flex justify-content-start align-items-start mb-4 twenty_gap'>
                      <BiCheckCircle className='idp checkOnly' />
                      <p className='ml-3 pt'>
                        Best-in-class Secure Coding Practices
                      </p>
                    </div>
                  </div>
                  <div className='lt-side d-flex justify-content-center align-items-center'>
                    <img
                      alt='Reliable Engineering image'
                      className='img-fluid fadeIn'
                      height='380'
                      src={why4.src}
                      width='500'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='left_right_angle_five  position-relative'>
              <div className='container'>
                <div className='wwu-div mb-3'>
                  <div className='lt-side d-flex justify-content-center align-items-center'>
                    <img
                      alt='Reliable Engineering image'
                      className='img-fluid fadeIn'
                      height='380'
                      src={why5.src}
                      width='500'
                    />
                  </div>
                  <div className='rt-side'>
                    <p className='ad mb-4 tt'>Agile Delivery</p>
                    <div className='points d-flex justify-content-start align-items-start mb-4 twenty_gap'>
                      <BiCheckCircle className='ad checkOnly' />
                      <p className='ml-3 pt'>Delivery on demanding timelines</p>
                    </div>
                    <div className='points d-flex justify-content-start align-items-start mb-4 twenty_gap'>
                      <BiCheckCircle className='ad checkOnly' />
                      <p className='ml-3 pt'>
                        Extensive use of new-age communication tools
                      </p>
                    </div>
                    <div className='points d-flex justify-content-start align-items-start mb-4 twenty_gap'>
                      <BiCheckCircle className='ad checkOnly' />
                      <p className='ml-3 pt'>
                        Fast-paced response across all timezones
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          className='text-center  d-flex justify-content-center align-items-center common_banner_bottom'
          id='contact'
        >
          <button
            _ngcontent-c5=''
            className='wt-btn small-padding'
            //  $("#whole_content").css("overflow-y")
            onClick={() => {
              // $("#whole_content").css("overflow-y","hidden")
              router.push(`/free-quotes`,undefined,{scroll:false} )
            }}
            // $('#whole_content').addClass(activeHome)
            // let position="stories"
            //   setTimeout(()=>{
            //     $('html, body').stop().animate({
            //   scrollTop: $('#' + position).offset().top - (50),
            // }, 2);

            //   },500)

            // setShowModal(!showModal)

            tabindex='0'
          >
            Leave a Message{' '}
          </button>
        </section>
        <Footer />
      </div>
      {/* router.push(`/?page=2`, undefined, { scroll: false }); */}
      {showModal && (
        <Modal
          hideMe={() => {
            router.push('/',undefined,{scroll:false})
          }}
        />
      )}
    </>
  )
}

export default Home1
