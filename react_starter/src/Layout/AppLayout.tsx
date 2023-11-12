import { Layout, Menu, theme } from "antd"
import Sider from "antd/es/layout/Sider"
import { Outlet, useNavigate } from "react-router-dom"

import { Content, Footer, Header } from "antd/es/layout/layout"

import { menus } from "@/routes"

export default function AppLayout() {
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const navigate = useNavigate()
  const onSelectMenu = (event: any) => {
    console.log("select menu", event)
    const { key } = event
    navigate(key)
  }
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Sider
          onBreakpoint={broken => {
            console.log("___broken", broken)
          }}
          onCollapse={(collapsed, type) => {
            console.log("collapse", collapsed, type)
          }}
        >
          <span>logo</span>
          <Menu
            theme='dark'
            mode='inline'
            defaultSelectedKeys={["home"]}
            onSelect={onSelectMenu}
            items={menus.map(item =>
              Object.assign(
                {},
                {
                  label: item.meta.title,
                  icon: item.meta.icon,
                  key: item.path
                }
              )
            )}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>导航</Header>
          <Content style={{ padding: "24px 16px 0", background: colorBgContainer }}>
            <Outlet />
          </Content>
          <Footer style={{ textAlign: "center" }}>footer</Footer>
        </Layout>
      </Layout>
    </>
  )
}
