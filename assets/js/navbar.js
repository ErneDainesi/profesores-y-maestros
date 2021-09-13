const navBar = document.querySelector("#navbarNavAltMarkup");

const closeMobileNavbar = () => {
	const offCanvasBackdrop = document.querySelector(".offcanvas-backdrop");
	const body = document.querySelector("body");
	body.removeAttribute("style");
	navBar.style.visibility = "hidden";
	navBar.setAttribute("aria-hidden", true);
	navBar.removeAttribute("aria-modal");
	navBar.removeAttribute("role");
	offCanvasBackdrop.remove();
	navBar.classList.remove("show");
};

const changeSelectedNavLink = navLink => {
	const prevSelectedNavLink = document.querySelector(".selected");
	prevSelectedNavLink.classList.remove("selected");
	navLink.classList.add("selected");
};

navBar.addEventListener("click", e => {
	const target = e.target;
	if (target.classList.contains("nav-link") && navBar.classList.contains("show") && screen.width <= 992) {
		closeMobileNavbar();
	} else if (screen.width > 992 && !target.classList.contains("selected")) {
		changeSelectedNavLink(target);
	}
});

if (screen.width >= 993) {
	navBar.style.visibility = "visible";
}
