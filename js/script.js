// toggle class active
const navbarNav = document.querySelector
('.navbar .navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').
onclick = ( ) => {
    navbarNav.classList.toggle('active')
}

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector
('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target)&& !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".dpm-img, .content");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => {
        observer.observe(element);
    });
});

// Menambahkan event listener pada seluruh tombol "Baca Selengkapnya"
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".btn-primary");

    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Halaman berita sedang dalam pengembangan!");
        });
    });
});

