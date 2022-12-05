const center = document.querySelector(".center");

const createLine = ({ x, y }) => {
  const { x: mainX, y: mainY } = center.getBoundingClientRect();
  const rib1 = y - mainY;
  const rib2 = x - mainX;
  const lineWidth = Math.sqrt(Math.pow(+rib1, 2) + Math.pow(+rib2, 2));
  const radiant = Math.atan2(rib1, rib2);
  console.log(x, y);
  console.log(mainX, mainY);
  console.log(lineWidth, "#");

  // creating element
  const line = document.createElement("div");
  const randomHNumber = Math.floor(Math.random() * 100) + 200;
  line.style.backgroundColor = `hsl(${randomHNumber}deg 90% 58%)`;
  line.style.width = `${lineWidth}px`;
  line.classList.add("line");
  line.style.rotate = `${radiant}rad`;
  center.append(line);
};

window.addEventListener("mousedown", () => {
  window.addEventListener("mousemove", createLine);
});

window.addEventListener("mouseup", () => {
  window.removeEventListener("mousemove", createLine);
});
