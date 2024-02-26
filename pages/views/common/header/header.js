function createHeader() {
  const header = document.getElementById("header");

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "http://localhost:8080/views/common/header/styles.css";
  document.head.appendChild(link);

  const container = document.createElement("div");
  container.className = "container-box";
  header.appendChild(container);

  const logo = document.createElement("div");
  logo.className = "logo";
  const a = document.createElement("a");
  a.href = "#";
  const img = document.createElement("img");
  img.src = "http://localhost:8080/views/common/header/2STEP.png";
  img.alt = "로고";
  a.appendChild(img);
  logo.appendChild(a);
  container.appendChild(logo);

  const bottom = document.createElement("div");
  bottom.className = "list-container";
  container.appendChild(bottom);

  const nav = document.createElement("nav");
  bottom.appendChild(nav);

  const menu = document.createElement("ul");
  menu.className = "menu";
  nav.appendChild(menu);

  const menuItems = [
    "NEW",
    "BEST",
    "SALE",
    "|",
    "WOMEN",
    "MEN",
    "LIFE",
    "ACTIVE",
  ];
  menuItems.forEach((item) => {
    const li = document.createElement("li");
    if (li === "|") {
      li.textContent = item;
    } else {
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = item;
      li.appendChild(a);
    }
    menu.appendChild(li);
  });

  const userMenu = document.createElement("ul");
  userMenu.className = "user-menu";
  nav.appendChild(userMenu);

  const userMenuItems = ["LOGIN/JOIN", "CART(0)", "MYPAGE"];
  userMenuItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = item;
    li.appendChild(a);
    userMenu.appendChild(li);
  });
}

export default createHeader;
