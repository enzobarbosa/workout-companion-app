 import React, { useEffect } from 'react'

 // Création du contexte
 const CartContext = React.createContext()
 
 // Création des actionTypes
 const actionTypes = {
   ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
   REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART'
 }
 
 // Etat initial
 // On charge l'état sauvegardé dans le localStorage ou on initialise les valeurs
 const initialState = JSON.parse(window.localStorage.getItem('CART')) || {
   cart: [],
   total: 0
 }
 
 // const cartItem = {
 //   exercice: exercice,
 //   quantity: quantité
 // }
 
 const CartReducer = (state, action) => {
   switch (action.type) {
     case actionTypes.ADD_ITEM_TO_CART:
       // Si mon élément est déjà présent dans mon entraînement, j'incrémente la quantité
       let _total=0; 
       for (let exercice in state.cart){
           _total += exercice.quantity;
        }
       if (state.cart.some(item => item.exercice._id === action.data._id)) {
         return {
           ...state,
           cart: state.cart.map(item => {
             // Je récupère l'élément à modifier
             if (item.exercice._id === action.data._id) {
               // Je met à jour la quantité
               return { ...item, quantity: item.quantity + 1 }
             } else {
               // On retourne les items non concernés par le changement de quantité
               return item
             }
           }),
           // Calcul du total : si l'entraînement contient des items, on les additionne avec la méthode Array.reduce()
           // Sinon, on retourne le nombre d'exercices courrant
           total: state.cart.length > 0
             ? state.cart.reduce((acc, object) => acc + object.quantity, 1)
             : 1
          // total: 0
         }
       } else {
         // On retourne le nouvel état
         // ...state = on conserve l'état courant
         // On concatène le tableau de l'état courant avec notre item a ajouter
         // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
         return {
           ...state,
           cart: state.cart.concat([{ exercice: action.data, quantity: 1 }]),
           total: state.cart.length > 0
           ? state.cart.reduce((acc, object) => acc + object.quantity, 1)
           : 1
          // total: 0
         }
       }
 
     case actionTypes.REMOVE_ITEM_FROM_CART:
       console.log(action.data);
       return {
         ...state,
         cart: state.cart.map(item => {
           if (item.exercice._id === action.data.exercice._id) {
             return {
               ...item, quantity: item.quantity - 1
             }
           } else {
             return item
           }
           // On retire les éléments ayant une quantité < 1 ou on conserve ceux qui ont une quantité > 0
         }).filter(item => item.quantity > 0),
         total: state.cart.length > 0
         ? state.cart.reduce((acc, object) => acc + object.quantity, -1)
         : action.data.quantity
        // total: 0
       }
     default:
       throw new Error(`Unhandled action type : ${action.type}`)
   }
 }
 
 // Composant Provider
 const CartProvider = ({ children }) => {
   const [state, dispatch] = React.useReducer(CartReducer, initialState)
 
   // Enregistre automatiquement l'état dans le localStorage à chaque changement
   useEffect(() => {
     window.localStorage.setItem('CART', JSON.stringify(state))
   }, [state])
 
   return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
 }
 
 const useCart = () => {
   const context = React.useContext(CartContext)
   if (!context) {
     throw new Error('useCart must be used inside a CartProvider')
   }
   return context
 }
 
 export {
   CartProvider,
   useCart,
   actionTypes
 }
 