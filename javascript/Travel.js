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
  var googleSearchURL =
    "https://www.google.com/search?q=" + encodeURIComponent(query);

  // 새 창에서 Google 검색을 엽니다.
  window.open(googleSearchURL, "_blank");
}
function addPlan() {
  var planInput = document.getElementById("planInput");
  var planText = planInput.value.trim();

  if (planText === "") {
    alert("여행 계획을 입력하세요.");
    return;
  }

  var planList = document.createElement("div");
  planList.textContent = planText;
  planList.classList.add("plan-item");
  document.querySelector(".left-content").appendChild(planList);

  planInput.value = "";
}
function minusPlan() {
  var planItems = document.querySelectorAll(".plan-item");

  // 여행 계획이 없는 경우
  if (planItems.length === 0) {
    alert("삭제할 여행 계획이 없습니다.");
    return;
  }

  // 마지막 여행 계획 삭제
  var lastPlan = planItems[planItems.length - 1];
  lastPlan.remove();
}
