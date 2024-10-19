// Sample student data
const students = [
    { name: 'Bhavana', batch: '2021', academic: 85, hackathon: 2, papers: 3, assistance: 5 },
    { name: 'Pranavi', batch: '2021', academic: 90, hackathon: 3, papers: 2, assistance: 4 },
    { name: 'Shalini', batch: '2020', academic: 88, hackathon: 4, papers: 1, assistance: 3 },
    { name: 'Deepu', batch: '2022', academic: 82, hackathon: 2, papers: 4, assistance: 2 },
    { name: 'Vani', batch: '2020', academic: 82, hackathon: 2, papers: 4, assistance: 4 },
    { name: 'Hani', batch: '2022', academic: 81, hackathon: 2, papers: 4, assistance: 5 },
    { name: 'Sony', batch: '2021', academic: 82, hackathon: 3, papers: 6, assistance: 2 },
    
];

// Weight factors for different criteria
const weights = {
    academic: 0.5,
    hackathon: 0.2,
    papers: 0.2,
    assistance: 0.1,
};

// Function to calculate total score based on weights
function calculateTotalScore(student) {
    return (student.academic * weights.academic) +
           (student.hackathon * weights.hackathon) +
           (student.papers * weights.papers) +
           (student.assistance * weights.assistance);
}

// Function to render the student table
function renderTable() {
    const tableBody = document.querySelector('#studentTable tbody');
    tableBody.innerHTML = ''; // Clear the table

    // Sort students based on their total score
    const sortedStudents = students.map(student => {
        return {
            ...student,
            totalScore: calculateTotalScore(student)
        };
    }).sort((a, b) => b.totalScore - a.totalScore);

    // Render top 3 students
    sortedStudents.slice(0, 3).forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.batch}</td>
            <td>${student.academic}</td>
            <td>${student.hackathon}</td>
            <td>${student.papers}</td>
            <td>${student.assistance}</td>
            <td>${student.totalScore.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Initial rendering of the table
renderTable();

