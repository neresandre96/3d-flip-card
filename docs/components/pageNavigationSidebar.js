function initSidebarNavigation() {
  document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          const hash = this.getAttribute('href');

          if (hash.startsWith('#') && !hash.startsWith('#/')) {
              const sectionId = hash.substring(1);
              const target = document.getElementById(sectionId);

              if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
              }
          } else if (hash.startsWith('#/')) {
              window.location.href = hash;
          }
      });
  });
}

function initDropdown() {
  const guideLink = document.querySelector(".page-navigation-li > .page-navigation-a");
  const propertiesLink = document.querySelector(".page-navigation-li-sub > .page-navigation-a[href='#properties']");
  const dropdown = document.querySelector(".dropdown");
  const dropdownIcon = document.querySelector(".dropdown-icon");
  const propertiesDropdown = document.querySelector(".sub-dropdown");

  if (guideLink && dropdown) {
      guideLink.addEventListener("click", function (event) {
          event.preventDefault();

          dropdown.classList.toggle('show');

          if (dropdown.classList.contains('show')) {
              dropdownIcon.classList.remove('collapsed');
              dropdownIcon.classList.add('expanded');
          } else {
              dropdownIcon.classList.remove('expanded');
              dropdownIcon.classList.add('collapsed');
          }
      });
  }

  if (propertiesLink && propertiesDropdown) {
      propertiesLink.addEventListener("click", function (event) {
          event.preventDefault();

          propertiesDropdown.classList.toggle('show');

          const propertiesDropdownIcon = propertiesLink.querySelector('.dropdown-icon');
          if (propertiesDropdown.classList.contains('show')) {
              propertiesDropdownIcon.classList.remove('collapsed');
              propertiesDropdownIcon.classList.add('expanded');
          } else {
              propertiesDropdownIcon.classList.remove('expanded');
              propertiesDropdownIcon.classList.add('collapsed');
          }

          setTimeout(() => {
              window.location.href = '#/properties';
          }, 50);
      });
  }
}

function createPageNavigationSidebar() {
  return `
      <ul class="page-navigation-ul">
          <li class="page-navigation-li">
              <a class="page-navigation-a nav-section ">
                  Guide
                  <svg class="dropdown-icon collapsed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 550" height="20" width="20" fill="white">
                      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                  </svg>
              </a>
              <ul class="dropdown">
                  <li class="page-navigation-li-sub">
                      <a href="#/overview" class="page-navigation-a nav-button">Overview</a>
                  </li>
                  <li class="page-navigation-li-sub">
                      <a href="#/getting-started" class="page-navigation-a nav-link nav-button">Getting Started</a>
                  </li>
                  <li class="page-navigation-li-sub">
                      <a href="#properties" class="page-navigation-a nav-link  nav-button">Properties
                          <svg class="dropdown-icon collapsed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 550" height="20" width="20" fill="white">
                              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                          </svg>
                      </a>
                      <ul class="sub-dropdown">
                          <li class="page-navigation-li-sub">
                              <a href="#interaction-mode" class="page-navigation-a nav-link  nav-button">Interaction Mode</a>
                          </li>
                          <li class="page-navigation-li-sub">
                              <a href="#flip-animation" class="page-navigation-a nav-link  nav-button ">Flip Animation</a>
                          </li>
                          <li class="page-navigation-li-sub">
                              <a href="#hover-to-stop" class="page-navigation-a nav-link  nav-button">Hover to Stop</a>
                          </li>
                          <li class="page-navigation-li-sub">
                              <a href="#color-properties" class="page-navigation-a nav-link  nav-button">Color Properties</a>
                          </li>
                      </ul>
                  </li>
              </ul>
          </li>

          <li class="page-navigation-li">
              <a href="https://neresandre96.github.io/3d-flip-card-demo/" target="_blank" class="page-navigation-a page-navigation-a-bottom nav-section ">Demo</a>
          </li>
      </ul>
  `;
}

export function setupPageNavigation() {
  const sidebar = createPageNavigationSidebar();
  document.getElementById("navigation-sidebar").innerHTML = sidebar;
  initDropdown();
  initSidebarNavigation();
}
