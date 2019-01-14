import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

export default (state = [], action) => {
  const movedOrder = {
    ...state.find(order => order.id === action.payload)
  };

  const fillOrder = {
    ...state.find(order => order.position === action.payload.from)
  };

  switch (action.type) {
    case CREATE_NEW_ORDER:
      const order = {
        id: action.payload.id,
        recipe: action.payload.recipe,
        ingredients: [],
        position: 'clients'
      };
      return state.concat([order]);

    case MOVE_ORDER_NEXT:
      if (movedOrder.position === 'clients') {
        movedOrder.position = 'conveyor_1';
      } else if (movedOrder.position !== 'conveyor_4') {
        movedOrder.position = `conveyor_${Number(
          movedOrder.position.slice(-1)
        ) + 1}`;
      } else if (movedOrder.ingredients.length === movedOrder.recipe.length) {
        movedOrder.position = 'finish';
      }
      return state.map(order =>
        order.id === movedOrder.id ? movedOrder : order
      );

    case MOVE_ORDER_BACK:
      if (movedOrder.position !== 'conveyor_1') {
        movedOrder.position = `conveyor_${Number(
          movedOrder.position.slice(-1)
        ) - 1}`;
      }

      return state.map(order =>
        order.id === movedOrder.id ? movedOrder : order
      );

    case ADD_INGREDIENT:
      if (
        fillOrder.recipe.find(order => order === action.payload.ingredient) &&
        !fillOrder.ingredients.find(order => order === action.payload.ingredient)
      ) {
        fillOrder.ingredients = [
          ...fillOrder.ingredients,
          action.payload.ingredient
        ];
      }

      return state.map(order =>
        order.id === fillOrder.id ? fillOrder : order
      );

    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
