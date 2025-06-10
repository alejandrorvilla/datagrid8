import ReactDOM from 'react-dom'
import Main from './pages/Main'
import { LicenseInfo } from '@mui/x-license'

LicenseInfo.setLicenseKey(
  '',
)

ReactDOM.render(<Main />, document.getElementById('root'))
