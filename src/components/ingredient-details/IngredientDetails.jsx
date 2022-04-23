import React from 'react'
import styles from './IngredientDetails.module.css'
import dataType from "../data-type/DataType";


const IngredientDetails = ({data}) => {
    return (
          <div className={styles.container}>
              <img src={data.image} alt={data.name} className={styles.img}/>
              <div className={styles.info}>
                  <p className="text text_type_main-medium header mb-8">{data.name}</p>
                  <div className={styles.compound}>
                      <div className={styles.components}>
                          <p className="text text_type_main-default text_color_inactive mb-2">Калории,ккал</p>
                          <p className="text text_type_digits-default text_color_inactive">{data.calories}</p>
                      </div>
                      <div className={styles.components}>
                          <p className="text text_type_main-default text_color_inactive mb-2">Белки, г</p>
                          <p className="text text_type_digits-default text_color_inactive">{data.proteins}</p>
                      </div>
                      <div className={styles.components}>
                          <p className="text text_type_main-default text_color_inactive mb-2">Жиры, г</p>
                          <p className="text text_type_digits-default text_color_inactive">{data.fat}</p>
                      </div>
                      <div className={styles.components}>
                          <p className="text text_type_main-default text_color_inactive mb-2">Углеводы, г</p>
                          <p className="text text_type_digits-default text_color_inactive">{data.carbohydrates}</p>
                      </div>
                  </div>
              </div>
          </div>
    );
};

IngredientDetails.propTypes = {
    data: dataType.isRequired
}

export default IngredientDetails;