import React, { useState } from 'react';

const PizzaForm = () => {
    return(
        <div>
            <form>
                <label>
                    Your Name Here: <input type='text' name='name' id='name' />
                </label>
                <label>
                    Pizza Size: <select name='size'>
                        <option value=''></option>
                        <option value='8 inch'>8 inch</option>
                        <option value='12 inch'>12 inch</option>
                        <option value='16 inch'>16 inch</option>
                        <option value='24 inch'>24 inch</option>
                    </select>
                </label>
                <h6>
                    Pick Your Toppings: 
                </h6>
                <label>
                    <input type='checkbox' name='pepperoni' id='pepperoni' />
                    Pepperoni 
                </label>
                <label>
                    <input type='checkbox' name='bacon' id='bacon' />
                    Bacon 
                </label>
                <label>
                    <input type='checkbox' name='peppers' id='peppers' />
                    Peppers 
                </label>
                <label>
                    <input type='checkbox' name='sausage' id='sausage' />
                    Sausage 
                </label>
                <label>
                    Anything else? <input type='text' name='special' id='special' />
                </label>
            </form>
        </div>
    )
}

export default PizzaForm;