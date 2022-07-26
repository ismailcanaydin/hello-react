// import { useContext } from 'react'
// import ThemeContext from '../ThemeContext'
import {useTheme} from '../ThemeContext'

function Button() {
    // const { theme, setTheme } = useContext(ThemeContext);
    // console.log(data);
    const {theme, setTheme} = useTheme();

    return (
        <div>Button - 
            Aktive Theme: {theme}
            <br />
            <button className='buton' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme</button>
        </div>
    )
}

export default Button