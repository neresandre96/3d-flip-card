export function loadGettingStarted() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = `
    <main>
      <div class="content-container getting-started-container">
        <h1 class="getting-started">Getting Started</h1>
        <p class="externals npm-link">
          <a
            href="https://www.npmjs.com/package/3d-flip-card"
            target="_blank"
            class="external"
          >
            <img src="https://img.shields.io/npm/v/card-3d.svg" alt="NPM" />
          </a>
        </p>
        <h2>Install</h2>
        <pre class="pre">
              <code class="bash">
                  <span class="hl-0">npm</span>
                  <span class="hl-1"> </span>
                  <span class="hl-2">install</span>
                  <span class="hl-1"> </span>
                  <span class="hl-3">--save</span>
                  <span class="hl-1"> </span>
                  <span class="hl-2">3d-flip-card</span>
              </code>
              <button type="button">Copy</button>
          </pre>

        <h2>Usage</h2>
        <pre class="pre">
          <code class="tsx"><span class="hl-4">import</span><span class="hl-1"> </span><span class="hl-5">React</span><span class="hl-1">, { </span><span class="hl-5">Component</span><span class="hl-1"> } </span><span class="hl-4">from</span><span class="hl-1"> </span><span class="hl-2">&#39;react&#39;</span><br/><br/><span class="hl-4">import</span><span class="hl-1"> </span><span class="hl-5">MyComponent</span><span class="hl-1"> </span><span class="hl-4">from</span><span class="hl-1"> </span><span class="hl-2">&#39;3d-flip-card&#39;</span><br/><span class="hl-4">import</span><span class="hl-1"> </span><span class="hl-2">&#39;3d-flip-card/card-styles.css&#39;</span><br/><br/><span class="hl-3">class</span><span class="hl-1"> </span><span class="hl-6">Example</span><span class="hl-1"> </span><span class="hl-3">extends</span><span class="hl-1"> </span><span class="hl-6">Component</span><span class="hl-1"> {</span><br/><span class="hl-1">  </span><span class="hl-0">render</span><span class="hl-1">() {</span><br/><span class="hl-1">    </span><span class="hl-4">return</span><span class="hl-1"> </span><br/><span class="hl-1">    </span><span class="hl-7">&lt;</span><span class="hl-6">Card3D</span><br/><span class="hl-1">      </span><span class="hl-8">height</span><span class="hl-1">=</span><span class="hl-2">&quot;300px&quot;</span><br/><span class="hl-1">      </span><span class="hl-8">width</span><span class="hl-1">=</span><span class="hl-2">&quot;200px&quot;</span><br/><span class="hl-1">      </span><span class="hl-8">thickness</span><span class="hl-1">=</span><span class="hl-3">{</span><span class="hl-9">10</span><span class="hl-3">}</span><br/><span class="hl-1">      </span><span class="hl-8">rotationSpeed</span><span class="hl-1">=</span><span class="hl-3">{</span><span class="hl-9">10</span><span class="hl-3">}</span><br/><span class="hl-1">      </span><span class="hl-8">hoverToStop</span><span class="hl-1">=</span><span class="hl-3">{true}</span><br/><span class="hl-1">      </span><span class="hl-8">mode</span><span class="hl-1">=</span><span class="hl-2">&quot;clickToFlip&quot;</span><br/><span class="hl-1">      </span><span class="hl-8">leftColor</span><span class="hl-1">=</span><span class="hl-2">&quot;green&quot;</span><br/><span class="hl-1">      </span><span class="hl-8">rightColor</span><span class="hl-1">=</span><span class="hl-2">&quot;yellow&quot;</span><br/><span class="hl-1">    </span><span class="hl-7">&gt;</span><br/><span class="hl-1">      </span><span class="hl-7">&lt;</span><span class="hl-10">div</span><span class="hl-7">&gt;</span><span class="hl-1">Frente do Cartão</span><span class="hl-7">&lt;/</span><span class="hl-10">div</span><span class="hl-7">&gt;</span><br/><span class="hl-1">      </span><span class="hl-7">&lt;</span><span class="hl-10">div</span><span class="hl-7">&gt;</span><span class="hl-1">Verso do Cartão</span><span class="hl-7">&lt;/</span><span class="hl-10">div</span><span class="hl-7">&gt;</span><br/><span class="hl-1">    </span><span class="hl-7">&lt;/</span><span class="hl-6">Card3D</span><span class="hl-7">&gt;</span><br/><span class="hl-1">  }</span><br/><span class="hl-1">}</span>
          </code><button type="button">Copy</button></pre>

        <h2>Observations</h2>
        <p>
          The component expects exactly two children. Otherwise, a warning
          will be displayed in the console and the card will not be rendered.
          The properties rotationSpeed and hoverToStop have default values
          that can be changed as needed.
        </p>
        <h2>Contributing</h2>
        <p>
          Feel free to contribute with improvements and corrections! Open a
          pull request or create an issue to discuss your ideas.
        </p>
        <h2>License</h2>
        <p>
          MIT ©
          <a
            href="https://github.com/neresandre96"
            target="_blank"
            class="external external-license"
            >neresandre96</a
          >
        </p>
      </div>
    </main>
  `;
}
