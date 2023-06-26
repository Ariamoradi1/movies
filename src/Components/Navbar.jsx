import {useState} from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import {search} from '../Redux/Slice/searchSlice'
import {useRouter} from 'next/router';
const Navbar = () => {
    
    const [userSearch, setUserSearch] = useState('')
    const dispatch = useDispatch()
    const router = useRouter()
    const searchHandler = () => {
      dispatch(search(userSearch))
      router.push('/searchResult')
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
     </>
    )
}

export default Navbar