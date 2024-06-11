function toggleMenu() {
  const navMenu = document.querySelector(".nav_menu");
  const navIcon = document.querySelector(".nav_icon");
  navMenu.classList.toggle("active");
  navIcon.classList.toggle("active");
}

function searchGoogle() {
  // 검색어 입력란에서 입력한 값을 가져옵니다.
  var query = document.getElementById("search-input").value;

  // Google 검색 URL을 생성합니다.
  var googleSearchURL = "https://www.google.com/search?q=" + encodeURIComponent(query);

  // 새 창에서 Google 검색을 엽니다.
  window.open(googleSearchURL, "_blank");
}
