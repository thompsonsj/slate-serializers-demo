"use client"
import React from 'react'
import { SlateToTemplateDemo } from '@/app/components/SlateToTemplateDemo';
import { ModalProvider, ModalContainer } from '@faceless-ui/modal';

const App = () => {
  return (
    <ModalProvider>
      <SlateToTemplateDemo />
      <ModalContainer />
    </ModalProvider>
  )}

export default App;
