// Navbar JavaScript
function toggleMenu() {
  const navMenu = document.querySelector(".nav_menu");
  const navIcon = document.querySelector(".nav_icon");
  navMenu.classList.toggle("active");
  navIcon.classList.toggle("active");
}

// 시계 업데이트 함수
function updateClock() {
  const clock = document.getElementById("clock");

  const now = new Date();
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = daysOfWeek[now.getDay()];
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  let ampm = "AM";
  let displayHours = hours;

  if (hours >= 12) {
    ampm = "PM";
    displayHours = hours % 12;
    if (displayHours === 0) {
      displayHours = 12;
    }
  }

  const timeString = `${year}-${month}-${day} (${dayOfWeek}) ${displayHours}:${minutes}:${seconds} ${ampm}`;
  clock.textContent = timeString;

  // 시계의 위치를 조정합니다.
  const clockRect = clock.getBoundingClientRect();
  const clockHeight = clockRect.height;
  const maxTop = window.innerHeight - clockHeight - 20; // 20px 여백을 남깁니다.
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > maxTop) {
    // 스크롤 위치가 최대 상단 위치를 넘어서면 시계를 고정합니다.
    clock.style.position = "fixed";
    clock.style.top = `${maxTop}px`;
  } else {
    // 스크롤 위치가 최대 상단 위치 이하인 경우 시계를 초기 위치로 설정합니다.
    clock.style.position = "absolute";
    clock.style.top = "";
  }
}

// 매 초마다 시계 업데이트
setInterval(updateClock, 1000);

// 페이지 로드 시에도 시계 업데이트
updateClock();

function goToHomePage() {
  window.location.href = "http://127.0.0.1:5500/html/Btn.html";
}
