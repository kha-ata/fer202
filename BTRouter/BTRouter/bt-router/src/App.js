import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';
import { Container } from 'react-bootstrap';
import Post from './components/Post';
import PostDetail from './components/PostDetail';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <div>
      <h1>React Router Example</h1>
      <Navigation/>
      <Container>
        <Routes>
  <Route
    path="/"
    element={
      isLoggedIn
        ? <Navigate to="/home" replace />
        : <Navigate to="/login" replace />
    }
  />
  <Route path="/about" element={<About />} />
  <Route path="/home" element={<Home />} /> {/* Chuyển Home sang /home */}
  <Route
    path="/posts"
    element={
      <PrivateRoute>
        <Post />
      </PrivateRoute>
    }
  />
  <Route
    path="/post/:id"
    element={
      <PrivateRoute>
        <PostDetail />
      </PrivateRoute>
    }
  />
  <Route path="/login" element={<Login />} />
</Routes>

      </Container>
    </div>
  );
}
export default App;
