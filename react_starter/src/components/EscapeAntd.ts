import { App, message as antMessage } from "antd"
import type { MessageInstance } from "antd/es/message/interface"
import type { ModalStaticFunctions } from "antd/es/modal/confirm"
import type { NotificationInstance } from "antd/es/notification/interface"

let message: MessageInstance = antMessage
let notification: NotificationInstance
let modal: Omit<ModalStaticFunctions, "warn">
const EscapeAntd = () => {
  const staticFunction = App.useApp()
  modal = staticFunction.modal
  message = staticFunction.message
  notification = staticFunction.notification
  return null
}
export default EscapeAntd

export { message, notification, modal }
