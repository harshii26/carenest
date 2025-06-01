const express = require('express');


const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const socketIo = require('socket.io');
const Message = require('./models/Message');

// Import Routes
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const medicationRoutes = require('./routes/medicationRoutes');
const chatRoutes = require('./routes/chatRoutes');
//const emergencyRoutes = require('./routes/emergencyRoutes');
const profileRoutes = require('./routes/profileRoutes');
const groceryRoutes = require("./routes/groceryRoutes");
// const volunteerRoutes = require("./routes/volunteerRoutes");
const profileRoutes = require('./routes/profileRoutes');
const path = require('path');



dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/medications', medicationRoutes);
app.use('/api/chat', chatRoutes);
// app.use('/api/emergency', emergencyRoutes);
app.use('/api/groceries', groceryRoutes);
// app.use('/api/users', userRoutes);

app.use('/api', profileRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// Socket.IO (Real-time chat)
io.on('connection', (socket) => {
  console.log('🟢 New client connected');

  socket.on('sendMessage', async (msg) => {
    try {
      const saved = await Message.create(msg);
      io.emit('receiveMessage', saved);
    } catch (err) {
      console.error('❌ Error saving message:', err.message);
    }
  });

  socket.on('disconnect', () => {
    console.log('🔴 Client disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
