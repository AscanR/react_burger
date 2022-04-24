import React from 'react'
import BurgerIngredients from '../burger-ingredients/BurgerIngredients'
import styles from './MainPage.module.css'
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import PropTypes from "prop-types";
import dataType from "../../services/data-type/DataType";

const MainPage = ({setIsIngredientDetailsOpened, setIsOrderDetailsOpened, setCardData}) => {

    return (
          <main className={styles.MainPage}>
              <BurgerIngredients
                    setIsIngredientDetailsOpened={setIsIngredientDetailsOpened}
                    setCardData={setCardData}
              />
              <BurgerConstructor
                    setIsOrderDetailsOpened={setIsOrderDetailsOpened}
              />
          </main>
    );
};

MainPage.propTypes = {
    setIsIngredientDetailsOpened: PropTypes.func.isRequired,
    setIsOrderDetailsOpened: PropTypes.func.isRequired,
    setCardData: PropTypes.func.isRequired,
}

export default MainPage;