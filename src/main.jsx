import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Ambio_Tracker.jsx';
const l = document.getElementById('_loading');
if (l) l.remove();
createRoot(document.getElementById('root')).render(React.createElement(App));
