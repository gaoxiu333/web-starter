import { RouterProvider } from "react-router-dom"
import { router } from "./routes/index"
import { App as AntdApp } from "antd"
import EscapeAntd from "@components/EscapeAntd.ts"

function App() {
  return (
    <>
      <AntdApp>
        <EscapeAntd />
        <RouterProvider router={router} />
      </AntdApp>
    </>
  )
}

export default App
