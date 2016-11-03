import React from 'react'
import Link from 'next/link'
import css from 'next/css'

const style = css({
  color: 'red',
  ':hover': {
    color: 'blue'
  },
  marginRight: '5px'
})

export default ({ menus, selected }) => (
  <div>
    {menus.map((menu, index) => (
      <Link key={index} href={menu.link}>
        <a className={style}>{menu.name}</a>
      </Link>)
    )}
    <a href="https://github.com/JimmyLv/Haiku" target="_blank"><strong>GitHub</strong></a>
  </div>
)
