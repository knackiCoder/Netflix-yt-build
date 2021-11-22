import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/use-auth-listener';
import { SelectProfileContainer } from './profile';
import { Loading } from '../components';

export function BrowseContainer({ slides }) {
   const [profile, setProfile] = useState({})
   const [ loading, setLoading ] = useState(true)
   const { user } = useAuth();

   console.log(profile)
   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 3000)
   }, [profile])

   return (
      profile.displayName ? (
         loading ? (
            <Loading src={user.photoURL} />)
            : <Loading.ReleaseBody />
      ) : (
         <SelectProfileContainer user = { user } setProfile = { setProfile } /> )
   )
}