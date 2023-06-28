import {useState} from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import {search} from '../Redux/Slice/searchSlice'
import {useRouter} from 'next/router';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Swal from 'sweetalert2'
const Navbar = ({loading,setLoading}) => {

    const [userSearch, setUserSearch] = useState('')
    const select = useSelector((state) => state.search)
    const dispatch = useDispatch()
    const router = useRouter()
    console.log('status', select)

    const searchHandler = () => {
      if (userSearch === '') {
        Swal.fire({
          icon:'info',
          title: 'Oops',
          text:'The value must not be empty!',
      })
      }else{
        dispatch(search(userSearch))
        router.push('/searchResult')
        setLoading(true)
      }
      
    }

    return(
     <>
     <nav className='w-full flex justify-center'>
        <Paper
         className='mt-3'
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        onChange={(e) => setUserSearch(e.target.value)}
        placeholder="Search Your Movie!"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton onClick={searchHandler} type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
     </nav>
     {loading && (
      <>
      <div className='fixed left-[32.5%] top-[32.5%]'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="my Gif" />
      </div>
      </>
     )}
     </>
    )
}

export default Navbar