let topBannerImageIdx = 0;
let eventBannerImagesIdx = 0;
//예시
const images = [
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160909_245%2Fvtotv93_1473393461771rMdCp_JPEG%2FNIKE-ZOOM-PEGASUS-92-844652_001_C_PREM.jpg&type=sc960_832",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAyMDEyMjZfMjI3%2FMDAxNjA4OTA5OTk2MjEw.jL2RkhIldE52qSQXF5XHya_Sv3CMPeZLS1ymS2fHiDEg.uzstdGDkhaBEInSX_3HmvPxjmjPRCxOBXsfMQvJlzRwg.JPEG%2FIAXHFt3DRwthCar63bqLg-XZ87_M.jpg&type=sc960_832",
  "https://qi-o.qoo10cdn.com/goods_image_big/9/8/2/4/11602479824_l.jpg",
];

const eventImages = [
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA0MTBfMjUw%2FMDAxNTg2NDc3MTI2ODYx.pubtznHS1ZgxyTZgbf_sZcskNzYkwQJaby7-0pLuOCIg.4la6BlPeBchplo88yWwxDfFQfCjevIywSsPuwJ3ZDjsg.PNG.kybunswitzerland%2F%25BB%25E7%25BF%25AC%25C0%25CC%25BA%25A5%25C6%25AE_%25B4%25E7%25C3%25B7%25C8%25C4%25B1%25E2.png&type=sc960_832",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA0MTdfMTYy%2FMDAxNTg3MDg3ODY2NDY1.S9_IgaaGwyXrHpdoPri-unBidnT4hTTYi3GRn_6tf-Ug.EMaknTYhpBASeVh-Vlnc_k7jbi5oR0-TKoCDMi02b7gg.PNG.kybunswitzerland%2F1%25BF%25F9_%25BD%25E6%25B3%25D7%25C0%25CF.png&type=sc960_832",
];

const weeklyImage = [
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA0MTZfMjkw%2FMDAxNTU1Mzk2NDEyODc4.kBmZBvoFi1vUVf07vl-rqIKqAAWoAIRTDM-7qxPjdAwg.2tGrfZzUFXbthRw4FacPnqGvsqvaB_R-ZlEjVztdodog.JPEG.wash5287%2F%25C2%25F7%25B7%25AE%25B9%25F8%25C8%25A3%25C0%25CC%25BA%25A5%25C6%25AE%25C6%25E4%25C0%25CC%25C1%25F6__20190416.jpg&type=sc960_832",
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
