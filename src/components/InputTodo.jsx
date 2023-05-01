import { FaPlusCircle } from "react-icons/fa";

const InputTodo = () => {
  return (
    <form className="input">
      <input
        type="text" className="task" required placeholder="Add your Todo"/>
      <FaPlusCircle className="icon" />
    </form>
  );
};

export default InputTodo;