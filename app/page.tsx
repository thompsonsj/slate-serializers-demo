"use client"
import React from 'react'
import { ModalProvider, ModalContainer } from '@faceless-ui/modal';
import { PageHeadingBasic } from './components/PageHeadingBasic';
import { Grid } from './components/page-specific/grid';

const App = () => {
  return (
    <ModalProvider>
      <PageHeadingBasic
        title="slate-serializers"
        description={<>A collection of serializers to convert <a href="https://www.npmjs.com/package/slate">Slate</a> JSON objects to various formats and vice versa. Designed to work in both Node.js and browser environments.</>}
        className="p-6 bg-slate-200 rounded"
      />
      <div className="mt-6">
        <Grid />
        </div>
      <ModalContainer />
    </ModalProvider>
  )}

export default App;
