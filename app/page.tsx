import { GettingStarted } from './components/GettingStarted'
import { HomeClient } from './home-client'

export default function Page() {
  return (
    <HomeClient>
      <GettingStarted />
    </HomeClient>
  )
}
