// Sample data only - these are fictional students, not real people.
const students = [
    {
        name: "Sample Student One",
        rollNumber: "1",
        course: "Software Engineering",
        email: "student1@example.com",
        phone: "000-000-0001",
        percentage: 100,
        linkedin: "https://www.linkedin.com/",
        address: "Address of student1"
    },
    {
        name: "Sample Student Two",
        rollNumber: "2",
        course: "Cyber Security",
        email: "student2@example.com",
        phone: "000-000-0002",
        percentage: 95,
        linkedin: "https://www.linkedin.com/",
        address: "Address of student2"
    },
    {
        name: "Sample Student Three",
        rollNumber: "3",
        course: "Business Information Technology",
        email: "student3@example.com",
        phone: "000-000-0003",
        percentage: 98,
        linkedin: "https://www.linkedin.com/",
        address: "Address of student3"
    }
];

function searchStudent() {
    const input = document.getElementById('search-input').value.trim().toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('show');

    if (!input) {
        resultDiv.textContent = "Please enter a roll number.";
        return;
    }

    const result = students.find(student => 
        student.rollNumber.toLowerCase() === input
    );

    if (result) {
        resultDiv.innerHTML = `
            <table class="student-table">
                <tr><th>Name</th><td>${result.name}</td></tr>
                <tr><th>Roll Number</th><td>${result.rollNumber}</td></tr>
                <tr><th>Course</th><td>${result.course}</td></tr>
                <tr><th>Email</th><td>${result.email}</td></tr>
                <tr><th>Phone</th><td>${result.phone}</td></tr>
                <tr><th>Last Year Percentage</th><td>${result.percentage}%</td></tr>
                <tr><th>LinkedIn</th><td><a href="${result.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></td></tr>
                <tr><th>Address</th><td>${result.address}</td></tr>
            </table>
        `;
        resultDiv.classList.add('show');
    } else {
        resultDiv.textContent = `No student found with roll number "${input}".`;
    }
}

// Search when Enter is pressed in the input box
document.getElementById('search-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') searchStudent();
});
