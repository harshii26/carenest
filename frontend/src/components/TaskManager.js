import React, { useEffect, useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: 'Pending',
    assignedTo: '',
  });

  // Fetch all tasks from the server
  const fetchTasks = async () => {
    try {
      const res = await fetch('https://carenest-grcr.onrender.com/api/tasks');
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit a new task
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://carenest-grcr.onrender.com/api/tasks/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setForm({
        title: '',
        description: '',
        status: 'Pending',
        assignedTo: '',
      });
      fetchTasks();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Delete a task
  const handleDelete = async (id) => {
    try {
      await fetch(`https://carenest-grcr.onrender.com/api/tasks/${id}`, {
        method: 'DELETE',
      });
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Mark task as completed
  const markAsCompleted = async (id) => {
    try {
      await fetch(`https://carenest-grcr.onrender.com/api/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'Completed' }),
      });
      fetchTasks();
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="task-manager">
      <h2>Task Manager</h2>

      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="assignedTo"
          placeholder="Elderly User ID"
          value={form.assignedTo}
          onChange={handleChange}
          required
        />
        <select name="status" value={form.status} onChange={handleChange}>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
        <button type="submit">Add Task</button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task._id}>
            <strong>{task.title}</strong> - <span>{task.status}</span>
            <p>{task.description}</p>
            <p><em>Assigned To:</em> {task.assignedTo}</p>
            <button className="delete-btn" onClick={() => handleDelete(task._id)}>
              Delete
            </button>
            {task.status !== 'Completed' && (
              <button className="complete-btn" onClick={() => markAsCompleted(task._id)}>
                Mark as Completed
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
