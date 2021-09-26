import React from 'react'
import { useHistory } from 'react-router'

const HomePage = () => {
  const history = useHistory();
  return (
    <div>
      <button type="button" onClick={(e) => {
        e.preventDefault();
        e.stopPropagation()
        history.push('/bar');
        console.log(history)
      }}>to bar</button>
      <button type="button" onClick={() => history.push('/menu')}>to menu</button>
      <button type="button" onClick={() => history.push('/service')}>to tips</button>
    </div>
  )
}

export default HomePage;
