import Header from './Header';
import TodosLogic from './TodosLogic';

export default function TodoApp() {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
}
