import Conservation from "../models/conservation.model.js";
import Message from "../models/message.model.js";
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    let conservation = await Conservation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conservation) {
      conservation = await Conservation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conservation.messages.push(newMessage._id);

      //Socket io funcion

      //this will run in parallel
      //Nó sẽ chạy song song cả 2 cái lưu cuộc hội thoại và tin nhắn
      await Promise.all([conservation.save(), newMessage.save()]);
      res.status(201).json({ newMessage });
    }
  } catch (error) {
    console.log("Error send message:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    const conservation = await Conservation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    if (!conservation) {
      return res.status(404).json({ error: "Conservation not found" });
    }
    let messages = conservation.messages;
    return res.status(201).json({ messages });
  } catch (error) {
    console.log("Error get message:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
