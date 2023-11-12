import { Navigate, createBrowserRouter } from "react-router-dom"
import BaseLayout from "../Layout/BaseLayout"
import RootError from "../Layout/RootError"
import AppLayout from "../Layout/AppLayout"
import { HomeOutlined } from "@ant-design/icons"

export const menus = [
  {
    path: "home",
    meta: {
      title: "主页",
      icon: <HomeOutlined />
    },
    lazy: () => import("@views/Home")
  },
  {
    path: "other",
    meta: {
      title: "测试页面",
      icon: <HomeOutlined />
    },
    lazy: () => import("@views/Home")
  },
  {
    path: "example",
    meta: {
      title: "example",
      icon: <HomeOutlined />
    },
    lazy: () => import("@views/Example")
  }
]

export const router = createBrowserRouter([
  {
    path: "",
    element: <BaseLayout />,
    errorElement: <RootError />,
    children: [{ path: "login", lazy: () => import("../views/Auth/Login") }]
  },
  {
    path: "",
    element: <AppLayout />,
    errorElement: <RootError />,
    children: [{ path: "", index: true, element: <Navigate to='home' /> }, ...menus]
  }
])

/**
 *  清除热重载的副作用
 *  https://vitejs.dev/guide/api-hmr
 */
if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}
