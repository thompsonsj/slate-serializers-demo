import type { Metadata } from 'next'
import { GettingStarted } from './components/GettingStarted'
import { HomeClient } from './home-client'
import { sitePageUrl } from './site'

export const metadata: Metadata = {
  openGraph: {
    url: sitePageUrl(''),
  },
}

export default function Page() {
  return (
    <HomeClient>
      <GettingStarted />
    </HomeClient>
  )
}
