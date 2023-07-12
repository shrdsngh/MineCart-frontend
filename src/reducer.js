export const initialState = {
  basket: [],
  user: JSON.parse(localStorage.getItem("user")),
  address: {},
  quantity: 1,
};

export const getBasketTotal = (basket) =>
  basket.reduce(
    (amount, item, quantity) => item.price * item.quantity + amount,
    0
  );

const reducer = (state, action) => {
  console.log("action>>", action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("can't remove product with negative id");
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_ADDRESS":
      return {
        ...state,
        address: { ...action.item },
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "ADD_QUANTITY":
      return {
        ...state,
        basket: [...state.basket].map((bask) => {
          if (bask.id === action.item.id) {
            console.log("Hellppp");
            return { ...bask, quantity: action.item.quantity + 1 };
          } else {
            console.log("helllo");
            return bask;
          }
        }),
      };

    case "MINUS_QUANTITY":
      return {
        ...state,
        basket: [...state.basket].map((bask) => {
          if (bask.id === action.item.id) {
            console.log("Hellppp");
            return { ...bask, quantity: action.item.quantity - 1 };
          } else {
            console.log("helllo");
            return bask;
          }
        }),
      };

    default:
      return state;
  }
};

export default reducer;
