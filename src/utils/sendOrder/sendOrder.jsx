import React from 'react';
import {baseUrl} from "../baseUrl/baseUrl";
import {checkResponse} from "../checkResponse/checkResponse";

export const sendOrder = (data) => {
    return fetch(`${baseUrl}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "ingredients": data
        })
    })
          .then(res => checkResponse(res))
};

