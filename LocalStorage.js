const StudentNameInput = document.getElementById("student-name");
const StudentIdInput = document.getElementById("student-id");
const AddBtn = document.getElementById("add-btn");

const STUDENT = []
console.log(STUDENT);

AddBtn.addEventListener("click",()=>{
    const StudentName = StudentNameInput.Value;
    const StudentId = StudentIdInput.Value;
    STUDENT.push({
        name:StudentName,
        id:StudentId,
    });
    console.log(STUDENT);
});

