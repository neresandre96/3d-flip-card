function createFooter() {
    return `
            <a class="external git-hub-link" href='https://github.com/neresandre96/card-3d' target='_blank'>https://github.com/neresandre96/card-3d</a>
    `;
}

export function setupFooter() {
    document.getElementById("footer").innerHTML = createFooter();
}