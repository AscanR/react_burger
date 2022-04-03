import React, {useEffect, useState} from 'react'
import styles from './App.module.css'
import AppHeader from '../app-header/AppHeader'
import MainPage from '../main-page/MainPage'
import Modal from '../modal/Modal'
import OrderDetails from '../order-details/OrderDetails'
import IngredientDetails from '../ingredient-details/IngredientDetails'

function App() {

    const [data, setData] = useState([])
    const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false)
    const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = useState(false)
    const [cardData, setCardData] = useState([])

    const closeAllModals = () => {
        setIsOrderDetailsOpened(false)
        setIsIngredientDetailsOpened(false)
    }

    const handleEscKeydown = (event) => {
        event.key === "Escape" && closeAllModals();
    }

    useEffect(() => {
        fetch('https://norma.nomoreparties.space/api/ingredients')
              .then(response => response.json())
              .then(ingredients => {
                  setData(ingredients.data)
              })
              .catch(err => console.log(err))
    }, [])
    
    return (
          <div className={styles.container}>
              <AppHeader/>
              <MainPage
                    setIsOrderDetailsOpened={setIsOrderDetailsOpened}
                    setIsIngredientDetailsOpened={setIsIngredientDetailsOpened}
                    setCardData={setCardData}
                    data={data}/>
              {isOrderDetailsOpened &&
                    <Modal
                          title=''
                          onOverlayClick={closeAllModals}
                          onEscKeydown={handleEscKeydown}
                          closeButton={closeAllModals}
                    >
                        <OrderDetails/>
                    </Modal>}
              {isIngredientDetailsOpened &&
                    <Modal
                          title='Детали ингредиента'
                          onOverlayClick={closeAllModals}
                          onEscKeydown={handleEscKeydown}
                          closeButton={closeAllModals}
                    >
                        <IngredientDetails data={cardData}/>
                    </Modal>}
          </div>
    )
}

export default App
