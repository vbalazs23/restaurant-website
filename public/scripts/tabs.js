function setupTabs() {
    document.querySelectorAll('.tabs-button').forEach(button => {
        button.addEventListener('click', () => {
            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tab-content[data-tab="${tabNumber}"]`)

            sideBar.querySelectorAll('.tabs-button').forEach(button => {
                button.classList.remove('active');
            });

            tabsContainer.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });

            button.classList.add('active');
            tabToActivate.classList.add('active');
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
})