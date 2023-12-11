"use client"
import React from 'react'
import { SlateToReactDemo } from '@/app/components/SlateToReactDemo';
import { ModalProvider, ModalContainer } from '@faceless-ui/modal';

const App = () => {
  return (
    <ModalProvider>
      <SlateToReactDemo />
      <ModalContainer />
    </ModalProvider>
  )}

export default App;
