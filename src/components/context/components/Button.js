import {useContext} from 'react'
import ThemeContext from '../ThemeContext'
function Button() {
    const data = useContext(ThemeContext);
    console.log(data);
  return (
    <div>Button ({data}) </div>
  )
}

export default Button