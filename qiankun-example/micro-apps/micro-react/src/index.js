import './public-path'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let root
function render(props) {
  const { container } = props
  root = ReactDOM.createRoot(container ? container.querySelector('#micro-react') : document.querySelector('#micro-react'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

export async function bootstrap() {
  console.log("==========bootstrap============>")
}
export async function mount(props) {
  console.log('============mount==============>")', props)
  render(props)
}
export async function unmount(props) {
  console.log('===========unmount=============>")', props)
  // root && root.unmount()
}
export async function update(props) {
  console.log('===========update==============>")', props)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
