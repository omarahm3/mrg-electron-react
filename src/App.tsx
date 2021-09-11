import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'

import { Dashboard } from './pages/Dashboard'
import { Provider } from 'rendition'

export function App() {
  return (
    <Router>
      <Provider>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Provider>
    </Router>
  )
}
