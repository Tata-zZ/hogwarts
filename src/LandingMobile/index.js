import Loadable from 'react-loadable'
import Loading from 'Common/Loading'

const LandingMobile = Loadable({
  loader: () => import(/* webpackChunkName: "landingMobile" */ './LandingMobile'),
  loading: Loading,
  delay: 200
})

export default LandingMobile
