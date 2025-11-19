import { useState } from "react";

const TaskForm = ({ onTaskCreated }) => {
  const [task, setTask] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.title.trim()) return;

    setLoading(true);
    try {
      await onTaskCreated(task);
      setTask({ title: "", description: "" });
    } catch (error) {
      console.error("Error creating task:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <label htmlFor="title">Task Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="What needs to be done?"
          value={task.title}
          onChange={handleChange}
          className="form-input"
          required
          maxLength={200}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Add some details... (optional)"
          value={task.description}
          onChange={handleChange}
          className="form-textarea"
          rows="4"
          maxLength={2000}
        />
      </div>

      <button
        type="submit"
        disabled={loading || !task.title.trim()}
        className="submit-btn"
      >
        {loading ? (
          <>
            <div className="spinner"></div>
            Creating...
          </>
        ) : (
          "✨ Create Task"
        )}
      </button>
    </form>
  );
};

export default TaskForm;
