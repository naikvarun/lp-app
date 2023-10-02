import './App.scss';
import AppHeader from './components/app-header/app-header.tsx';
import Questions from './questions/questions.tsx';
import { useAppDispatch } from './store';
import { useEffect } from 'react';
import { initializeQuestions } from './store/questions.actions.ts';
import Progress from './questions/progress.tsx';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initializeQuestions());
  }, [dispatch]);
  return (
    <>
      <AppHeader />
      <main className="container">
        <section>
          <Progress />
        </section>
        <section></section>
        <section>
          <Questions />
        </section>
      </main>
    </>
  );
}

export default App;
