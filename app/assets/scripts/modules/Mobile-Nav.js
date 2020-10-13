class MobileNav {
  constructor() {
    this.NavMobile = document.querySelector(".nav__menu--mobile");
    this.closeBtn = document.querySelector(".close_btn");
    this.menuBtn = document.querySelector(".nav__menu-icon");
    this.mobileEvent();
  }
  mobileEvent() {
    this.menuBtn.addEventListener("click", (e) => {
      this.NavMobile.classList.add("nav__menu--mobile--open");
      document.body.style.overflow = "hidden";
    });

    this.closeBtn.addEventListener("click", () => {
      this.NavMobile.classList.remove("nav__menu--mobile--open");
      document.body.style.overflow = "auto";
    });
  }
}

export default MobileNav;
