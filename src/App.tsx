import { FC, useEffect } from 'react';

import './index.css';
import Button from './core/components/Button';

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
  return <Button label="Button" />;
};

export default App;
