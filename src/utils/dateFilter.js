
import moment from 'moment'

export default function (value) {
  if (value) {
    return moment.unix(value).format(' h:mm a')
  }
}
