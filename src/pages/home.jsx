import React from 'react'
import { useHistory } from 'react-router'

const HomePage = () => {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push('/some')}>to bar</button>
      <button onClick={() => history.push('/menu')}>to menu</button>
      <button onClick={() => history.push('/tips')}>to tips</button>
    </div>
  )
}

export default HomePage
