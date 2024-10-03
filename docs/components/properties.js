export function loadProperties() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <main>
            <div class="content-container props-container">
                <h2 id="props">Props</h2>
                <p>The Card component accepts the following props:</p>
                <table>
                    <thead>
                    <tr>
                        <th>Prop</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><code>children</code></td>
                        <td><code>ReactNode[]</code></td>
                        <td>
                        The child elements of the card; must contain exactly two
                        elements.
                        </td>
                    </tr>
                    <tr>
                        <td><code>height</code></td>
                        <td><code>string</code></td>
                        <td>
                        The height of the card (can use units like '100px', '50%',
                        etc.).
                        </td>
                    </tr>
                    <tr>
                        <td><code>width</code></td>
                        <td><code>string</code></td>
                        <td>
                        The width of the card (can use units like '100px', '50%',
                        etc.).
                        </td>
                    </tr>
                    <tr>
                        <td><code>thickness</code></td>
                        <td><code>number</code></td>
                        <td>The thickness of the card in pixels.</td>
                    </tr>
                    <tr>
                        <td><code>rotationSpeed</code></td>
                        <td><code>number</code></td>
                        <td>
                        The rotation speed of the card in degrees per second. Default
                        is 0.
                        </td>
                    </tr>
                    <tr>
                        <td><code>hoverToStop</code></td>
                        <td><code>boolean</code></td>
                        <td>
                        Determines if the rotation should stop when hovering over the
                        card. Default is false.
                        </td>
                    </tr>
                    <tr>
                        <td><code>mode</code></td>
                        <td>&quot;dragToFlip&quot;<br/>&quot;clickToFlip&quot;</td>
                        <td> 
                            Drag controls the rotation axis. <br/> 
                            The card flips when clicked.
                        </td>
                    </tr>
                    <tr>
                        <td><code>leftColor</code></td>
                        <td><code>string</code></td>
                        <td>The color of the left side of the card.</td>
                    </tr>
                    <tr>
                        <td><code>rightColor</code></td>
                        <td><code>string</code></td>
                        <td>The color of the right side of the card.</td>
                    </tr>
                    </tbody>
                </table>

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
