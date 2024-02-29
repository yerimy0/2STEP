let topBannerImageIdx = 0;
let eventBannerImagesIdx = 0;
//예시
const images = [
  "https://i.pinimg.com/originals/0d/be/18/0dbe18421a5230e8129a8f605deb61a4.jpg",
  "https://i.pinimg.com/originals/d1/26/8f/d1268f371c94a120b18a580e364f9d9b.png",
  "https://ecimg.cafe24img.com/pg90b05313110010/brooksrunning/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/b879ca327dc52ccb1cbdcbbfd0d8ee13.jpg",
];

const eventImages = [
  "https://shoerio7882.cafe24.com/shoerio/main/mainEventBnn_M4.jpg",
  "https://shoerio7882.cafe24.com/shoerio/main/mainEventBnn_M1.jpg",
];

const weeklyImage = [
  "https://shunishuu.cafe24.com/morenvyimg/1+1J.jpg",
];

const weeklyBestBannerImage = document.getElementById("weeklyBestBannerImage");
weeklyBestBannerImage.src = weeklyImage[0];

function changeImage() {
  const topBannerImage = document.getElementById("bannerImage");
  const eventBannerImage = document.getElementById("eventBannerImage");

  topBannerImage.src = images[topBannerImageIdx];
  eventBannerImage.src = eventImages[eventBannerImagesIdx];

  topBannerImageIdx = (topBannerImageIdx + 1) % images.length;
  eventBannerImagesIdx = (eventBannerImagesIdx + 1) % eventImages.length;
}

changeImage();

setInterval(changeImage, 4000);
