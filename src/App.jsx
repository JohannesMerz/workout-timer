import {
  createHashRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';
import { useWorkoutStore } from './model';
import { SoundProvider } from './hooks/useSound';
import { GlobalStyles } from './Theme';
import { Workout } from './pages/Workout';
import { Fullscreen } from './components/atomics/Fullscreen';
import { Footer, FooterSection } from './components/atomics/PageSections';
import { Settings } from './pages/Settings';

function AppRedirect() {
  const workoutStore = useWorkoutStore();

  if (workoutStore.settings) {
    return <Navigate to="/workout" replace={true} />;
  }
  return <Navigate to="/settings" replace={true} />;
}

const router = createHashRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/workout" element={<Workout></Workout>}></Route>
      <Route path="/settings" element={<Settings></Settings>}></Route>
      <Route path="*" element={<AppRedirect />}></Route>
    </Route>
  )
);

function App() {
  const workoutStore = useWorkoutStore();

  return (
    <SoundProvider>
      <GlobalStyles
        $variant={workoutStore.phase?.name || 'start'}
      ></GlobalStyles>
      <Fullscreen>
        <RouterProvider router={router}></RouterProvider>

        <Footer>
          <FooterSection>
            <a href={document.location.href}>refresh app</a>
          </FooterSection>
        </Footer>
      </Fullscreen>
    </SoundProvider>
  );
}

export default App;
