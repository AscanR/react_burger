import React from 'react'
import styles from './App.module.css'
import AppHeader from '../app-header/AppHeader'
import MainPage from "../main-page/MainPage";

function App() {
  return (
    <div className={styles.container}>
      <AppHeader />
      <MainPage />
    </div>
  )
}

export default App
