function createHeader() {
    return `
        <h1 class="title">
            <a class="title-link" href="#/getting-started">3d-flip-card documentation</a>
        </h1>

    `;
}

export function setupHeader() {
    document.getElementById("header").innerHTML = createHeader();
}
