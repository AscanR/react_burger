import React from 'react'
import BurgerIngridients from '../burger-ingridients/BurgerIngridients'
import styles from './MainPage.module.css'
import data from "../../utils/data"
import BurgerConstructor from "../burger-constructor/BurgerConstructor";

const MainPage = () => {
    return (
          <main className={styles.MainPage}>
              <BurgerIngridients data={data}/>
              <BurgerConstructor data={data}/>
          </main>
    );
};

export default MainPage;