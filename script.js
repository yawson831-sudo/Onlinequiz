const questions = [
{
question: "1. Simplify: 5 + 7",
options: ["10", "12", "14", "15"],
answer: "12"
},
{
question: "2. Solve: 8 × 6",
options: ["42", "48", "56", "64"],
answer: "48"
},
{
question: "3. What is 36 ÷ 6?",
options: ["4", "5", "6", "7"],
answer: "6"
},
{
question: "4. Solve: 15 - 9",
options: ["5", "6", "7", "8"],
answer: "6"
},
{
question: "5. Expand: 2(x + 3)",
options: ["2x + 3", "2x + 6", "x + 6", "2x + 9"],
answer: "2x + 6"
},
{
question: "6. Factorize: x² + 5x + 6",
options: ["(x+2)(x+3)", "(x+1)(x+6)", "(x+4)(x+2)", "(x+5)(x+1)"],
answer: "(x+2)(x+3)"
},
{
question: "7. What is 25% of 200?",
options: ["25", "40", "50", "60"],
answer: "50"
},
{
question: "8. Solve: 3²",
options: ["6", "9", "12", "18"],
answer: "9"
},
{
question: "9. Simplify: 4x + 3x",
options: ["7", "7x", "12x", "x"],
answer: "7x"
},
{
question: "10. Solve: 12²",
options: ["124", "144", "122", "132"],
answer: "144"
},
{
question: "11. Find the value of x: x + 7 = 12",
options: ["3", "4", "5", "6"],
answer: "5"
},
{
question: "12. Solve: 50 ÷ 5",
options: ["5", "10", "15", "20"],
answer: "10"
},
{
question: "13. What is 10% of 500?",
options: ["10", "25", "50", "100"],
answer: "50"
},
{
question: "14. Simplify: 9 + 11",
options: ["18", "19", "20", "21"],
answer: "20"
},
{
question: "15. Solve: 7 × 8",
options: ["54", "56", "58", "60"],
answer: "56"
},
{
question: "16. Solve: 81 ÷ 9",
options: ["8", "9", "10", "11"],
answer: "9"
},
{
question: "17. Expand: 3(x + 2)",
options: ["3x + 2", "3x + 6", "x + 6", "6x"],
answer: "3x + 6"
},
{
question: "18. Solve: 100 - 45",
options: ["45", "50", "55", "60"],
answer: "55"
},
{
question: "19. Find x: x - 4 = 10",
options: ["12", "13", "14", "15"],
answer: "14"
},
{
question: "20. What is ½ of 80?",
options: ["20", "30", "40", "50"],
answer: "40"
}
];

const quizContainer = document.getElementById("quiz-container");

questions.forEach((q, index) => {
quizContainer.innerHTML += `
<div class="question-box">
<h3>${q.question}</h3>

<div class="options">
${q.options.map(option => `
<label>
<input type="radio"
name="q${index}"
value="${option}">
${option}
</label>
`).join("")}
</div>
</div>
`;
});

document.getElementById("quizForm")
.addEventListener("submit", function(e){

e.preventDefault();

const studentName =
document.getElementById("studentName").value;

if(studentName.trim() === ""){
alert("Enter your full name");
return;
}

let score = 0;

for(let i = 0; i < questions.length; i++){

const selected =
document.querySelector(`input[name="q${i}"]:checked`);

if(!selected){
alert(`Answer Question ${i+1} before submitting.`);
return;
}

if(selected.value === questions[i].answer){
score++;
}
}

const resultMessage =
`📘 SHS 1 Maths Quiz Result

👤 Name: ${studentName}

✅ Score: ${score}/20

Sent from Famous Quiz`;

const phone = "233208333632";

const whatsappURL =
`https://wa.me/${phone}?text=${encodeURIComponent(resultMessage)}`;

window.open(whatsappURL, "_blank");

});
