import Navbar from '../Navbar'
import OurSuggestion from './OurSuggestion/OurSuggestion'
import Popular from './Popular/Popular'
import TenMovie from './tenMovie/TenMovie'

const Homee = () => {
    return(
        <>
       <Navbar />
       <TenMovie/>
       <OurSuggestion/>
       <Popular/>
        </>
    )
}

export default Homee