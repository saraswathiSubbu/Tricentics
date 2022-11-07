import './App.css'
import { Link,   BrowserRouter as Router, useRoutes } from 'react-router-dom'
import TaskOne from './task1'
import TaskTwo from './task2'
import { routesPath } from './Route'

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: routesPath.home, element: <Home /> },
    { path: routesPath.Task1, element: <TaskOne /> },
    { path: routesPath.Task2, element: <TaskTwo /> },

  ])
  return routes;
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

function Home() {

  return (
    <>
      <main>
        <h2>Welcome to the test index!</h2>
        <p>Pick any link to go there.</p>
      </main>
      <ul>
        <li><Link to={routesPath.Task1}>Task One</Link></li>
        <li><Link to={routesPath.Task2}>Task Two</Link></li>
      </ul>
    </>
  )
}

export default App;
