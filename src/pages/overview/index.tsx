import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ModalProvider, ModalContainer } from '@faceless-ui/modal';
import { PageHeadingBasic } from '../../components/PageHeadingBasic';
import { Grid } from './page-specific/grid';

const App = () => {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => { 
    const redirect = searchParams.get('redirect');
    if (redirect) {
      navigate(`/${redirect ?? ""}`, { replace: true });
    }
  })

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

