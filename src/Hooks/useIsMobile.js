import { useState, useEffect } from 'react'

export default function useIsMobile() {
   const [mobileScreen, setMobileScreen] = useState(false)

   function handleResize() {
      if (window.innerWidth <= 950) {
         setMobileScreen(true)
      } else {
         setMobileScreen(false)
      }
   }

   useEffect(() => {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
   }, [])

   return mobileScreen
}
