import React from 'react'
import styles from './App.module.css'
import AppHeader from '../app-header/AppHeader'
import MainPage from "../MainPage/MainPage";

function App() {
  return (
    <div className={styles}>
      <AppHeader />
      <MainPage />
    </div>
  )
}

export default App
