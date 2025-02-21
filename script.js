function toggle_hamburger_menu_button_icon() {
  const menu = document.querySelector(
    ".webpage_hamburger_menu_button_icon_links"
  );
  const icon = document.querySelector(".webpage_hamburger_menu_button_icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("click", function (event) {
  const menu = document.querySelector(
    ".webpage_hamburger_menu_button_icon_links"
  );
  const icon = document.querySelector(".webpage_hamburger_menu_button_icon");
  const isClickInsideMenu = menu.contains(event.target);
  const isClickInsideIcon = icon.contains(event.target);

  if (
    !isClickInsideMenu &&
    !isClickInsideIcon &&
    menu.classList.contains("open")
  ) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});
