// memilih semua class panel dengan selector
const panels = document.querySelectorAll(".panel");

// menampilkan class active pada saat di klik
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

//menutup class active yg terbuka pada saat klik konten lain
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
