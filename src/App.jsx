import { useState, useEffect } from "react";
import { taskService } from "./services/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const fetchAllTasks = async () => {
    setLoading(true);
    try {
      const [incompleteResponse, completedResponse] = await Promise.all([
        taskService.getIncompleteTasks(),
        taskService.getCompletedTasks(),
      ]);
      setIncompleteTasks(incompleteResponse.data);
      setCompletedTasks(completedResponse.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleTaskCreated = async (taskData) => {
    try {
      await taskService.createTask(taskData);
      await fetchAllTasks();
    } catch (err) {
      console.error("Error creating task:", err);
      alert("Failed to create task");
    }
  };

  const handleMarkDone = async (taskId) => {
    try {
      await taskService.markTaskDone(taskId);
      await fetchAllTasks();
    } catch (err) {
      console.error("Error marking task done:", err);
    }
  };

  const getTotalTasks = () => incompleteTasks.length + completedTasks.length;

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-main">
            <h1>🎯 TaskFlow</h1>
            <p>Streamline your productivity</p>
          </div>
          <div className="header-stats">
            <div className="stat">
              <span className="stat-number">{getTotalTasks()}</span>
              <span className="stat-label">Total</span>
            </div>
            <div className="stat">
              <span className="stat-number">{incompleteTasks.length}</span>
              <span className="stat-label">To Do</span>
            </div>
            <div className="stat">
              <span className="stat-number">{completedTasks.length}</span>
              <span className="stat-label">Done</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - No Scroll */}
      <main className="main no-scroll">
        <div className="container">
          {/* Three Column Layout */}
          <div className="dashboard">
            {/* Add Task Column */}
            <div className="column create-column">
              <div className="column-header">
                <div className="column-icon">✨</div>
                <h2>Create Task</h2>
                <p>Add a new task</p>
              </div>
              <div className="column-content no-scroll">
                <TaskForm onTaskCreated={handleTaskCreated} />
              </div>
            </div>

            {/* To Do Column */}
            <div className="column todo-column">
              <div className="column-header">
                <div className="column-icon">📋</div>
                <h2>To Do</h2>
                <div className="task-count">{incompleteTasks.length}</div>
              </div>
              <div className="column-content no-scroll">
                <TaskList
                  tasks={incompleteTasks}
                  type="incomplete"
                  onMarkDone={handleMarkDone}
                  loading={loading}
                />
              </div>
            </div>

            {/* Completed Column */}
            <div className="column completed-column">
              <div className="column-header">
                <div className="column-icon">🏆</div>
                <h2>Completed</h2>
                <div className="task-count">{completedTasks.length}</div>
              </div>
              <div className="column-content no-scroll">
                <TaskList
                  tasks={completedTasks}
                  type="completed"
                  loading={loading}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
