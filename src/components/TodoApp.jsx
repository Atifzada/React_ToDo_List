import Header from './Header'
import TodosLogic from "./TodosLogic";

const ToDoApp = () => {
  return (
    <>
      <div className="myTodoApp">
      <Header />
      <TodosLogic />
      </div>
    </>
  );
};

export default ToDoApp;
