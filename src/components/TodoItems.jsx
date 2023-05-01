import { FaPenSquare, FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";

const TodoItems = (props) => {
  const { task } = props;
  return (
    <div className="todoItem">
      <div className="inputDiv">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <p className="todoTaskItem">{task}</p>
      </div>
      <div className="iconDiv">
        <FaPenSquare className="edit" />
        <FaTrash className="delete" />
      </div>
    </div>
  );
};

TodoItems.propTypes = {
  task: PropTypes.string.isRequired,
};
export default TodoItems;