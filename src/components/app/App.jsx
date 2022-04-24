import React, {useEffect, useState} from 'react'
import styles from './App.module.css'
import AppHeader from '../app-header/AppHeader'
import MainPage from '../main-page/MainPage'
import Modal from '../modal/Modal'
import OrderDetails from '../order-details/OrderDetails'
import IngredientDetails from '../ingredient-details/IngredientDetails'
import DataContext from "../../services/data-context/DataContext";
import {baseUrl} from "../../utils/baseUrl/baseUrl";
import {checkResponse} from "../../utils/checkResponse/checkResponse";

function App() {
    const [data, setData] = useState([])
    const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false)
    const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = useState(false)
    const [cardData, setCardData] = useState([])
    const [orderData, setOrderData] = useState(null)

    const closeAllModals = () => {
        setIsOrderDetailsOpened(false)
        setIsIngredientDetailsOpened(false)
    }

    useEffect(() => {
        fetch(`${baseUrl}/ingredients`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
              .then(res => checkResponse(res))
              .then(ingredients => {
                  setData(ingredients.data)
              })
              .catch(err => console.log(err))
    }, [])

    return (
          <DataContext.Provider value={{data, orderData, setOrderData}}>
              <div className={styles.container}>
                  <AppHeader/>
                  <MainPage
                        setIsOrderDetailsOpened={setIsOrderDetailsOpened}
                        setIsIngredientDetailsOpened={setIsIngredientDetailsOpened}
                        setCardData={setCardData}
                  />
                  {isOrderDetailsOpened &&
                        <Modal
                              title=''
                              onOverlayClick={closeAllModals}
                              closeButton={closeAllModals}
                        >
                            <OrderDetails/>
                        </Modal>}
                  {isIngredientDetailsOpened &&
                        <Modal
                              title='Детали ингредиента'
                              onOverlayClick={closeAllModals}
                              closeButton={closeAllModals}
                        >
                            <IngredientDetails data={cardData}/>
                        </Modal>}
              </div>
          </DataContext.Provider>
    )
}

export default App
