import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

const storeContext = createContext();
const{ Provider } = storeContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(storeContext);
};

export { StoreProvider , useStoreContext };