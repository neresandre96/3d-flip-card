import { setupHeader } from './components/header.js';
import { setupFooter } from './components/footer.js';
import { setupPageNavigation } from './components/pageNavigationSidebar.js';
import { setupChangelog } from './components/changelogSidebar.js';
import { setupRoutes } from './components/routerController.js';

function initializeApp() {
    setupHeader();
    setupPageNavigation();
    setupChangelog();
    setupFooter();
    setupRoutes();
}

document.addEventListener("scroll", () => {
    const changelogSidebar = document.querySelector('.changelog-sidebar');
    const navigationSidebar = document.querySelector('.navigation-sidebar');
    
    if (window.scrollY > 50) { 
        if (changelogSidebar) {
            changelogSidebar.style.top = '1.5rem';
        }

        if (navigationSidebar) {
            navigationSidebar.style.top = '1.5rem';
        }
    } else {
        if (changelogSidebar) {
            changelogSidebar.style.top = '7rem';
        }

        if (navigationSidebar) {
            navigationSidebar.style.top = '7rem';
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    initializeApp();
});
