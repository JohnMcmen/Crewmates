import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import ReadPosts from './pages/ReadPosts';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import { Link } from 'react-router-dom';
import { supabase } from './client'; // Import Supabase client

const App = () => {
  // Initialize state for posts
  const [posts, setPosts] = useState([]);

  // Fetch posts from Supabase when component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase.from('crewmates').select('*');
        if (error) {
          throw error;
        }
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };

    fetchPosts();
  }, []);

  // Sets up routes
  const element = useRoutes([
    {
      path: '/',
      element: <ReadPosts data={posts} />,
    },
    {
      path: '/edit/:id',
      element: <EditPost data={posts} />,
    },
    {
      path: '/new',
      element: <CreatePost />,
    },
  ]);

  return (
    <div className="App">
      <div className="header">
        <h1>Crewmates!</h1>
        <Link to="/">
          <button className="headerBtn"> Explore Crewmates</button>
        </Link>
        <Link to="/new">
          <button className="headerBtn"> Submit Crewmate</button>
        </Link>
      </div>
      {element}
    </div>
  );
};

export default App;
