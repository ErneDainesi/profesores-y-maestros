const navBar = document.querySelector("#navbarNavAltMarkup");

navBar.addEventListener("click", e => {
	if (e.target.classList.contains("nav-link") && navBar.classList.contains("show") && screen.width <= 992) {
		const offCanvasBackdrop = document.querySelector(".offcanvas-backdrop");
		const body = document.querySelector("body");
		body.removeAttribute("style");
		navBar.style.visibility = "hidden";
		navBar.setAttribute("aria-hidden", true);
		navBar.removeAttribute("aria-modal");
		navBar.removeAttribute("role");
		offCanvasBackdrop.remove();
		navBar.classList.remove("show");
	}
});

if (screen.width >= 993) {
	navBar.style.visibility = "visible";
}
