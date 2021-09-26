document.addEventListener('click', (e) => {
    isDropDownButton = e.target.matches("[data-dropdown-button]");
    const currentDropdown = e.target.closest("[data-dropdown]");

    console.log(currentDropdown)
    /* If click is inside the dropdown, then do nothing and just returns */
    if (!isDropDownButton &&  currentDropdown !== null) return;

    /* If menu clicked, then toggle the active class */
    if (isDropDownButton && currentDropdown !== null) {
        currentDropdown.classList.toggle("active");
    }

    /* Closes all other opend dropdowns, except we just clicked */
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove("active");
    })

})