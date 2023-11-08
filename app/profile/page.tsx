import RouteLayout from '../components/route-layout/route-layout'
import React, { Suspense } from 'react'
import Loading from './components/skills/loading';
import Skills from './components/skills/skills';
import ProfileProvider from '../contexts/profile-context';
import Projects from './components/projects/projects';

export const revalidate = 30;

const Profile = async () => {

  return (
    <RouteLayout>
      <ProfileProvider>
          <Suspense fallback={<Loading />}>
            <Skills></Skills>
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Projects></Projects>
          </Suspense>
      </ProfileProvider>
    </RouteLayout>
  )
}

export default Profile