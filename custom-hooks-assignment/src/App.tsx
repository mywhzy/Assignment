import { TodoListPage } from './pages/TodoListPage';
import { Routes, Route } from 'react-router-dom';
import { TodoDetailPage } from './pages/TodoDetailPage';

function App() {

  return (
    <Routes>
      <Route index path="/" element={<TodoListPage />} />
      <Route path="todos/:id" element={<TodoDetailPage />} />
    </Routes>
  );
}

export default App;
