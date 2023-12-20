import { getBasePath } from '@clearblade/ia-mfe-core';
// @ts-ignore
import { appQueryClient, RecoilRoot } from '@clearblade/ia-mfe-react';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import DashboardPlugin from './components/DashboardPlugin';

export default function Root() {
  return (
    <RecoilRoot>
      <BrowserRouter basename={getBasePath()}>
        <QueryClientProvider contextSharing client={appQueryClient}>
          <DashboardPlugin />
        </QueryClientProvider>
      </BrowserRouter>
    </RecoilRoot>
  );
}
