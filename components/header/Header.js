import React, { useEffect } from 'react'

import logo from '../../public/assets/bitpastel.png'
import { useRouter } from 'next/router'
import Link from 'next/link'
import style from './header.module.css'

import $ from 'jquery'



const Header = ({navData}) => {
  const router=useRouter()

    
    console.log(navData,"headerdata")
    useEffect(()=>{
      console.log("active home teasting--",navData)

        if(navData=="Home"){
          console.log("active home")
            $('#make_home').addClass("active1")
            $('#make_services').removeClass("active1") 
            $('#make_stories').removeClass("active1")
            // $('#make_services').css('color','inherit')
        }
        else if (navData=="Service"){
          console.log("active services")
            $('#make_services').addClass("active1") 
            $('#make_home').removeClass("active1") 
            $('#make_stories').removeClass("active1")
            // $('#make_home').css('color','inherit')

        }
        else if(navData=="Stories"){
          $('#make_stories').addClass("active1")
          $('#make_home').removeClass("active1")
          $('#make_services').removeClass("active1")


        }
    else if(navData=="Carrier"){
        $('#make_carrier').addClass("active1")

    }
    else if
        (navData=="Portfolio")
        {
            $('#make_portfolio').addClass("active1")
        }
        else if(navData=="Team"){
            $('#make_team').addClass("active1")
        }

    
    
    },[navData])
    
    const goToSection =(e)=>{
      let position=""

        //  navigate("/",{state:e.target.id})
        router.push({
          pathname: '/',
           query:{ state: e.target.id
            }
           
           }
      )

         if(e.target.id=="make_stories")
         {
          position="stories"
         }
         else if(e.target.id=="make_services"){
          position="services"
         }


        setTimeout(() => {
            $('html, body').animate({
              scrollTop: $('#' + position).offset().top - (50),
            }, 2);
          }, 100);
          console.log(e.target.id,"id")
          // if(e.target.id=="make_home"){
          //   $('#make_services').removeClass("active")
          //   $('#make_services').css('color','inherit')
          //   $('#make_home').addClass("active")

          // }
          
    //       if (e.target.id=="make_services"){
    //         $('#make_home').removeClass("active")
    //  console.log($('.active'))
    //         $('#make_home').removeClass("active") 
    //         $('#make_home').css('color','inherit')
    //         $('#make_services').addClass("active")
       

    //       }
         

    }

useEffect(()=>{
    $(window).scroll(function() {
        
        if ($(this).scrollTop() > 50){ 
       
            $('.main').addClass("fixed");
        }
        else {
            $('.main').removeClass("fixed");
        }
        });


},[])

    // $(window).scroll(function() {
    //     console.log($(this),"koljara")
    //     if ($(this).scrollTop() > 50){  
    //         $('.main').addClass("fixed");
    //     }
    //     else {
    //         $('.main').removeClass("fixed");
    //     }
    //     });

  return (
    <>
      <header className="main" id='maini'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-2 image-container'>
              <a>
                <img src={logo.src} alt='logo' />
              </a>
            </div>

            <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10'>
              <nav className={style.navmain}>
                <ul className={style.navFlex}>
                
                  <li className={style.liItem}>
                  <Link
          href={{
            pathname: '/'
            
          }}
        >
                    <a id='make_home'>Home</a>
                  </Link>
                  </li>
                  <li className={style.liItem}>
                    <a id='make_services'  onClick={goToSection}>Service</a>
                  </li>
                  <li className={style.liItem}>
                    <a id='make_stories' onClick={goToSection}>Stories</a>
                  </li>
                  <li className={style.liItem}>
                  <Link
          href={{
            pathname: '/Portfolio'
            
          }}
        >
                    <a id='make_portfolio' >Portfolio</a>
                    </Link>
                  </li>
                  
                    <li className={style.liItem}>
                    <Link
          href={{
            pathname: '/Team'
            
          }}
        >
                    <a id='make_team' >Team</a>
                    </Link>
                  </li>
                  
                  <li className={style.liItem}>
                  <Link
          href={{
            pathname: '/Carrier'
            
          }}
        >
                    <a id='make_carrier' >Carrears</a>
                    </Link>
                  </li>
                  <li className={style.liItem}>
                    <button className={style.firstButton}>Get In Touch</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* <div className='container height_unset' id='banner'>
        <div className='hero-content'>
          <div className='left-side'>
            <h1>
              Crafting Digital Solutions
              <br />
              for your business
            </h1>
            <ul>
              <li> Shopify Plus &amp; eCom Development </li>
              <li>  Web &amp; Mobile App Development </li>
              <li> Marketing Solutions </li>
            </ul>
            <button className='wt-btn' tabindex='0'>
              Lets Work Together
            </button>
          </div>
          <div  className='right-side'>
            <img
              
              alt='Crafting Digital Solutions for your business image'
              height='650'
              src='assets/img/home_banner.webp'
              width='650'
            />
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Header
