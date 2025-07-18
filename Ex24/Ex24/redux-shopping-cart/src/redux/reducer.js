// src/redux/reducer.js
import { ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART } from './actions';

// Trạng thái ban đầu của ứng dụng
const initialState = {
  cart: [], // Mảng chứa các sản phẩm trong giỏ hàng
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const productToAdd = action.payload;
      const existingProduct = state.cart.find(item => item.id === productToAdd.id);

      if (existingProduct) {
        // Nếu sản phẩm đã có trong giỏ, tăng số lượng lên 1
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === productToAdd.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // Nếu sản phẩm chưa có, thêm vào giỏ với số lượng là 1
        return {
          ...state,
          cart: [...state.cart, { ...productToAdd, quantity: 1 }],
        };
      }
    }

    case UPDATE_CART: {
        const { id } = action.payload;
        // Logic tương tự như ADD_TO_CART khi sản phẩm đã tồn tại
        return {
            ...state,
            cart: state.cart.map(item =>
              item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
    }

    case DELETE_FROM_CART: {
      const { id } = action.payload;
      // Lọc ra sản phẩm cần xóa và trả về mảng mới
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== id),
      };
    }

    default:
      // Nếu không có action nào khớp, trả về state hiện tại
      return state;
  }
};

export default cartReducer;
