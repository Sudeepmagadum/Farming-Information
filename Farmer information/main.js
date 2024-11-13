const accountNav = document.getElementById("accountNav");
const dropdownMenu = document.getElementById("dropdownMenu");

accountNav.addEventListener("mouseover", () => {
  dropdownMenu.style.display = "block";
});

accountNav.addEventListener("mouseout", () => {
  dropdownMenu.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const contactLink = document.querySelector('a[href="#contactFooter"]');
  contactLink.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#contactFooter").scrollIntoView({
      behavior: "smooth",
    });
  });
});
