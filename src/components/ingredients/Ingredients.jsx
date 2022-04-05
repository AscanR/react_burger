import React from 'react';
import styles from "./Inredients.module.css";
import {DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const Ingredients = ({item}) => {
    return (
          <div className={styles.element}>
              <DragIcon type="primary"/>
              <ConstructorElement
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
              />
          </div>
    );
};

Ingredients.propTypes = {
    item: PropTypes.arrayOf(PropTypes.shape({
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
    }))
}

export default Ingredients;