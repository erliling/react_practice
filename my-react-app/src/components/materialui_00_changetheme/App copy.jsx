import { useState } from 'react'
import PubSub from 'pubsub-js'
import { BrowserRouter, Link, NavLink, Outlet, Route, Routes, Navigate, useRoutes } from 'react-router-dom'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import {createTheme, ThemeProvider, alpha, getContrastRatio} from '@mui/material/styles'

import Home from '../../pages/Home'
import Home2 from '../../pages/router_18_full/Home2'
import About from '../../pages/About'
import MyNavLink from '../MyNavLink'
import News from '../../pages/Home/News'
import Message from '../../pages/Home/Message'
import Header from '../Header'
import Detail from '../../pages/Home/Message/Detail'

// import routes from './routes'

import './App.css'
import { useEffect } from 'react'

function App() {
  const violetBase = '#7f00ff'
  const violetMain = alpha(violetBase, 0.7)
  const theme = createTheme({
    palette: {
      violet: {
        main: violetMain,
        light: alpha(violetBase, 0.5),
        dark: alpha(violetBase, 0.9),
        contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '111',
      }
    }
  })

  return (
    <div className='container'>
      <ThemeProvider theme={theme}>
      <Stack spacing={2} direction='row'>
        <Button color='violet' variant='contained'>Text</Button>
        <Button color='violet.light' variant='contained'>Contained</Button>
        <Button color='violet.contrastText' variant='outlined'>Outlined</Button>
        <Box sx={{bgcolor: 'violet.light', width: 40, height: 40}} />
        <Box sx={{bgcolor: 'violet.dark', width: 40, height: 40}} />
        <Box sx={{bgcolor: 'violet.main', width: 40, height: 40}} />
      </Stack>
      </ThemeProvider>
      
    </div>
    
  )
}

export default App
