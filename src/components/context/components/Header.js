// import { useContext } from 'react'
// import ThemeContext from '../ThemeContext'
import {useTheme} from '../ThemeContext'

function Header() {
    // const { theme, setTheme } = useContext(ThemeContext);
    const { theme, setTheme } = useTheme();

    return (
        <div>Header -
            Active Theme: {theme}
            <br />
            <button className='buton' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme</button>

        </div>
    )
}

export default Header