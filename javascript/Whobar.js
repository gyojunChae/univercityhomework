function toggleMenu() {
  const navMenu = document.querySelector(".nav_menu");
  const navIcon = document.querySelector(".nav_icon");
  navMenu.classList.toggle("active");
  navIcon.classList.toggle("active");
}

function updateClock() {
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
  const clock = document.getElementById("clock");
  clock.textContent = timeString;

  // 시계의 위치를 조정합니다.
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const clockRect = clock.getBoundingClientRect();
  const clockHeight = clockRect.height;
  const windowHeight = window.innerHeight;

  if (scrollTop > windowHeight - clockHeight) {
    // 시계가 화면에 가득 찰 때까지 스크롤되었을 때
    clock.style.position = "fixed";
    clock.style.bottom = "0";
    clock.style.right = "0";
  } else {
    // 시계가 화면에 가득 차지 않았을 때
    clock.style.position = "absolute";
    clock.style.bottom = "";
    clock.style.right = "";
  }
}

// 매 초마다 시계 업데이트
setInterval(updateClock, 1000);

// 페이지 로드 시에도 시계 업데이트
updateClock();
