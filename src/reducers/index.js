const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      let returnState = {};
      let stateItem = state[action.item.id];

      if (stateItem) {
        const quantity = stateItem.quantity;

        returnState = {
          ...state,
          [action.item.id]: {
            ...action.item,
            quantity: quantity + 1,
          },
        };
      } else {
        returnState = {
          ...state,
          [action.item.id]: {
            ...action.item,
            quantity: 1,
          },
        };
      }

      return returnState;
    }
    default:
      return state;
  }
}

/*
for remove you do th esame thing but -1
probably dont have to check if it's zero cause the button to remove won't be there
*/

export const getStoreItemArray = (state) => Object.values(state);
