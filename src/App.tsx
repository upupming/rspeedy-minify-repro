import { useCallback, useState } from '@lynx-js/react';

function makeCounter(step: number) {
  let value = 0;
  return {
    bump: () => (value += step),
    read: () => value,
  };
}

function describe(label: string, total: number): string {
  return `${label}: ${total}`;
}

export function App() {
  const [count, setCount] = useState(0);
  const counter = makeCounter(1);

  const onTap = useCallback(() => {
    counter.bump();
    setCount((previous) => previous + counter.read());
  }, [counter]);

  return (
    <view bindtap={onTap}>
      <text>{describe('count', count)}</text>
    </view>
  );
}
