import { Link } from 'react-router-dom'
function App() {

  return (
   <div>
    <h1>微前端应用基座</h1>
    <div>
        <Link to="/vue">vue 应用</Link>
        <Link to="/react">react 应用</Link>
    </div>
    <hr />
    <div id="app-root"></div>
   </div>
  )
}

export default App
