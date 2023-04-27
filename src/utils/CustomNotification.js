import { showNotification } from '@mantine/notifications'
import Icon from './NotificationIcons'
import capitalize from './capitalize'


export const CustomNotification = ({
  title,
  message,
  loading,
  type
}) => {
  return showNotification({
    title: capitalize(title),
    message: message && capitalize(message),
    color:
      type === 'success'
        ? 'teal'
        : type === 'error'
        ? 'red'
        : type === 'warning'
        ? 'yellow'
        : 'blue',
    icon: Icon({ type: type }),
    autoClose: 6000,
    loading
  })
}