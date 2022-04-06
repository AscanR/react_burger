import React from 'react'
import BurgerIngredients from '../burger-ingredients/BurgerIngredients'
import styles from './MainPage.module.css'
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import PropTypes from "prop-types";
import dataType from "../data-type/DataType";

const MainPage = ({data, setIsIngredientDetailsOpened, setIsOrderDetailsOpened, setCardData}) => {

    return (
          <main className={styles.MainPage}>
              <BurgerIngredients
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
    data: dataType.isRequired,
    setIsIngredientDetailsOpened: PropTypes.func.isRequired,
    setIsOrderDetailsOpened: PropTypes.func.isRequired,
    setCardData: PropTypes.func.isRequired,
}

export default MainPage;