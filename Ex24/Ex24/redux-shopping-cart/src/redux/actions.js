// src/redux/actions.js

// Action Types: Dùng hằng số để tránh lỗi chính tả
export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART'; // Tăng số lượng sản phẩm
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

// Action Creators: Các hàm tạo ra action object
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product, // Dữ liệu đi kèm, ở đây là thông tin sản phẩm
  };
};

export const updateCart = (productId) => {
  return {
    type: UPDATE_CART,
    payload: {
      id: productId,
    },
  };
};

export const deleteFromCart = (productId) => {
  return {
    type: DELETE_FROM_CART,
    payload: {
      id: productId,
    },
  };
};
