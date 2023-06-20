import cors from 'cors';
import express from "express";
import { autheticateLogin, checkMessage, checkUserEmail, checkUserId, validateMessageData, validateUserData } from "./middlewares.js";

const app = express();
app.use(express.json());
app.use(cors('*'))
app.listen(8080, () => console.log("Servidor iniciado."));

export const users = [
  {
    id: 1,
    name: 'lucas',
    email: 'lucas@teste.com',
    password: 'lucas123',
    messages: [
      {
        id: 1,
        title: 'Title 01',
        description: 'Description 01',
      },
      {
        id: 2,
        title: 'Title 01',
        description: 'Description 01',
      },
      {
        id: 3,
        title: 'Title 01',
        description: 'Description 01',
      }
    ],
  }
];

app.get("/", (req, res) => {
  return res
    .status(200)
    .json({ status: 200, message: "Bem-vindo! Você está na home da API" });
});

app.get("/users", (req, res) => {
  if (!users.length) {
    return res.status(404).json({
      success: false,
      data: null,
      message: "Não há usuários cadastrados no momento",
    });
  }

  return res.status(200).json({
    success: true,
    data: users,
    message: "Dados de usuários buscados com sucesso!",
  });
});

app.get("/users/:userId", checkUserId, (req, res) => {
  res.status(200).json({
    success: true,
    data: req.user,
    message: "Usuário encontrado",
  });
});

app.post("/users", validateUserData, checkUserEmail, (req, res) => {
  const { name, email, password } = req.body;
  const newUser = {
    id: new Date().valueOf(),
    name,
    email,
    password,
    messages: [],
  };
  users.push(newUser);

  res.status(201).json({
    success: true,
    data: newUser,
    message: "Usuário cadastrado com sucesso!",
  });
});

app.post("/login", autheticateLogin, (req, res) => {
  res
    .status(201)
    .json({ message: "Login bem sucedido. Seja bem-vindo!", user: req.user });
});

//MESSAGES
app.get("/users/:userId/messages", checkUserId, (req, res) => {
  const { userId } = req.params;
  const user = req.user;

  return res.status(200).json({
    success: true,
    data: user.messages,
    message: "Recados do usuário obtidos com sucesso!",
  });
});

app.post(
  "/users/:userId/messages",
  checkUserId,
  validateMessageData,
  (req, res) => {
    const { userId } = req.params;
    const { title, description } = req.body;

    const user = req.user;

    const newMessage = {
      id: new Date().valueOf(),
      title,
      description,
    };

    user.messages.push(newMessage);

    return res.status(201).json({
      success: true,
      data: newMessage,
      message: "Recado criado com sucesso!",
    });
  }
);

app.put(
  "/users/:userId/messages/:messageId",
  checkMessage,
  (req, res) => {
    const { userId, messageId } = req.params;
    const { title, description } = req.body;

    const user = req.user;
    const message = req.message;

    // VALIDAR SE AO MENOS 1 PROPRIEDADE (TITLE OU DESCRIPTION) FOI ENVIADA NA ROTA
    if (!title && !description) {
      return res.status(400).json({
        success: false,
        message: 'Ao menos uma das propriedades deve ser enviada para atualizar.'
      })
    }

    if (title) {
      message.title = title;
    }

    if (description) {
      message.description = description;
    }

    return res.status(200).json({
      success: true,
      data: message,
      message: "Mensagem atualizada com sucesso!",
    });
  }
);

app.delete("/users/:userId/messages/:messageId", checkMessage, (req, res) => {
  const { userId, messageId } = req.params;

  const user = req.user;
  const message = req.message;

  const messageIndex = user.messages.findIndex((msg) => msg.id == messageId);

  if (messageIndex === -1) {
    return res.status(404).json({
      success: false,
      data: null,
      message: "Mensagem não encontrada",
    });
  }

  user.messages.splice(messageIndex, 1);

  return res.status(200).json({
    success: true,
    message: "Mensagem excluída com sucesso!",
  });
});
