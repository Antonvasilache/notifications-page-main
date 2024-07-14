const markReadButton = document.querySelector(".header-read");
const notifications = document.querySelectorAll(".notification");
const notificationsNumber = document.querySelector(".notifications-number");
const unreadDots = document.querySelectorAll(".unread-dot");

markReadButton.addEventListener("click", () => {
  notifications.forEach((notification) =>
    notification.classList.remove("unread")
  );

  unreadDots.forEach((dot) => dot.classList.add("hidden"));

  notificationsNumber.textContent = "0";
});
