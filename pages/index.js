// import Head from 'next/head'
// import Header from '@components/Header'
// import Footer from '@components/Footer'
// import "bootstrap/dist/css/bootstrap.min.css";

// import "bootstrap/dist/js/bootstrap.bundle.min";
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
import Anthony from '../public/assets/Anthony-5.jpg'
import Comma from '../public/assets/comma.png'
import Link from 'next/link'

import { requirePropFactory } from '@mui/material'

import Modal from './Modal'

import { useRouter } from 'next/router'

import $ from 'jquery'
import Home1 from './[home]'

export default function Home () {


  return (
    <>
<Home1 />
    </>
  )
}
{
  /* <Modal hideMe={()=>{setShowModal(false)}} /> */
}
