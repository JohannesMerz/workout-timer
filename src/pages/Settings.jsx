import { FiX } from 'react-icons/fi';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useWorkoutStore } from '../model';
import { Field } from '../components/atomics/Field';
import {
  Content,
  ContentSection,
  Header,
  HeaderInfo,
  HeaderNavigation,
} from '../components/atomics/PageSections';
import { ButtonLink } from '../components/atomics/ButtonLink';

const SettingsContent = styled(Content)`
  gap: 1rem;
`;

const ExitButton = styled(ButtonLink)`
  color: var(--colorSecondary);
  background-color: var(--colorPrimary);
  align-self: flex-end;
`;

const SettingsField = styled(Field).attrs((props) => ({
  ...props,
  type: 'number',
}))``;

const INITIAL_SETTINGS = {
  start: 10 * 1000,
  work: 10 * 1000,
  rest: 50 * 1000,
  roundReset: 10 * 1000,
  exercises: 5,
  rounds: 3,
};

function getInitialInput(settings) {
  return {
    ...settings,
    start: settings.start / 1000,
    work: settings.work / 1000,
    rest: settings.rest / 1000,
    roundReset: settings.roundReset / 1000,
  };
}

export function Settings() {
  const workoutStore = useWorkoutStore();

  const inputBufferRef = useRef(
    getInitialInput(workoutStore.settings || INITIAL_SETTINGS)
  );

  useEffect(() => {
    if (!workoutStore.settings) {
      workoutStore.setSettings(INITIAL_SETTINGS);
    }
  }, [workoutStore]);

  const setFieldValue = (fieldName, value) => {
    workoutStore.setSettings({
      ...workoutStore.settings,
      [fieldName]: value,
    });
  };

  const onCountChange = (fieldName) => (e) => {
    inputBufferRef.current[fieldName] = e.target.value;
    const value = parseInt(e.target.value || '1');
    if (value < 1) {
      setFieldValue(fieldName, 1);
    } else {
      setFieldValue(fieldName, value);
    }
  };

  const onTimeChange = (fieldName) => (e) => {
    inputBufferRef.current[fieldName] = e.target.value;
    const value = parseInt(e.target.value || '0');
    setFieldValue(fieldName, value * 1000);
  };

  return (
    <>
      <Header>
        <HeaderInfo>
          <h1>Workout Settings</h1>
        </HeaderInfo>
      </Header>
      <SettingsContent>
        <ContentSection>
          <SettingsField
            label="Rounds:"
            value={inputBufferRef.current.rounds}
            onChange={onCountChange('rounds')}
          ></SettingsField>
        </ContentSection>
        <ContentSection>
          <SettingsField
            label="Exercises:"
            value={inputBufferRef.current.exercises}
            onChange={onCountChange('exercises')}
          ></SettingsField>
        </ContentSection>
        <ContentSection>
          <SettingsField
            label="Start(s):"
            value={inputBufferRef.current.start}
            onChange={onTimeChange('start')}
          ></SettingsField>
        </ContentSection>
        <ContentSection>
          <SettingsField
            label="Work(s):"
            value={inputBufferRef.current.work}
            onChange={onTimeChange('work')}
          ></SettingsField>
        </ContentSection>
        <ContentSection>
          <SettingsField
            label="Rest(s):"
            value={inputBufferRef.current.rest}
            onChange={onTimeChange('rest')}
          ></SettingsField>
        </ContentSection>
        <ContentSection>
          <SettingsField
            label="Reset(s):"
            value={inputBufferRef.current.roundReset}
            onChange={onTimeChange('roundReset')}
          ></SettingsField>
        </ContentSection>
        <ExitButton to="/workout">SAVE</ExitButton>
      </SettingsContent>
    </>
  );
}
