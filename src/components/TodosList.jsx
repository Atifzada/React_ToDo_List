import TodoItems from "./TodoItems";

const TodoList = () => {
  const tasks = [
    {
      id: 1,
      task: "First Task",
    },
    {
      id: 2,
      task: "Second Task",
    },
    {
      id: 3,
      task: "Third Task",
    },
    {
      id: 4,
      task: "Fourth Task",
    },
    {
      id: 5,
      task: "Fifth Task",
    },
  ];
  return (
    <div className="mainContainer">
      {tasks.map((item) => {
        return <TodoItems key={item.id} task={item.task} />;
      })}
    </div>
  );
};

export default TodoList;