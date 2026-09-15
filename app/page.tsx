import type { Metadata } from 'next'
import { GettingStarted } from './components/GettingStarted'
import { HomeClient } from './home-client'
import { openGraphForPath } from './site'

export const metadata: Metadata = {
  openGraph: openGraphForPath(''),
}

export default function Page() {
  return (
    <HomeClient>
      <GettingStarted />
    </HomeClient>
  )
}
