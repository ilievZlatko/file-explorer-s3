import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Initial from './pages/Initial';
import Explorer from './pages/Explorer';
import { PrivateRoute } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route
          path="/explorer"
          element={
            <PrivateRoute>
              <Explorer />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
