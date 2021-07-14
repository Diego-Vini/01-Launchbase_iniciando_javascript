/*
- Continuação do arquivo 14-estrutura_de_repeticao
- Trabalhando com boolean
*/

const classA = [
    {
        name: "Diego",
        grade: 9.8
    },
    {
        name: "Vinicius",
        grade: 10
    },
    {
        name: "Matheus",
        grade: 2
    }
];

const classB = [
    {
        name: "Carlos",
        grade: 3
    },
    {
        name: "Rafael",
        grade: 6
    },
    {
        name: "Marta",
        grade: 2
    },
    {
        name: "Marcos",
        grade: 10
    }
];

function calculateAvarege(students) {
    let sum = 0;
    
    for (let i = 0; i < students.length; i += 1) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length;
    return average;
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average}, Congratulations`)
    } else {
        console.log(`${turma} average: ${average}. Is not good`)
    };
}

function markAsFlunked(student) {
    student.flunked = false;
    
    if (student.grade < 5) {
        student.flunked = true;
    }
}

function sendMessageflunked(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} flunked`)
    }
}

function studentsflunked(students) {
    for (let student of students) {
        
        console.log(student);
        markAsFlunked(student);
        sendMessageflunked(student);
    }
}

const averageTurmaA = calculateAvarege(classA);
const averageTurmaB = calculateAvarege(classB);

sendMessage(averageTurmaA, "ClassA");
sendMessage(averageTurmaB, "ClassB");

studentsflunked(classA);
studentsflunked(classB);


