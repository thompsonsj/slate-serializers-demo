"use client"
import React from 'react'
import { SlateToHtmlDemo } from '@/app/components/SlateToHtmlDemo';
import { ModalProvider, ModalContainer } from '@faceless-ui/modal';

const App = () => {
  return (
    <ModalProvider>
      <SlateToHtmlDemo />
      <ModalContainer />
    </ModalProvider>
  )}

export default App;
