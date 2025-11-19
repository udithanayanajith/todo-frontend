import TaskCard from "./TaskCard";

const TaskList = ({ tasks, type, onMarkDone, loading }) => {
  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading tasks...</p>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">{type === "incomplete" ? "📝" : "✅"}</div>
        <p>{type === "incomplete" ? "No tasks to do" : "No completed tasks"}</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          type={type}
          onMarkDone={onMarkDone}
        />
      ))}
    </div>
  );
};

export default TaskList;
