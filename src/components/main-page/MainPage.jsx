import React from 'react'
import BurgerIngredients from '../burger-ingredients/BurgerIngredients'
import styles from './MainPage.module.css'
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import PropTypes from "prop-types";

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
    data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
        calories: PropTypes.number,
        price: PropTypes.number,
        image: PropTypes.string,
        image_mobile: PropTypes.string,
        image_large: PropTypes.string,
        __v: PropTypes.number
    })).isRequired,
    setIsIngredientDetailsOpened: PropTypes.func.isRequired,
    setIsOrderDetailsOpened: PropTypes.func.isRequired,
    setCardData: PropTypes.func.isRequired,
}

export default MainPage;