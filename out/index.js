"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());
const questions = [
    {
        question: "What is the capital of Australia?",
        answer: "Canberra"
    },
    {
        question: "Who painted the Mona Lisa?",
        answer: "Leonardo da Vinci"
    },
    { question: "What is the largest planet in the solar system?",
        answer: "Jupiter"
    },
    { question: "What is the capital of Nepal?",
        answer: "Kathmandu"
    },
    { question: "What is the chemical symbol for gold?",
        answer: "Au"
    }
];
app.get('/quiz', (req, res) => {
    res.send(questions);
});
app.get(`/quiz/:inputQuestion/:inputAnswer`, (req, res) => {
    const question = req.params.inputQuestion;
    const answer = req.params.inputAnswer;
    questions.push({ question, answer });
    res.send(`Question: ${question} Answer: ${answer}`);
});
app.get('/quiz/:inputAnswer', (req, res) => {
    const inputAnswer = req.params.inputAnswer;
    let found = false;
    for (let i = 0; i < questions.length; i++) {
        if (inputAnswer === questions[i].answer) {
            found = true;
            break;
        }
    }
    if (found) {
        res.send("Correct!");
    }
    else {
        res.send("Incorrect!");
    }
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=index.js.map