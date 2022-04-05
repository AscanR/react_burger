import React from 'react'
import styles from './IngredientDetails.module.css'
import PropTypes from 'prop-types'


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
    })).isRequired
}

export default IngredientDetails;