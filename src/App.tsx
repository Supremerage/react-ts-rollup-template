import React from "react";
import reactUrl from "./assets/react.svg";
import dockerUrl from "./assets/docker.svg";
import rollupUrl from "./assets/rollup.svg";
import typescriptUrl from "./assets/typescript.svg";

export const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <img src={reactUrl} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <div className="content">
        <header className="content-header">
          <h1>Get Started</h1>
        </header>
        <div className="content-item">
          <h1>Features</h1>
          <div>
            <h1>Hot Module Reload</h1>
            <p>
              As soon as you make changes to a file your changes will take
              effect without modifying your application state.
            </p>
            <h1>Out of the box SCSS support</h1>
            Use <code>import &quot;./index.scss&quot;;</code> to import SCSS
            directly. (Works with HMR)
            <h1>Barebones Dockerfile</h1>
            <p>
              Run <code>docker build .</code> from the project directory to
              build an image serving a production version of your app on nginx.
            </p>
            <h1>Easily accessible build configuration with Rollup</h1>
            <p>
              You have full access to the entire build process through{" "}
              <code>rollup.config.js</code>.
            </p>
            <p>
              Both Rollup and Nollup use this file and you can add or remove
              plugins to fit your own needs.
            </p>
          </div>
        </div>
        <div className="content-item">
          <h1>Learning resources</h1>
          <ul>
            <li>
              <img className="icon" alt="React" src={reactUrl} />
              <a href="https://reactjs.org/docs/getting-started.html">
                React Documentation
              </a>
            </li>
            <li>
              <img className="icon" alt="Rollup" src={rollupUrl} />
              <a href="https://rollupjs.org/guide/en/">Rollup Documentation</a>
            </li>
            <li>
              <img className="icon" alt="Docker" src={dockerUrl} />
              <a href="https://docs.docker.com/">Docker Documentation</a>
            </li>
            <li>
              <img className="icon" alt="Typescript" src={typescriptUrl} />
              <a href="https://www.typescriptlang.org/docs/">
                Typescript Documentation
              </a>
            </li>
          </ul>
        </div>
        <div className="content-item"></div>
      </div>
    </div>
  );
};
