import React from 'react'
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

import Image from 'next/image'
const Team = () => {
  return (
    <><Header navData='Team'/>


       
   
        <div className='container height_unset' id='banner'>
          <div className='hero-content'>
            <div className='left-side'>
              <h1>
              The Team who

                <br />
                makes it happen
           
              </h1>
              <ul>
                <li> We are serious about Quality </li>
                <li> We are passionate about our Craft </li>
                <li>Always Super-charged... Super-fast… </li>
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
              <Image
                alt='Crafting Digital Solutions for your business image'
                // height='650'
                
                src={team_banner}
                // width='650'
                placeholder="blur"
              />
            </div>
          </div>
        </div>
        <section className="team-first-banner mx-auto">

        <div className="first-banner">
        <img  alt="Souvik's image" 
        className="testi-image" src={sourav.src} 
        style={{transform: "translate(0px, 0px)", opacity: "1",
        visibility: "inherit"}}/>


<img _ngcontent-c10="" alt="Souvik's Testimonial"
 className="testi-data desk-team" src={sourav_text.src}/>


        </div>
        <div className="second-banner">
        <img  alt="Chandrima's image" 
        className="testi-image" src={chandrima.src} 
        style={{transform: "translate(0px, 0px)", opacity: "1",
        visibility: "inherit"}}/>


<img _ngcontent-c10="" alt="Souvik's Testimonial"
 className="testi-data desk-team" src={chandrima_text.src}/>


        </div>
        <div className="third-banner">
        <img  alt="Ibrahim's image" 
        className="testi-image" src={ibrahim.src} 
        style={{transform: "translate(0px, 0px)", opacity: "1",
        visibility: "inherit"}}/>


<img  alt="Souvik's Testimonial"
 className="testi-data desk-team" src={ibrahim_text.src}/>


        </div>

        </section>
        <section className='lifeAtBitpastel'>
        <div  className="common-lb first-lb lazy-image-section" style={{opacity: "1", visibility: "inherit"}}>
<div className="img it">
<img _ngcontent-c10="" alt="Life at bitpastel image" 
height="1000" src={secSectionFirst.src} width="700">

</img>
</div>

<div  className="content rt">
<p  className="tt">Life at Bitpastel</p></div>
        </div>



        </section>


    {/* <Footer/> */}

    </>
  )
}

export default Team