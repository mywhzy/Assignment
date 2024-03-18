import { TodoListPage } from './pages/TodoListPage';
import { Routes, Route } from 'react-router-dom';
import { ItemDetailPage } from './pages/ItemDetailPage';

function App() {

  return (
    <Routes>
      <Route index path="/" element={<TodoListPage />} />
      <Route path="todos/:id" element={<ItemDetailPage />} />
    </Routes>
  );
}

export default App;
