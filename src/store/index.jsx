import React, {createContext, useReducer} from 'react';

const initialState = {
  id: null,
  todoId: null,
  flagTodoId: null,
  isDeleteModalOpen: false,
  todos: [],
  isCreateTodosModalOpen: false,
  isTaskModalOpen: false,
  taskModalMode:'create',
  taskName: '',
  taskProgress: ''
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
      case 'setTodos':
        return {...state, todos: action.payload};
      case 'hideCreateTodosModal':
        return {...state, isCreateTodosModalOpen:false};
      case 'showCreateTodosModal':
        return {...state, isCreateTodosModalOpen:true};
      case 'hideTaskModal':
        return {...state, isTaskModalOpen:false};
      case 'showTaskModal':
        return {...state, isTaskModalOpen:true};
      case 'setTaskModalMode':
        return {...state, taskModalMode: action.payload};
      case 'setTaskNameProgress':
        return {...state, taskName: action.payload.name, taskProgress: action.payload.progress};
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }