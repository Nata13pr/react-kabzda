import React from 'react';
import { createRoot } from 'react-dom/client';
import SamuraiJSApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const root = createRoot(div);
  root.render(<SamuraiJSApp />);

  root.unmount();
  document.body.removeChild(div);
});