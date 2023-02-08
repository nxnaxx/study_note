import { useDispatch, useSelector } from 'react-redux';
import { useInterval } from '../hooks';
import type { AppState } from '../store';

export default function ReduxClock() {
  const today = useSelector<AppState, Date>((state) => state.today);
  const dispatch = useDispatch();

  useInterval(() => {
    dispatch({ type: 'setToday', today: new Date() });
  });

  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <div className="text-5xl">ReduxClock</div>
      <div className="mt-4 text-3xl">{today.toLocaleTimeString()}</div>
      <div className="mt-4 text-2xl">{today.toLocaleDateString()}</div>
    </div>
  );
}
