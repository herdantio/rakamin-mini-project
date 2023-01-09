import React, {createContext, useReducer} from 'react';

const initialState = {
  id: null,
  todoId: null,
  flagTodoId: null,
  isDeleteModalOpen: false,
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'hideDeleteModal':
        return {...state, isDeleteModalOpen:false};
      case 'showDeleteModal':
        return {...state, isDeleteModalOpen:true};
      case 'setId':
        return {...state, id: action.payload.id, todoId:action.payload.todoId}
      case 'setFlagTodoId':
        return {...state, flagTodoId: action.payload};
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }