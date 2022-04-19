import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import StatisticPage from './pages/StatisticPage';
import { ContactEditPage } from './pages/ContactEditPage';
import "./assets/scss/global.scss"

function App() {
  return (
    <>
      <Router>
        < AppHeader />
        {/* <ContactPage /> */}
        {/* <StatisticPage /> */}
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/contact/edit" component={ContactEditPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/statistic" component={StatisticPage} />
          <Route path="/" component={HomePage} />
        </Switch>




      </Router>

    </>

  )
}

export default App;
