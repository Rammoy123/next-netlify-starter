import '@styles/globals.css'
import '@styles/home.css'
// import '@styles/header.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

function Application ({ Component, pageProps }) {
  const router = useRouter()
  const onTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    })
  }
  useEffect(() => {
    const handleRouteChange = url => {
      console.log(url,router.asPath,"see those dat----")
      // if (url== router.asPath ) 
      if( (router.asPath!='/make_services') &&(router.asPath!='/make_stories'))
      {
        console.log("go to Top....")
        onTop()

        console.log(`App is changing to ${url}  shallow routing`)
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router])
  // useEffect(() => {
  //   require("bootstrap/dist/js/bootstrap.bundle.min.js");
  // }, []);
  //   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
  {
    /* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script> */
  }
  return (
    <>
      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous">
</script> */}
      {/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js" integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossorigin="anonymous"></script>   */}
      <Component {...pageProps} />
    </>
  )
}

export default Application
