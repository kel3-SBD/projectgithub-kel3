// Navigasi keyboard: panah kiri/kanan (atau atas/bawah) pindah antar panel.
// Nama dan tautan ada di index.html, jadi halaman tetap lengkap tanpa file ini.
const container = document.getElementById("slabs");

container.addEventListener("keydown", (event) => {
  const slabs = Array.from(container.querySelectorAll(".slab"));
  const index = slabs.indexOf(document.activeElement);
  if (index === -1) return;

  let next = null;
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    next = slabs[(index + 1) % slabs.length];
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    next = slabs[(index - 1 + slabs.length) % slabs.length];
  }

  if (next) {
    event.preventDefault();
    next.focus();
  }
});
