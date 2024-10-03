function createChangelogSidebar() {
    return `
        <h2>Changelog</h2>
        <ul class="changelog-ul">
            <li class="changelog-li">
            <a href="./v0.1/index.html" class="changelog-a">v0.1</a>
            </li>
            <!-- <li><a href="./v0.2/index.html" class="a">v0.2</a></li>
                <li><a href="./v1.0/index.html" class="a">v1.0</a></li>
                <li><a href="./v1.1/index.html" class="a">v1.1</a></li>
                <li><a href="./v2.0/index.html" class="a">v2.0 - latest</a></li> -->
        </ul>
    `;
}

export function setupChangelog() {
    document.getElementById("changelog-sidebar").innerHTML = createChangelogSidebar();
}