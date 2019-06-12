import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import samplePDF from './resume.pdf';

export default class MyDocument extends Component {
  state = {
    pageNumber: 1,
  }
  render() {
    const { pageNumber } = this.state;

    return (
      <React.Fragment>
        <Document
          file={samplePDF}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </React.Fragment>
    );
  }
}

