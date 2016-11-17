import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Head from 'next/head'
import LoadingBar from 'react-redux-loading-bar'

import Navigation from './Navigation'
import store from '../store'
import { actionTypes } from '../store/constants/action.flow'

const menusProps = {
  selected: 'Blog',
  menus: [
    { name: 'Blog', link: '/blog' },
    { name: 'Photo', link: '/photo' },
    { name: 'About', link: '/about' }
  ]
}

export default class AppContainer extends Component {
  
  componentDidMount() {
    store.dispatch({ type: actionTypes.SAY_HELLO })
  }
  
  render() {
    return (
      <Provider store={store}>
        <div>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <header>
            <LoadingBar />
            <Navigation {...menusProps} />
          </header>
          <content>
            {this.props.children}
          </content>
        </div>
      </Provider>
    )
  }
}