function noDataText() {
  const container = document.querySelector("body");
  const img = document.createElement("img");
  img.className = "noData";
  img.src = "텅.png";
  img.alt = "no data 사진";

  container.appendChild(img);
}

export default noDataText;
