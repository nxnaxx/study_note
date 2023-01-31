import { SubTitle, Title } from '../components';

type ClockProps = {
  today: Date;
};

export default function Clock({ today }: ClockProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary text-white">
      <Title className="text-5xl">{today.toLocaleTimeString()}</Title>
      <SubTitle className="mt-4 text-2xl">
        {today.toLocaleDateString()}
      </SubTitle>
    </div>
  );
}
