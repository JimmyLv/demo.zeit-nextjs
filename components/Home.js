import React from 'react'
import { connect } from 'react-redux'

export default connect(
  (state) => ({
    names: state.guys.map(guy => guy.name),
  })
)(
  ({ names }) => (
    <div>
      <h1>Welcome {names.join(' & ')} !</h1>
    </div>
  )
)