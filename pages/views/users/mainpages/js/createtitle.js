//Title Text

function CreateTitle(titleData, id) {
  const popularText = document.querySelector(
    `#productBanner${id} .popular-text`
  );

  const title = document.createElement("p");
  const subTitle = document.createElement("p");

  title.classList.add("title-class");
  subTitle.classList.add("subtitle-class");

  title.innerHTML = `<a href = http://localhost:8080/views/users/product/list/list.html?category=${titleData.state}>${titleData.title}<a/>`;
  subTitle.innerHTML = `${titleData.subTitle}`;

  popularText.appendChild(title);
  popularText.appendChild(subTitle);
}

export default CreateTitle;
