import React from 'react'
import style from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolid, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faFontAwesome
} from '@fortawesome/free-brands-svg-icons'
import whatsApp from '../../public/assets/whatsapp_dropshadow.png'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className={style.footerMain}>
        <div className={`container ${style.fourBox}`}>
          <div className={style.information}>
            <p className={`${style.awesomeIcone}`}>information</p>

            <a
              className={`d-flex align-items-center ${style.p_height}`}
              href='tel:+442081446579'
            >
              <span>
                {' '}
                <FontAwesomeIcon
                  className={`${style.awesomeIcone} me-2`}
                  icon={faPhone}
                />
              </span>

              <span> UK: +44 2081 446579</span>
            </a>

            <a
              className={`d-flex align-items-center ${style.p_height}`}
              href='tel:+1(872)4446679'
            >
              <span>
                <FontAwesomeIcon
                  className={`${style.awesomeIcone} me-2`}
                  icon={faPhone}
                />
              </span>
              <span> US: +1 (872) 444 6679</span>
            </a>
            <a
              className={`d-flex align-items-center ${style.p_height}`}
              href='tel:+919830566248'
            >
              <span>
                <FontAwesomeIcon
                  className={`${style.awesomeIcone} me-2`}
                  icon={faPhone}
                />
              </span>
              <span> IN: +91 9830 566 248</span>
            </a>

            <a
              className={`d-flex align-items-center ${style.p_height}`}
              href='mailto:connect@bitpastel.com'
            >
              <span>
                <FontAwesomeIcon
                  className={`${style.awesomeIcone} me-2`}
                  icon={faEnvelope}
                />
              </span>
              <span>connect@bitpastel.com</span>
            </a>
          </div>

          <div className={style.information}>
            <p className={`${style.awesomeIcone}`}>QUICK LINKS</p>
            <Link href={{ pathname: '/' }}>
              <a className={`d-flex align-items-center ${style.p_height}`}>
                <span> Home </span>
              </a>
            </Link>
            <Link href={{ pathname: '/' }}>
              <a className={`d-flex align-items-center ${style.p_height}`}>
                <span> Services </span>
              </a>
            </Link>
            <Link href={{ pathname: '/' }}>
              <a className={`d-flex align-items-center ${style.p_height}`}>
                <span> About </span>
              </a>
            </Link>
            <Link href={{ pathname: '/' }}>
              <a className={`d-flex align-items-center ${style.p_height}`}>
                <span> Stories </span>
              </a>
            </Link>
          </div>
          <div className={style.information}>
            <p style={{ color: '#494949' }} className={`${style.awesomeIcone}`}>
              abbb
            </p>

            <Link href={{ pathname: '/' }}>
              <a className={`d-flex align-items-center ${style.p_height}`}>
                <span> Team </span>
              </a>
            </Link>
            <Link href={{ pathname: '/' }}>
              <a className={`d-flex align-items-center ${style.p_height}`}>
                <span> Clientele </span>
              </a>
            </Link>
            <Link href={{ pathname: '/Carrer' }}>
              <a className={`d-flex align-items-center ${style.p_height}`}>
                <span> Careers </span>
              </a>
            </Link>
          </div>
          <div className={style.information}>
            <p className={`${style.awesomeIcone}`}>CONNECT WITH US</p>
            <div className={style.social_icon_holder}>
              <div
                className={`${style.circle} d-flex align-items-center justify-content-center`}
              >
                <a
                  aria-label='Linkedin'
                  class='d-flex align-items-center'
                  href='https://www.linkedin.com/company/bitpastel'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <FontAwesomeIcon
                    className={`${style.awesomeIconeBrand} `}
                    icon={faLinkedinIn}
                  />
                </a>
              </div>
              <div
                className={`${style.circle} d-flex align-items-center justify-content-center`}
              >
                <a
                  aria-label='Linkedin'
                  class='d-flex align-items-center'
                  href='https://www.instagram.com/bitpastel.io'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <FontAwesomeIcon
                    className={`${style.awesomeIconeBrand} `}
                    icon={faInstagram}
                  />
                </a>
              </div>
              <div
                className={`${style.circle} d-flex align-items-center justify-content-center`}
              >
                <a
                  aria-label='Linkedin'
                  class='d-flex align-items-center'
                  href='https://www.facebook.com/bitpastel'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <FontAwesomeIcon
                    className={`${style.awesomeIconeBrand} `}
                    icon={faFacebookF}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='container mt-4'>
          <div className={style.footerCopyright}>
            <small>
              <span>Copyright © Bitpastel Solution Private Limited 2022</span>
              <span>
                <span className='ms-1 me-1'> | </span>
                All Rights Reserved
              </span>
            </small>
            <small>
            <span className='ms-2 me-1'>{`  `}   |    {`   `}</span>
             
              <Link
                href={{
                  pathname: 'https://www.bitpastel.com/#/privacy-policy'
                }}
              >
                <a>
             
                  Privacy Policy{' '}
                </a>
              </Link>
            </small>
          </div>
        </div>


        <div className={`${style.whatsapp} d-flex justify-content-center align-items-center ripplefb`}>
{/* <img height='55' width='55' src={whatsApp.src}/> */}
<a  aria-label="whatsapp" className="d-flex justify-content-center align-items-center" href="https://wa.me/919830566248/?text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&amp;type=phone_number&amp;app_absent=0" target="_blank"><img height='55' width='55' src={whatsApp.src}/></a>
        </div>
      </div>
    </>
  )
}

export default Footer
