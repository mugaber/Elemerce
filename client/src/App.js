import React, { useEffect, lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { GlobalStyles } from './global-styles'
import Header from './components/Header/Header'
import Spinner from './components/WithSpinner/Spinner'
import ErrorBoundary from './components/ErrorBoundary'

import { connect } from 'react-redux'
import { checkUserSession } from './redux/user/user.actions'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'

const ShopPage = lazy(() => import('./pages/shop/shop'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const Checkout = lazy(() => import('./components/Checkout/Checkout'))
const SignInSignUp = lazy(() => import('./pages/SignInSignUp/SignInSignUp'))

//

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyles />

      <Header />

      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={Checkout} />
            <Route
              exact
              path='/signin'
              render={() => (currentUser ? <Redirect to='/' /> : <SignInSignUp />)}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
