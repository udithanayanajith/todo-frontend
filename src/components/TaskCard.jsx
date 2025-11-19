const TaskCard = ({ task, type, onMarkDone }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleMarkDone = () => {
    onMarkDone(task.id);
  };

  return (
    <div className={`task-card ${type}`}>
      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>

        {task.description && (
          <p className="task-description">{task.description}</p>
        )}

        <div className="task-footer">
          <span className="task-date">📅 {formatDate(task.createdAt)}</span>

          {type === "incomplete" && (
            <button onClick={handleMarkDone} className="done-btn">
              ✅ Mark Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
