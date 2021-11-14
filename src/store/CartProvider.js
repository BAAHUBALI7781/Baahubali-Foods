
import CartContext from './cart-context';
import {useReducer} from 'react';

const defaultCartState={
    items:[],
    amount:0
}

const cartReducer=(state, action)=>{
    if(action.type==='ADD_ITEM'){
        
        const updatedAmount = state.amount+action.item.quantity*action.item.price;
        const existingItemIndex = state.items.findIndex(item=> item.id===action.item.id);
        const existingItem = state.items[existingItemIndex];

        let updatedItems;
        if(existingItem){
            let updatedItem={
                ...existingItem,
                quantity:existingItem.quantity+action.item.quantity
            }
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem;
        }
        else{
            updatedItems = state.items.concat(action.item);
        }
        return {
            items:updatedItems,
            amount:updatedAmount
        }
    }
    let updatedItems;
    if(action.type==='REMOVE_ITEM'){
        const cartItemIndex=state.items.findIndex(item=>item.id===action.id);
        const cartItem=state.items[cartItemIndex];
        const updatedAmount=Math.abs(state.amount-cartItem.price);
        if(cartItem.quantity>1){
            let updatedItem={
                ...cartItem,
                quantity:cartItem.quantity-1
            }
            updatedItems=[...state.items];
            updatedItems[cartItemIndex]=updatedItem;
        }
        else
        {
            updatedItems=state.items.filter(item=>{
                return item.id!==action.id;
            });

        }
        
        return {
            items:updatedItems,
            amount:updatedAmount
        }
    }
    return defaultCartState;
}
const CartProvider=(props)=>{
    const [cartState, dispatchCartHandler] = useReducer(cartReducer,defaultCartState);
    const addItemHandler= item =>{
        dispatchCartHandler({
            type:'ADD_ITEM',
            item:item
        });
    };
    const removeItemHandler= item_id =>{
        dispatchCartHandler({
            type:'REMOVE_ITEM',
            id:item_id
        });
    };

    const cartContext = {
        items : cartState.items,
        amount : cartState.amount,
        addItem : addItemHandler,
        removeItem : removeItemHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;