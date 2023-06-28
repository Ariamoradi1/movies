import { Typography } from "@mui/material"
const Intro = () => {
    return(
        <>
        <div className="flex justify-evenly flex-wrap">
            <img className="w-[400px] h-[400px]" src="intro.svg" alt="intro" />
            <div className="flex justify-center flex-col">
            <Typography variant="h3">Easy To Find Your Movie!</Typography>
            <Typography variant="body1">Here we provide you with various movies along with your information!</Typography>
            </div>
        </div>
        </>
    )
}

export default Intro