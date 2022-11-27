import { Posts } from './features/posts/posts';
import AddPostForm from './features/posts/AddPostForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <AddPostForm />
      <Posts />
    </div>
  );
}

export default App;
