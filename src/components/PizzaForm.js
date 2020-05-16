import React, { useState } from 'react';

const PizzaForm = () => {

const [order, setOrder] = useState([])

const [pizzaState, setPizzaState] = useState({
    name: '',
    size: '',
    pepperoni: false,
    bacon: false,
    peppers: false,
    sausage: false,
    special: ''
})

const pizzaChange = (event) => {
    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setPizzaState({
        ...pizzaState,
        [event.target.name]: value
    });
}

const orderSubmit = event => {
    event.preventDefault();
    console.log(pizzaState)
    setOrder([
        ...order,
        pizzaState
    ])
    setPizzaState({
        name: '',
        size: '',
        pepperoni: false,
        bacon: false,
        peppers: false,
        sausage: false,
        special: ''
    })
}

    return(
        <div>
            <form onSubmit={orderSubmit}>
                <label>
                    Your Name Here: 
                    <input onChange={pizzaChange} value={pizzaState.name} type='text' name='name' id='name' />
                </label>
                <label>
                    Pizza Size: 
                    <select onChange={pizzaChange} name='size' value={pizzaState.size}>
                        <option value=''></option>
                        <option value='8 inch'>8 inch</option>
                        <option value='12 inch'>12 inch</option>
                        <option value='16 inch'>16 inch</option>
                        <option value='24 inch'>24 inch</option>
                    </select>
                </label>
                <h4>
                    Pick Your Toppings: 
                </h4>
                <label>
                    <input onChange={pizzaChange} checked={pizzaState.pepperoni} type='checkbox' name='pepperoni' id='pepperoni' />
                    Pepperoni 
                </label>
                <label>
                    <input onChange={pizzaChange} checked={pizzaState.bacon} type='checkbox' name='bacon' id='bacon' />
                    Bacon 
                </label>
                <label>
                    <input onChange={pizzaChange} checked={pizzaState.peppers} type='checkbox' name='peppers' id='peppers' />
                    Peppers 
                </label>
                <label>
                    <input onChange={pizzaChange} checked={pizzaState.sausage} type='checkbox' name='sausage' id='sausage' />
                    Sausage 
                </label>
                <label>
                    Anything else? 
                    <input onChange={pizzaChange} value={pizzaState.special} type='text' name='special' id='special' />
                </label>
                <button type='submit'>Add to Order</button>
            </form>
            {order.map(pizza => {
                return <div>
                     <h5>{pizza.name}</h5>
                     <h5>{pizza.size}</h5>
                     <h5>{pizza.special}</h5> 
                     <h5>{pizza.pepperoni === true ? 'Pepperoni' : null}</h5>
                     <h5>{pizza.bacon === true ? 'Bacon' : null}</h5> 
                     <h5>{pizza.peppers === true ? 'Peppers' : null}</h5> 
                     <h5>{pizza.sausage === true ? 'Sausage' : null}</h5>  
                    </div>
            })}
        </div>
    )
}

export default PizzaForm;