import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationsSelector } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp(){
  const networkCount = useRecoilValue(networkAtom);
  const messagesCount = useRecoilValue(messagingAtom);
  // const [messagesCount, setMessageCount] = useRecoilState(messagingAtom);
  // const setMessageCount = useSetRecoilState(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const jobsCount = useRecoilValue(jobsAtom);

  const totalNotificationCount = useRecoilValue(totalNotificationsSelector);

  // const totalCount = useMemo(()=>{
  //   return networkCount + messagesCount + notificationCount + jobsCount;
  // })

  return (
    <>
      <button>Home</button>

      <button>My Network ({networkCount>=100 ? '99+' : networkCount})</button>
      <button>Jobs ({jobsCount>=100 ? '99+' : jobsCount})</button>
      <button>Messaging ({messagesCount>=100 ? '99+' : messagesCount})</button>
      <button>Notifications ({notificationCount>=100 ? '99+' : notificationCount})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
