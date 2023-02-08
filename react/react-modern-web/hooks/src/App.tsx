import { Provider } from 'react-redux';
import ReduxClock from './pages/ReduxClock';
import { UseReducerClock } from './pages/UseReducerClock';
import { useStore } from './store';

export default function App() {
  const store = useStore();
  return (
    <Provider store={store}>
      <main className="p-5">
        <UseReducerClock />
        <ReduxClock />
      </main>
    </Provider>
  );
}
