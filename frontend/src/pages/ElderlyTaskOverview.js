import { useEffect, useState } from 'react';
import axios from 'axios';

function ElderlyTaskOverview({ elderlyId }) {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get(`/api/tasks/elderly/${elderlyId}`);
        if (Array.isArray(res.data)) {
          setTasks(res.data);
        } else {
          setTasks([]); // fallback if it's not an array
          console.error("Unexpected response:", res.data);
        }
      } catch (err) {
        setError('Failed to load tasks');
        console.error(err);
      }
    };

    fetchTasks();
  }, [elderlyId]);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Your Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks assigned yet.</p>
      ) : (
        tasks.map(task => (
          <div key={task._id}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ElderlyTaskOverview;
