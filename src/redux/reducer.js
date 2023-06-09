const initialStatePost = {
  products: [],
};

export const productReducer = (state = initialStatePost, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};
