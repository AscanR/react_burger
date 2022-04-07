import React from 'react'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerIngredients.module.css'
import Card from "../card/Card";
import PropTypes from 'prop-types'
import dataType from "../data-type/DataType";


const BurgerIngredients = ({setIsIngredientDetailsOpened, setCardData, data}) => {
    const [current, setCurrent] = React.useState('one')
    return (
          <section className={styles.BurgerIngridients}>
              <p className="text text_type_main-large">Соберите бургер</p>
              <nav className={styles.nav}>
                  <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                      Булки
                  </Tab>
                  <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                      Соусы
                  </Tab>
                  <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                      Начинки
                  </Tab>
              </nav>
              <div className={styles.ingridients}>
                  <p className="text text_type_main-medium">Булки</p>
                  <div className={styles.grid}>
                      {data.filter(item => item.type === 'bun').map((item) => {
                          return <Card
                                setCardData={setCardData}
                                item={item}
                                key={item._id}
                                setIsIngredientDetailsOpened={setIsIngredientDetailsOpened}
                          />
                      })}
                  </div>
                  <p className="text text_type_main-medium">Соусы</p>
                  <div className={styles.grid}>
                      {data.filter(item => item.type === 'sauce').map((item) => {
                          return <Card
                                setCardData={setCardData}
                                item={item}
                                key={item._id}
                                setIsIngredientDetailsOpened={setIsIngredientDetailsOpened}
                          />
                      })}
                  </div>
                  <p className="text text_type_main-medium">Начинки</p>
                  <div className={styles.grid}>
                      {data.filter(item => item.type === 'main').map((item) => {
                          return <Card item={item}
                                       setCardData={setCardData}
                                       key={item._id}
                                       setIsIngredientDetailsOpened={setIsIngredientDetailsOpened}
                          />
                      })}
                  </div>
              </div>
          </section>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(dataType).isRequired,
    setIsIngredientDetailsOpened: PropTypes.func.isRequired,
    setCardData: PropTypes.func.isRequired

}

export default BurgerIngredients