export function loadOverview() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <main>
            <div class="content-container overview-container">
                <h2 id="overview">Overview</h2>
                <h2 id="interaction-mode" >Interaction Mode</h2>
                <p>
                    You can change the interaction mode to either clickToFlip or
                    dragToFlip:
                </p>
                <p>
                    clickToFlip: The card flips when clicked. <br/>
                    dragToFlip: Drag controls the rotation axis.
                </p>
                <h2  id="flip-animation">Flip Animation</h2>
                <p>
                    The card flips with a smooth animation when mode is dragToFlip. You
                    can adjust the rotation speed using the rotationSpeed prop.
                </p>
                <h2 id="hover-to-stop">Hover to Stop</h2>
                <p>
                    Control the hover behavior when mode is dragToFlip and has flip
                    animation:
                </p>
                <p>
                    hoverToStop={true}: Stops rotation when hovering over the card. <br/>
                    hoverToStop={false}: The card continues to rotate while hovered.
                </p>
                <h2 id="color-properties">Color Properties</h2>
                <p>Customize the card border colors:</p>
                <p>
                    leftColor=&quot;#ff5733&quot; // Custom left color<br />
                    rightColor=&quot;#33c1ff&quot; // Custom right color
                </p>
                <br />
            </div>
        </main>
    `;
}
