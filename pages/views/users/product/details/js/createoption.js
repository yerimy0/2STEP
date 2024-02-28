function createOption(el, product) {
  const sizeOption = el.querySelector(".product-options .size-option");
  const colorOption = el.querySelector(".product-options .color-option");

  product.size.forEach((size) => {
    const option = document.createElement("option");
    option.value = size;
    option.innerHTML = `${size}`;
    sizeOption.appendChild(option);
  });

  product.color.forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerHTML = `${color}`;
    colorOption.appendChild(option);
  });
}
export default createOption;
