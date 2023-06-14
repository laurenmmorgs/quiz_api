"use strict";
// app.get('/quiz', (req: Request, res: Response) => {
//    var questions = [
//       " 1: What is the capital of Australia? Choose from: Canberra, Sydney, Melbourne, Brisbane",
//       " 2 : Who painted the Mona Lisa? Choose from: Leonardo da Vinci, Michelangelo, Raphael, Donatello",
//       " 3: What is the largest planet in the solar system? Choose from: Jupiter, Saturn, Uranus, Neptune",
//       " 4: What is the capital of Nepal? Choose from: Kathmandu, Pokhara, Patan, Biratnagar",
//       " 5: What is the chemical symbol for gold? Choose from: Au, Ag, Cu, Fe"
//    ]
//    const response = questions.join('\n');
//    res.send(response)
// });
// app.get('/quiz/:id', (req: Request, res: Response) => {
//    console.dir(req.params);
//    const id = req.params.id;
//    console.dir(req.query);
//    const answer = req.query.answer;
//    if (id == '1') {
//       if (answer == 'Canberra') {
//          res.send("Correct!")
//       }
//       else {
//          res.send("Incorrect!")
//       }
//    }
//    else if (id == '2') {
//       if (answer == 'Lenardo da Vinci') {
//          res.send("Correct!")
//       }
//       else {
//          res.send("Incorrect!")
//       }
//    }
//    else if (id == '3') {
//       if (answer == 'Jupiter') {
//          res.send("Correct!")
//       }
//       else {
//          res.send("Incorrect!")
//       }
//    }
//    else if (id == '4') {
//       if (answer == 'Nepal') {
//          res.send("Correct!")
//       }
//       else {
//          res.send("Incorrect!")
//       }
//    }
//    else if (id == '5') {
//       if (answer == 'Au') {
//          res.send("Correct!")
//       }
//       else {
//          res.send("Incorrect!")
//       }
//    }
//    else {
//       res.send("Invalid question number")
//    }
// });
// let inputQuestion = '';
// let inputAnswer = '';
// app.post('/addQ', (req: Request, res: Response) => {
//    const question = req.body.question;
//    const answer = req.body.answer;
//    inputQuestion = question;
//    inputAnswer = answer;
//    res.send(`Question: ${inputQuestion} Answer: ${inputAnswer}`);
// }); 
// app.get('/showQ', (req: Request, res: Response) => {
//    res.send(`Question: ${inputQuestion}, Answer: ${inputAnswer}`)
// });
//# sourceMappingURL=otherStuff.js.map