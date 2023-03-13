import { useDispatch } from 'react-redux';

const initialState = {
    products: [],
    total: 0,
};

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log(state);
            const newProduct = action.payload;
            const productIndex = state.products.findIndex(
            (product) => product.id === newProduct.id
            );
            let newTotal = state.total + newProduct.price;
            let newProducts;
            if (productIndex === -1) {
            newProducts = [...state.products, { ...newProduct, quantity: 1 }];
            } else {
            const product = state.products[productIndex];
            newProducts = [
                ...state.products.slice(0, productIndex),
                { ...product, quantity: product.quantity + 1 },
                ...state.products.slice(productIndex + 1),
            ];
            newTotal = state.total + product.price;
            }
            return {
            ...state,
            products: newProducts,
            total: newTotal,
            };

        case "REMOVE_ITEM":
            const filteredProducts = state.products.filter(
            (product) => product.id !== action.payload.id
            );
            return {
            ...state,
            products: filteredProducts,
            total: state.total - action.payload.price,
            };

        case "CLEAR_CART":
            return {
            ...state,
            products: [],
            total: 0,
            };
    
        default:
            return state;
        }
}



const useAddToCart = () => {
    const dispatch = useDispatch();

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
        console.log(localStorage.getItem("cart"));
    };

    return addToCart;
};

export default useAddToCart;;


export const clearCart = () => ({
    type: "CLEAR_CART",
});

export const removeFromCart = (product) => ({
    type: "REMOVE_ITEM",
    payload: product,
});