import { FC, useEffect } from 'react';

const App: FC = () => {
  useEffect(() => {
    fetch('/api')
      .then((r) => r.text())
      // eslint-disable-next-line no-console
      .then(console.log)
      .catch((e: unknown) => {
        // eslint-disable-next-line no-console
        console.error(e);
      });
  }, []);
  return <h1>xxx</h1>;
};

export default App;
