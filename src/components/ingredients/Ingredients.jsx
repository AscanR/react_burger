import React from 'react';
import styles from "./Inredients.module.css";
import {DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import dataType from "../data-type/DataType";

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
    item: dataType.isRequired
}

export default Ingredients;