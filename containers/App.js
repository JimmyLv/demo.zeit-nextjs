import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Head from 'next/head'

import { initStore } from '../store'

export default class App extends Component {
  static getInitialProps({ req }) {
    const isServer = !!req
    const store = initStore(undefined, isServer)
    store.dispatch({ type: 'SAY_HELLO' })
    return { initialState: store.getState(), isServer }
  }
  
  constructor(props) {
    super(props)
    this.store = initStore(props.initialState, props.isServer)
  }
  
  componentDidMount() {
    this.store.dispatch({ type: 'SAY_HELLO' })
  }
  
  render() {
    return (
      <Provider store={this.store}>
        <div>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          {this.props.children}
        </div>
      </Provider>
    )
  }
}