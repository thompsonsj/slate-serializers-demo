"use client"
import React from 'react'
import { SlateToMarkdownDemo } from '@/app/components/SlateToMarkdownDemo';
import { ModalProvider, ModalContainer } from '@faceless-ui/modal';

const App = () => {
  return (
    <ModalProvider>
      <SlateToMarkdownDemo />
      <ModalContainer />
    </ModalProvider>
  )}

export default App;
