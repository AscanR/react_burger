import React from 'react';

const orderURL = "https://norma.nomoreparties.space/api/orders"

export const OrderApi = (data) => {
    return fetch(`${orderURL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "ingredients": data
        })
    })
          .then((response) => {
              if (!response.ok) {
                  throw new Error("HTTP error, status = " + response.status)
              }
              return response.json()
          })
};

