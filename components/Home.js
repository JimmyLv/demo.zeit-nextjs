import React from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'

import Navigation from './Navigation'

const menusProps = {
  selected: 'Blog',
  menus: [
    { name: 'Blog', link: '/blog' },
    { name: 'Photo', link: '/photo' },
    { name: 'About', link: '/about' }
  ]
}

export default connect(
  ({ guys }) => ({
    names: guys.map(guy => guy.name),
  })
)(
  ({ names, children }) => (
    <div>
      <header>
        <LoadingBar />
        <Navigation {...menusProps} />
      </header>
      <content>
        <h1>Welcome {names.join(' & ')} !</h1>
        {children}
      </content>
    </div>
  )
)