import React from 'react'
import { Navigation } from '../components'

const menusProps = {
  selected: 'Blog',
  menus: [
    { name: 'Blog', link: '/blog' },
    { name: 'Photo', link: '/photo' },
    { name: 'About', link: '/about' }
  ]
}

export default () => (
  <div>
    <Navigation {...menusProps} />
    <h1>Hello World!</h1>
  </div>
)