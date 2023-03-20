const boxes = document.querySelectorAll(".bx"),
  img = document.querySelector(".img");

boxes.forEach((bx) => {
  bx.addEventListener("dragover", (e) => {
    e.preventDefault();
    bx.classList.add("active");
  });
  bx.addEventListener("dragleave", () => {
    bx.classList.remove("active");
  });

  bx.addEventListener("drop", () => {
    bx.appendChild(img);
    bx.classList.remove("active");
  });
});
