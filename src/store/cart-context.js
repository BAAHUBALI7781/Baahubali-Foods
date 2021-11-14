import React from 'react';

const CartContext=React.createContext({
    items:[],
    amount:0,
    addItem:(item)=>{},
    removeItem:(item_id)=>{}
})

export default CartContext;