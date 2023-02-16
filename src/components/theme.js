import { createTheme } from '@mui/material';
import { lightBlue, grey, purple } from '@mui/material/colors'

const primary = lightBlue[200]
const secondary = purple[200]

const Theme = createTheme({
    palette: {
        primary: {
            main: primary,
        },
        secondary: {
            main:secondary,
        }
    },
    
})

export default Theme;
