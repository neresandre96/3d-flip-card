import { loadGettingStarted } from './gettingStarted.js';
import { loadProperties } from './properties.js';
import { loadOverview } from './overview.js';

export function setupRoutes() {
    const routes = {
        '#/getting-started': loadGettingStarted,
        '#/properties': loadProperties,
        '#/overview': loadOverview
    };

    loadRoute(window.location.hash || '#/getting-started');

    window.addEventListener('hashchange', () => {
        loadRoute(window.location.hash);
    });

    function loadRoute(hash) {
        const route = routes[hash] || routes['#/getting-started'];
        if (typeof route === 'function') {
            route();
        }
    }
}