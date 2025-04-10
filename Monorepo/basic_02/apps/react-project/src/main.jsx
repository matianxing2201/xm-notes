import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

let root = null;

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}

function render(props = {}) {
  const { container } = props;
  
  const dom = container
    ? container.querySelector("#root")
    : document.querySelector("#root");
  root = createRoot(dom);
  root.render(<App />);
}

renderWithQiankun({
  mount(props) {
    console.log("react 应用挂载");
    render(props);
  },
  bootstrap() {
    console.log("react 应用初始化");
  },
  update() {
    console.log("react 应用更新");
  },
  unmount() {
    console.log("react 应用卸载");
    root.unmount();
  },
});
