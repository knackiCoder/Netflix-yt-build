import React from 'react';
import * as ROUTES from '../constant/routes';
import logo from '../logo.svg';
import { Header } from '../components'
import Profile from '../components/profiles';

export function SelectProfileContainer({ user, setProfile }) {
   return (
      <>
         <Header bg={false}>
            <Header.Frame>
               <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix' />
            </Header.Frame>
         </Header>

         <Profile>
            <Profile.Title>Who's watching?</Profile.Title>
            <Profile.List>
               <Profile.User onClick={() => setProfile({
                  displayName: user.displayName,
                  photoURL: user.photoURL
               })}>
                  <Profile.Picture src={user.photoURL} alt='User image' />
                  <Profile.Name>{user.displayName}</Profile.Name>
               </Profile.User>
            </Profile.List>
         </Profile>

      </>
   )
}