import React from 'react'
import BurgerIngridients from '../burger-ingridients/BurgerIngridients'
import styles from './MainPage.module.css'
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import PropTypes from "prop-types";

const MainPage = ({data, setIsIngredientDetailsOpened, setIsOrderDetailsOpened, setCardData}) => {

    return (
          <main className={styles.MainPage}>
              <BurgerIngridients
                    setIsIngredientDetailsOpened={setIsIngredientDetailsOpened}
                    setCardData={setCardData}
                    data={data}/>
              <BurgerConstructor
                    setIsOrderDetailsOpened={setIsOrderDetailsOpened}
                    data={data}/>
          </main>
    );
};

MainPage.propTypes = {
    data: PropTypes.array.isRequired,
    setIsIngredientDetailsOpened: PropTypes.func.isRequired,
    setIsOrderDetailsOpened: PropTypes.func.isRequired,
    setCardData: PropTypes.func.isRequired,
}

export default MainPage;