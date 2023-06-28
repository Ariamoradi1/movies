import Navbar from '../Navbar'
import Intro from './Intro/Intro'
import OurSuggestion from './OurSuggestion/OurSuggestion'
import Popular from './Popular/Popular'
import TenMovie from './tenMovie/TenMovie'
import { useState } from 'react'

const Homee = () => {
    const [isLoading, setIsLoading] = useState(false)
    return(
        <>
        <div className={isLoading ? 'bg-[#F4F7F8] opacity-90' : ''}>
       <Navbar 
       loading={isLoading}
       setLoading={setIsLoading}
       />
       <Intro/>
       <TenMovie/>
       <OurSuggestion/>
       <Popular/>
       </div>
        </>
    )
}

export default Homee