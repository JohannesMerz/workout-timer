import { PhaseProgress } from '../components/store-consumers/PhaseProgress';
import { WorkoutControls } from '../components/store-consumers/WorkoutControls';
import {
  Content,
  ContentSection,
  Header,
  HeaderInfo,
  HeaderNavigation,
} from '../components/atomics/PageSections';
import { Sounds } from '../components/store-consumers/Sounds';
import { useWorkoutStore } from '../model';
import { Navigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { ButtonLink } from '../components/atomics/ButtonLink';

export function Workout() {
  const workoutStore = useWorkoutStore();

  if (!workoutStore.settings) {
    return <Navigate to="/settings" replace={true} />;
  }

  const workoutInProgress =
    workoutStore.workout.progressMs && workoutStore.phase.name !== 'end';

  return (
    <>
      <Header>
        <HeaderInfo>
          <h1>Workout Timer</h1>
        </HeaderInfo>
        <HeaderNavigation>
          <ButtonLink to="/settings" disabled={workoutInProgress}>
            <FiSettings size="28"></FiSettings>
          </ButtonLink>
          <Sounds></Sounds>
        </HeaderNavigation>
      </Header>
      <Content>
        <ContentSection>
          <PhaseProgress></PhaseProgress>
        </ContentSection>
        <ContentSection>
          <WorkoutControls></WorkoutControls>
        </ContentSection>
      </Content>
    </>
  );
}
