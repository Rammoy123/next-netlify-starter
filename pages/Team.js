import React, { useEffect } from 'react'
import Header from '@components/header/Header'
import Footer from '@components/footer/Footer'
import team_banner from '../public/assets/team_banner.webp'
import sourav from '../public/assets/sourav.webp'

import sourav_text from '../public/assets/sourav_text.png'
import ibrahim from '../public/assets/ibrahim.webp'
import ibrahim_text from '../public/assets/ibrahim_text.png'
import chandrima from '../public/assets/chandrima_photo.webp'
import chandrima_text from '../public/assets/chandrima_text.png'
import secSectionFirst from '../public/assets/sec-section-first.jpg'
import culureAt1 from '../public/assets/culure_at_bit.jpg'
import culureAt2 from '../public/assets/culure_at_bit_2.jpg'

import appPublishing from '../public/assets/app_publishing_guide.jpg'
import apiDevelopment from '../public/assets/api_development.jpg'
import celebratingAchievements from '../public/assets/celebrating_achievemens.jpg'
import teamLunch from '../public/assets/Team_lunch.jpg'
import secretSanta from '../public/assets/secret_santa.jpg'
import jangla from '../public/assets/jangla.jpg'
import dart from '../public/assets/Dart_tournament.jpg'
import womanDay from '../public/assets/woman_day.jpg'
import teamLast from '../public/assets/Team_last_image.webp'
import teamLastResponsive from '../public/assets/team_last_responsive.webp'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BiCheckCircle } from 'react-icons/bi'
import $ from 'jquery'
const Team = () => {
  const router=useRouter()
  // const containerRef = useRef(null);
  // const onTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'instant',
  //   })
  // }
  // useEffect(() => {
  //   onTop()
  // }, [router.query]);
// .............  
// useEffect(() => {
//   const handleRouteChange = (url) => {
//     if(url==router.asPath){




//     console.log(
//       `App is changing to ${url}  shallow routing`
//     )
//   }
// }

//   router.events.on('routeChangeComplete', handleRouteChange)

//   return () => {
//     router.events.off('routeChangeComplete', handleRouteChange)
//   }
// }, [])



// ................



  useEffect(()=>{

    $(window).on('scroll', function () {
          if (Object.keys($('#hero1')).length > 0) {
            
            if (
              $(this).scrollTop() >=
              $('#hero1').offset().top +
                $('#hero1').outerHeight() -
                window.innerHeight
            ) {
            $("#first_1").css('transform','translate(0px,0px)')
           
            }
            if (
              $(this).scrollTop() >=
              $('#first_').offset().top +
                $('#first_').outerHeight() -
                window.innerHeight
            ) {
            $("#second_1").css('transform','translate(0px,0px)')
          
            }
            if (
              $(this).scrollTop() >=
              $('#second_').offset().top +
                $('#second_').outerHeight() -
                window.innerHeight
            ) {
            $("#third_1").css('transform','translate(0px,0px)')
          
            }
          }
        
        })



  },[router.query])


  // useEffect(() => {
  //   setTimeout(() => {
  //     containerRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }, 2000);
  // }, []);
    return (
    <>
      <Header navData='Team' />
      {/* <div ref={containerRef}> */}

      <div className='container height_unset' id='banner'>
        <div className='hero-content' id='hero1'>
          <div className='left-side'>
            <h1>
              The Team who
              <br />
              makes it happen
            </h1>
            <ul>
              <li><BiCheckCircle className='first-check '/> We are serious about Quality </li>
              <li><BiCheckCircle className='first-check '/> We are passionate about our Craft </li>
              <li><BiCheckCircle className='first-check '/>Always Super-charged... Super-fast??? </li>
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

              src={team_banner.src}
              width='650'
              placeholder='blur'
            />
          </div>
        </div>
      </div>
      <section className='team-first-banner mx-auto'>
        <div className='first-banner' id='first_'>
          <img
            alt="Souvik's image"
            className='testi-image'
            id='first_1'
            src={sourav.src}
            style={{
              transform: 'translate(0px, 120px)',
              opacity: '1',
              visibility: 'inherit',
              transitionDuration: '3s'
            }}
          />

          <img
            _ngcontent-c10=''
            alt="Souvik's Testimonial"
            className='testi-data desk-team'
            src={sourav_text.src}
          />
        </div>
        <div className='second-banner'  id='second_'>
          <img
            alt="Chandrima's image"
            className='testi-image'
            id='second_1'
            src={chandrima.src}
            style={{
              transform: 'translate(0px, 120px)',
              opacity: '1',
              visibility: 'inherit',
              transitionDuration: '3s'
            }}
          />

          <img
           
            alt="Chandrima's Testimonial"
            className='testi-data desk-team'
            src={chandrima_text.src}
          />
        </div>
        <div className='third-banner'  id='third_'>
          <img
            alt="Ibrahim's image"
            className='testi-image'
            id='third_1'
            src={ibrahim.src}
            style={{
              transform: 'translate(0px, 120px)',
              opacity: '1',
              visibility: 'inherit',
              transitionDuration: '3s'
            }}
          />

          <img
            alt="Souvik's Testimonial"
            className='testi-data desk-team'
            src={ibrahim_text.src}
          />
        </div>
      </section>
      <section className='lifeAtBitpastel'>
        <div
          className='common-lb first-lb lazy-image-section'
          style={{ opacity: '1', visibility: 'inherit' }}
        >
          <div className='img it'>
            <img
              _ngcontent-c10=''
              alt='Life at bitpastel image'
              height='1000'
              src={secSectionFirst.src}
              width='700'
            ></img>
          </div>

          <div className='content rt'>
            <p className='tt'>Life at Bitpastel</p>
          </div>
        </div>
        <div
          className='common-lb second-lb lazy-image-section'
          style={{ opacity: '1', visibility: 'inherit' ,placeItems:'center'}}
        >
          <div class='content lt'>
            <p class='tt culture'>Culture at Bitpastel</p>
            <p class='desc'>
              At Bitpastel, we have a
              <br />
              progressive next generation <br /> work culture
            </p>
          </div>
          <div class='img rt'>
            <img
              alt='Culture at bitpastel image'
              height='1000'
              src={culureAt1.src}
              width='700'
            />
          </div>
        </div>
        <div
          className='common-lb third-lb lazy-image-section'
          style={{ opacity: '1', visibility: 'inherit' }}
        >
          <div class='img lt'>
            <img
              alt='awards and presentations image one'
              height='1000'
              src={culureAt2.src}
              width='700'
            />
          </div>

          <div class='img rt'>
            <img
              alt='awards and presentations image two'
              height='1000'
              src={appPublishing.src}
              width='700'
            />
          </div>
        </div>
        <div
          className='common-lb fourth-lb lazy-image-section'
          style={{ opacity: '1', visibility: 'inherit' }}
        >
          <div class='img lt'>
            <img
              alt='api_development_image'
              height='1000'
              src={apiDevelopment.src}
              width='700'
            />
          </div>

          <div class='img rt'>
            <img
              alt='celebratingAchievements image two'
              height='1000'
              src={celebratingAchievements.src}
              width='700'
            />
          </div>
        </div>
        <p className='tt fun-bp'>Fun at Bitpastel</p>
        <div
          className='common-lb second-last-lb lazy-image-section'
          style={{ opacity: '1', visibility: 'inherit' }}
        >
          <div className='img lt'>
            <img
              alt='Breakfast meeting at starbucks image'
              height='1000'
              src={teamLunch.src}
              width='700'
            />
          </div>
          <div class='img rt'>
            <img
              alt='Secret santa and womans day celebration image'
              height='1000'
              src={secretSanta.src}
              width='700'
            />
          </div>
        </div>
        <div
          className='common-lb second-last-lb lazy-image-section'
          style={{ opacity: '1', visibility: 'inherit' }}
        >
          <div className='img lt'>
            <img
              alt='jange Block Championship'
              height='1000'
              src={jangla.src}
              width='700'
            />
          </div>
          <div class='img rt'>
            <img
              alt='Dart tournament'
              height='1000'
              src={dart.src}
              width='700'
            />
          </div>
        </div>
      </section>
      <div className='team_lower_section_holder'>
        <div className='team_lower_section'>
          <div className='container'>
            <div className=' team_lower_section_inner team_lower_section_desk'>
              <div className='tlsi_left'>
                <div className='tlsi_left_destop'>
                  <img
                    alt='Work on awesome Ideas &amp; Technologies image for desktop'
                    height='460'
                    src={teamLast.src}
                    width='600'
                  />
                </div>
                <div className='tlsi_right_responsive'>
                  <img
                    alt='Work on awesome Ideas &amp; Technologies image for mobile'
                    height='350'
                    src={teamLastResponsive.src}
                    width='350'
                  />
                </div>
              </div>
              <div className='tlsi_right'>
                <div>
                  <h2>Work on awesome Ideas & Technologies</h2>
                  <p>
                    At Bitpastel, we create with curiosity. We continue to go
                    forward with an inclusive view for creating equal
                    opportunities for all our employees.
                  </p>
                  <p >Visit our  {` `}
                  <Link href={{pathname:'/careers/oppertunity'}}>
                  <a style={{textDecoration:'none'}}>Careers {'  '} {'  '}</a> 
                   </Link>
                 {` `}  page to find out about open positions.</p>
                   <div  className="team_lower_button"><button    onClick={() => {
                        router.push(`/careers/oppertunity`)
                      }} className="wt-btn" >Find Opportunities</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section  className="text-center padding-area d-flex justify-content-center align-items-center common_banner_bottom" >

      </section>

      <Footer />
      {/* </div> */}
    </>
  )
}

export default Team
