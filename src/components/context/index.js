import React from 'react'
import Button from './components/Button'
import ThemeContext from './ThemeContext'

function Context() {
    return (
        <ThemeContext.Provider value='dark'>
            <Button />
        </ThemeContext.Provider>
    )
}

export default Context