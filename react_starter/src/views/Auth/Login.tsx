import { message } from "@components/EscapeAntd.ts"
import { Button, Card, Form, Input } from "antd"
import { useNavigate } from "react-router-dom"

export function Component() {
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    console.log("login values", values)
    navigate("/home")
    message.success("登陆成功")
  }
  const onFinishFailed = (error: any) => {
    console.log("login error1:", error)
  }
  return (
    <>
      <Card title='登陆' bodyStyle={{ width: "500px" }}>
        <Form name='login' onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off'>
          <Form.Item
            label='账号'
            name='userName'
            rules={[{ required: true, message: "请输入账号！" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='密码'
            name='password'
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' block>
              登陆
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}

Component.displayName = "Login"
