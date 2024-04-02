import { TodoListPage } from './pages/TodoListPage';
import { Routes, Route } from 'react-router-dom';
import { TodoDetailPage } from './pages/TodoDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {

  return (
    <Routes>
      <Route index path="/" element={<TodoListPage />} />
      <Route path="todos/:id" element={<TodoDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
