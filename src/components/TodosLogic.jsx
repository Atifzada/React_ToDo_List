import InputTodo from "./InputTodo";
import TodoList from "./TodosList";

const TodosLogic = () => {
  return (
    <>
      <div className="todoLogic">
        <InputTodo />
        <TodoList />
      </div>
    </>
  );
};

export default TodosLogic;