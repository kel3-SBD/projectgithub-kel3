// Edit bagian ini saja kalau ada yang berubah.
// folder = nama direktori di repositori (harus sama persis, huruf kecil/besar berpengaruh)
const members = [
  {
    id: "Rasya",
    name: "Rasya Vikran Annadief",
    folder: "Rasya",
    desc: "Personal website Rasya, mahasiswa Teknik Informatika UIN Jakarta."
  },
  {
    id: "Akmal",
    name: "Rayhan Akmal Wibowo",
    folder: "Akmal",
    desc: "Personal website Rayhan, mahasiswa Teknik Informatika UIN Jakarta."
  },
  {
    id: "Fadli",
    name: "Fadli Ahmad Akbar",
    folder: "Fadli",
    desc: "Personal website Fadli, mahasiswa Teknik Informatika UIN Jakarta."
  }
];

const container = document.getElementById("slabs");

function createSlab(member) {
  const link = document.createElement("a");
  link.className = "slab";
  link.dataset.id = member.id;
  link.href = member.folder + "/";

  const initial = document.createElement("span");
  initial.className = "initial";
  initial.setAttribute("aria-hidden", "true");
  initial.textContent = member.name.charAt(0);

  const name = document.createElement("h2");
  name.className = "name";
  name.textContent = member.name;

  const desc = document.createElement("p");
  desc.className = "desc";
  desc.textContent = member.desc;

  const path = document.createElement("p");
  path.className = "path";
  path.textContent = "Folder: /" + member.folder;

  const open = document.createElement("span");
  open.className = "open";
  open.textContent = "Buka website";

  link.append(initial, name, desc, path, open);
  return link;
}

members.forEach((member) => container.appendChild(createSlab(member)));

// Navigasi keyboard: panah kiri/kanan (atau atas/bawah) pindah antar panel
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
