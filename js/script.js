// Data siswa yang sudah diurutkan A-Z
const students = [
    "Aen", "Aisy", "Alief", "Angga", "Aqila", "Arsyil", "Azka",
    "Bella", "Berlly",
    "Daniel", "Dean", "Diba",
    "Evelyn",
    "Fahad", "Fira", "Filza",
    "Ganesha", "Gavriel",
    "Hafiza", "Hasna", "Hajun",
    "Imron", "Irwan",
    "Jalfa", "Jasmine.H", "Jasmine.P", "Jelita",
    "Kim Gaon",
    "Naura", "Nowela",
    "Queen",
    "Radit", "Rasya", "Rayhan", "Rhean", "Ridho",
    "Shalsa", "Sofi",
    "Talita",
    "Zhafran"
];

// Fungsi untuk menampilkan daftar siswa
function renderStudents() {
    const container = document.getElementById('studentsContainer');
    container.innerHTML = '';
    
    students.forEach(student => {
        const card = document.createElement('div');
        card.className = 'student-card';
        
        // Tentukan ikon berdasarkan jenis kelamin
        let icon = 'fa-user';
        if (["Queen", "Diba", "Aqila", "Dean", "Talita", "Jelita", "Naura", 
             "Hasna", "Jasmine.P", "Hafiza", "Jasmine.H", "Evelyn", "Fira", 
             "Bella", "Jalfa", "Filza", "Aisy", "Nowela", "Shalsa", "Sofi"].includes(student)) {
            icon = 'fa-user';
        }
        
        card.innerHTML = `
            <div class="student-img"><i class="fas ${icon}"></i></div>
            <div class="student-info">
                <div class="student-name">${student}</div>
                <div class="student-nis">Kelas 6 Auriga</div>
                ${student === 'Zhafran' ? '<div class="student-nis">(Admin Website)</div>' : ''}
                ${student === 'Queen' ? '<div class="student-nis">(Ketua Kelas 6B)</div>' : ''}
                ${student === 'Radit' ? '<div class="student-nis">(Wakil Ketua Kelas 6B)</div>' : ''}
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Fungsi untuk menangani navigasi antar halaman
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Hapus kelas active dari semua link
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        
        // Tambahkan kelas active ke link yang diklik
        this.classList.add('active');
        
        // Sembunyikan semua halaman
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        
        // Tampilkan halaman yang sesuai
        const pageId = this.getAttribute('data-page');
        document.getElementById(pageId).classList.add('active');
        
        // Scroll ke atas
        window.scrollTo(0, 0);

        // Tutup menu mobile jika terbuka
        document.getElementById('mainNav').classList.remove('active');
    });
});

// Fungsi pencarian siswa
document.getElementById('search-student').addEventListener('keyup', function() {
    const searchText = this.value.toLowerCase();
    const studentCards = document.querySelectorAll('.student-card');
    
    studentCards.forEach(card => {
        const studentName = card.querySelector('.student-name').textContent.toLowerCase();
        if (studentName.includes(searchText)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Toggle menu mobile
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
mobileMenuBtn.addEventListener('click', () => {
    document.getElementById('mainNav').classList.toggle('active');
});

// Render students when page loads
window.addEventListener('load', () => {
    renderStudents();
});