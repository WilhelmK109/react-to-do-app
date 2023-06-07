import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputToDo';
import TodosList from './TodosList';

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      }),
    );
  };

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList
        todosProps={todos}
        setTodos={setTodos}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    </div>
  );
};
export default TodosLogic;
