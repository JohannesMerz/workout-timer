import {
  createHashRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';
import { useWorkoutStore } from './model';
import { SoundProvider } from './hooks/useSound';
import { GlobalStyles } from './Theme';
import { Workout } from './pages/Workout';

const router = createHashRouter(
  createRoutesFromElements(
    <Route
      path="/"
      errorElement={<ErrorPage />}
      element={<Workout></Workout>}
    ></Route>
  )
);

function App() {
  const workoutStore = useWorkoutStore();

  return (
    <SoundProvider>
      <GlobalStyles
        $variant={workoutStore.phase?.name || 'start'}
      ></GlobalStyles>
      <RouterProvider router={router}></RouterProvider>
    </SoundProvider>
  );
}

export default App;
