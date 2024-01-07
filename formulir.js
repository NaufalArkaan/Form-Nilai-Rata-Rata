var users = [{
    username: 'admin',
    password: 'admin',
    role: 'admin'
},
{
    username: 'teacher1',
    password: 'teacher1',
    role: 'teacher'
},
{
    username: 'student1',
    password: 'student1',
    role: 'student'
}
];

document.getElementById('loginForm').addEventListener('submit', function (e) {
e.preventDefault();

// Get input values
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;

// Check user credentials
var user = users.find(user => user.username === username && user.password === password);

if (user) {
    // Login success
    if (user.role === 'admin') {
        // Only admins can access the input form
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('inputContainer').style.display = 'block';
        document.getElementById('outputRole').textContent = 'Admin';
        alert('Welcome, Admin! You can now input student grades.');
    } else if (user.role === 'teacher') {
        // Only teachers can access the input form
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('inputContainer').style.display = 'block';
        document.getElementById('outputRole').textContent = 'Teacher';
        alert('Welcome, Teacher! You can now input student grades.');
    } else if (user.role === 'student') {
        // Students can only view the results, hide the input form and remove Reset button
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('outputContainer').style.display = 'block';
        document.getElementById('resetButton').style.display = 'none'; // Hide the Reset button
        document.getElementById('outputRole').textContent = 'Student';
        alert('Welcome, Student! You can now view your profile and grades.');
    }
} else {
    alert('Invalid username or password.');
}
});
document.getElementById('inputForm').addEventListener('submit', function (e) {
e.preventDefault();

// Get input values
var nama = document.getElementById('nama').value;
var kelas = document.getElementById('kelas').value;
var tugas = parseInt(document.getElementById('tugas').value);
var uts = parseInt(document.getElementById('uts').value);
var uas = parseInt(document.getElementById('uas').value);
var kehadiran = parseInt(document.getElementById('kehadiran').value);

// Calculate nilai akhir
var nilaiAkhir = (tugas + uts + uas) / 3;

// Calculate persentase nilai
var totalKehadiran = 16; // The total maximum score from all assignments and exams (e.g., 100 + 100 + 100)
var persentaseKehadiran = (kehadiran / totalKehadiran) * 100;

// Display the output container and hide the input container
document.getElementById('outputContainer').style.display = 'block';
document.getElementById('inputContainer').style.display = 'none';

// Update profile details with input values
document.getElementById('outputNama').textContent = nama;
document.getElementById('outputKelas').textContent = kelas;
document.getElementById('outputNilaiAkhir').textContent = nilaiAkhir.toFixed(2);
document.getElementById('outputPersentaseKehadiran').textContent = persentaseKehadiran.toFixed(2);

// Optional: Display nilai akhir and persentase nilai
alert('Nilai Akhir: ' + nilaiAkhir.toFixed(2) + '\nPersentase Nilai: ' + persentaseKehadiran.toFixed(2) +
    '%');
});

function resetForm() {
// Reset input form values
document.getElementById('inputForm').reset();

// Hide output container and display input container
document.getElementById('outputContainer').style.display = 'none';
document.getElementById('inputContainer').style.display = 'block';
}

function backToLogin() {
// Hide output container and display login container
document.getElementById('outputContainer').style.display = 'none';
document.getElementById('loginContainer').style.display = 'block';
}