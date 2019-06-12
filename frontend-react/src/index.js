import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'typeface-roboto';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) module.hot.accept();
