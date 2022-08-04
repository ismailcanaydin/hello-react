// import { useContext } from 'react'
import Button from './components/Button';
import Header from './components/Header';
import Profile from './components/Profile';
// import ThemeContext from './ThemeContext';
import { useTheme } from './ThemeContext';

function Container() {
    // const { theme } = useContext(ThemeContext);
    const { theme } = useTheme();
    console.log(theme);

    return (
        <div className={theme}>
            <Button /><hr />
            <Header /><hr />
            <Profile />
        </div>
    )
}

export default Container