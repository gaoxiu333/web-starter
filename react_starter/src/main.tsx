import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./style/index.less"

// antd
import { ConfigProvider } from "antd"
import dayjs from "dayjs"
import zhCN from "antd/locale/zh_CN"
import { config } from "./theme"

dayjs.locale("zh-cn")

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider componentSize='middle' locale={zhCN} theme={config}>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </ConfigProvider>
  </React.StrictMode>
)
