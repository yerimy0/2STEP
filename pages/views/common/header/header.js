function createHeader() {
  const header = document.getElementById("header");

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "/views/common/header/styles.css";
  document.head.appendChild(link);

  const container = document.createElement("div");
  container.className = "container-box";
  header.appendChild(container);

  const logo = document.createElement("div");
  logo.className = "logo";
  const a = document.createElement("a");
  a.href = "/views/users/mainpages/mainpage.html";
  const img = document.createElement("img");
  img.src = "/views/common/header/2STEP.png";
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
    if (item === "|") {
      li.textContent = item;
    } else {
      const a = document.createElement("a");
      a.href = `/views/users/product/list/list.html?category=${item}`;
      a.textContent = item;
      li.appendChild(a);
    }
    menu.appendChild(li);
  });

  const userMenu = document.createElement("ul");
  userMenu.className = "user-menu";
  nav.appendChild(userMenu);

  let userMenuItems = ["LOGIN", "JOIN", "CART", "MYPAGE"];

  let loginSuccess = new URLSearchParams(window.location.search).get("login");

  if (loginSuccess === "true") {
    userMenuItems = ["LOGOUT", "CART", "MYPAGE"];
  }

  userMenuItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = userMenuCreate(item, loginSuccess);
    a.textContent = item;
    li.appendChild(a);
    userMenu.appendChild(li);
  });
}

function userMenuCreate(item, loginSuccess) {
  if (item === "LOGIN") {
    return `/views/users/loginpages/login.html?login=false`;
  }
  if (item === "LOGOUT") {
    return `/views/users/mainpages/mainpage.html?login=false`;
  }
  if (item === "JOIN") {
    return `/views/users/signuppages/signup.html?login=false`;
  }
  if (item === "CART") {
    return `/views/users/cart/cart.html?login=${loginSuccess}`;
  }
  if (item === "MYPAGE") {
    return;
  }
}

export default createHeader;
