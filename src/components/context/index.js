import React, { useContext } from 'react'
import Button from './components/Button'
import Header from './components/Header'
import Container from './Container'
import ThemeContext, { ThemeProvider } from './ThemeContext'
import { UserProvider } from './UserContext'

function Context() {


    return (
        <ThemeProvider>
            <UserProvider>
                <Container />
            </UserProvider>
        </ThemeProvider>
    )
}

export default Context