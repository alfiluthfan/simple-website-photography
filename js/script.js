// Togggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika humburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const navbar = document.querySelector(".navbar");

// Tambahkan event listener untuk peristiwa scroll
window.addEventListener("scroll", () => {
  // Periksa posisi scroll
  if (window.scrollY > 0) {
    // Jika posisi scroll lebih dari 0, tambahkan kelas 'scrolled'
    navbar.classList.add("scrolled");
  } else {
    // Jika posisi scroll kembali ke atas, hapus kelas 'scrolled'
    navbar.classList.remove("scrolled");
  }
});

// Validate Form
const submitButton = document.getElementById("submitButton");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const datetime = document.getElementById("datetime");
const seats = document.getElementById("seats");

submitButton.addEventListener("click", function (event) {
  if (name.value.trim() === "") {
    event.preventDefault();
    alert("Please enter your name.");
    return;
  }
  if (phone.value.trim() === "") {
    event.preventDefault();
    alert("Please enter your phone.");
    return;
  }
  if (datetime.value.trim() === "") {
    event.preventDefault();
    alert("Please input the Date&Time.");
    return;
  }
  if (seats.value.trim() === "") {
    event.preventDefault();
    alert("Please input the number of seats.");
    return;
  }
  event.preventDefault();
  popup.classList.add("show-popup");
  setTimeout(function () {
    popup.classList.remove("show-popup");
  }, 3000);
});

// Mendapatkan elemen input tanggal
var datetimeInput = document.getElementById("datetime");

// Mendaftar event listener untuk input tanggal
datetimeInput.addEventListener("input", function () {
  // Mendapatkan nilai tanggal yang dimasukkan oleh pengguna
  var dateValue = new Date(datetimeInput.value);

  // Mendapatkan tanggal hari ini
  var today = new Date();

  // Mengatur tanggal besok
  var tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  // Menyamakan jam, menit, detik, dan milidetik dengan nol untuk tanggal besok
  tomorrow.setHours(0, 0, 0, 0);

  if (dateValue < tomorrow) {
    // Jika tanggal yang dimasukkan adalah tanggal sebelumnya atau hari ini, atur nilai input tanggal ke tanggal besok
    datetimeInput.value = tomorrow.toISOString().slice(0, 10);
  }
});

var slideIndex = 0;
    showSlides();

    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 2000); // Ubah 2000 menjadi durasi yang diinginkan antara perpindahan foto dalam milidetik
    }

    
      var slideIndex = 0;
      showSlides();

      function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 2000); // Change 2000 to the desired duration between slide transitions in milliseconds
      }
  