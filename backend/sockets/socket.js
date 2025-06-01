const Message = require('../models/Message');

const socketHandler = (io) => {
  io.on('connection', (socket) => {
    socket.on('joinRoom', ({ sender, receiver }) => {
      socket.join([sender, receiver].sort().join('-'));
    });

    socket.on('sendMessage', async (msg) => {
      const message = new Message(msg);
      await message.save();

      const room = [msg.sender, msg.receiver].sort().join('-');
      io.to(room).emit('receiveMessage', msg);
    });
  });
};

module.exports = socketHandler;
