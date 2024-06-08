document.addEventListener("DOMContentLoaded", function () {
  const monthYear = document.querySelector(".month-year");
  const daysContainer = document.querySelector(".days");
  const prevMonthButton = document.querySelector(".prev-month");
  const nextMonthButton = document.querySelector(".next-month");

  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  const today = new Date().getDate(); // 현재 날짜

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function renderCalendar(month, year) {
    monthYear.textContent = `${months[month]} ${year}`;
    daysContainer.innerHTML = "";

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      const emptyDiv = document.createElement("div");
      emptyDiv.classList.add("inactive");
      daysContainer.appendChild(emptyDiv);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayDiv = document.createElement("div");
      dayDiv.textContent = i;

      // 현재 날짜에 클래스 추가
      if (
        i === today &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear()
      ) {
        dayDiv.classList.add("current-day");
      }

      daysContainer.appendChild(dayDiv);
    }

    const totalCells = firstDay + daysInMonth;
    const rows = Math.ceil(totalCells / 7);

    for (let i = totalCells; i < rows * 7; i++) {
      const emptyDiv = document.createElement("div");
      emptyDiv.classList.add("inactive");
      daysContainer.appendChild(emptyDiv);
    }
  }

  prevMonthButton.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
  });

  nextMonthButton.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
  });

  renderCalendar(currentMonth, currentYear);
});
