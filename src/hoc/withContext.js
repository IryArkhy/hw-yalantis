/* eslint-disable no-plusplus */
import React, {
  useState,
  createContext,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import api from '../servises/api';
import { findProductById } from '../helpers/cartHelpers';
import storage from '../helpers/storageHelpers';

export const ShopContext = createContext({
  products: [],
  page: 0,
  pages: 0,
  cart: [],
  actions: {
    addProductToCart: () => undefined,
    removeProductFromCart: () => undefined,
    setPage: () => undefined,
    clearCart: () => undefined,
    setProducts: () => undefined,
  },
});

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  // load initial data on the page
  useEffect(() => {
    setProducts([]);
    api.getProducts
      .then(res => {
        const { items, perPage, page: currentPage, totalItems } = res.data;
        setProducts(items);
        setPage(currentPage);
        setPages(Math.floor(totalItems / perPage));
      })
      .catch(error => new Error(error));
    setCart(storage.get('cart') ? storage.get('cart') : []);
  }, [page]);

  // save any changes in the cart to LocalStorage
  useEffect(() => storage.save('cart', cart), [cart]);

  const addProductToCart = useCallback(
    (productId = '') => {
      const productToAdd = findProductById(products, productId);
      const alreadyInCart = findProductById(cart, productId);
      if (!alreadyInCart) {
        setCart([...cart, { ...productToAdd, count: 1 }]);
        return;
      }
      setCart([
        ...cart.map(product =>
          product.id === productId
            ? { ...product, count: product.count + 1 }
            : product,
        ),
      ]);
    },
    [cart, products],
  );

  const removeProductFromCart = useCallback(
    (productId = '') => {
      const productToDelete = findProductById(cart, productId);
      if (!productToDelete) return;
      if (productToDelete.count === 1) {
        setCart(cart.filter(product => product.id !== productId));
        return;
      }
      setCart([
        ...cart.map(product =>
          product.id === productId
            ? { ...product, count: product.count - 1 }
            : product,
        ),
      ]);
    },
    [cart, setCart],
  );

  const clearCart = useCallback(() => {
    setCart([]);
    storage.save('cart', []);
  }, [setCart]);

  const value = useMemo(
    () => ({
      products,
      cart,
      page,
      pages,
      actions: {
        addProductToCart,
        removeProductFromCart,
        setPage,
        clearCart,
        setProducts,
      },
    }),
    [
      products,
      cart,
      page,
      pages,
      addProductToCart,
      removeProductFromCart,
      clearCart,
      setProducts,
    ],
  );
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
