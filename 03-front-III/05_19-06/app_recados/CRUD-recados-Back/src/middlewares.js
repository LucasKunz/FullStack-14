import { users } from "./index.js"; // index

function checkUserEmail(req, res, next) {
    const { email } = req.body;
    const user = users.find((user) => user.email === email);

    if (user) {
        return res.status(400).json({ message: "Email já cadastrado." });
    }

    next();
}

function validateUserData(req, res, next) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res
            .status(400)
            .json({ message: "Todos os campos devem ser preenchidos." });
    }

    if (!email.includes("@") || !email.includes(".")) {
        return res.status(400).json({ message: "E-mail inválido." });
    }

    next();
}

function autheticateLogin(req, res, next) {
    const { email, password } = req.body;

    const user = users.find(
        (usuario) => usuario.email === email && usuario.password === password
    );

    if (!user) {
        return res.status(401).json({ message: "Dados inválidos" });
    }

    req.user = user;
    next();
}

function validateMessageData(req, res, next) {
    const { title, description } = req.body;

    if (!title || !description) {
        return res
            .status(400)
            .json({ message: "Todos os campos da mensagem devem ser preenchidos." });
    }

    next();
}

function checkUserId(req, res, next) {
    const { userId } = req.params;
    const user = users.find((user) => user.id == userId);

    if (!user) {
        return res.status(404).json({
            message: "Usuário não encontrado",
        });
    }

    req.user = user;
    next();
}

function checkMessage(req, res, next) {
    const { userId, messageId } = req.params;

    checkUserId(req, res, () => {
        const user = req.user;

        const message = user.messages.find((msg) => msg.id == messageId);

        if (!message) {
            return res.status(404).json({
                message: "Recado não encontrado.",
            });
        }

        req.message = message;
        next();
    });
}

export { autheticateLogin, checkMessage, checkUserEmail, checkUserId, validateMessageData, validateUserData };

