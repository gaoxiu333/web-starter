import { Outlet } from "react-router-dom"
import { styled } from "styled-components"

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-y: "auto";
`

function BaseLayout() {
  return (
    <>
      <nav>{/* 导航 */}</nav>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  )
}

export default BaseLayout
