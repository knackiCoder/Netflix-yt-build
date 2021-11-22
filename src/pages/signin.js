import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from "../containers/footer";
import { Form } from '../components';
import * as ROUTES from '../constant/routes';
import { useAuth } from '../hooks/use-auth-listener';



export default function Signin() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [error, setError] = useState('')

   const navigate = useNavigate()
   const auth = useAuth()

   const isInValid = password === '' || email === '';

   const handleSignin = (event) => {
      event.preventDefault();
      auth.Signin({
         email, password,
      }).then(() => {
         navigate(ROUTES.BROWSE)
      }).catch((error) => {
         setEmail("");
         setPassword("");
         setError(error.message);
      })
   }


   return (
      <>
         <HeaderContainer>
            <Form>
               <Form.Title>Sign in</Form.Title>
               {error && <Form.Error>{error}</Form.Error>}
               
               <Form.Base onSubmit={handleSignin} method='POST'>
                  <Form.Input
                     placeholder='Email address'
                     value={email}
                     onChange={({ target }) => setEmail(target.value)} />

                  <Form.Input
                     type='password'
                     autoComplete='off'
                     placeholder='password'
                     value={password}
                     onChange={({ target }) => setPassword(target.value)} />
                  
                  <Form.Submit disabled={isInValid} type="submit">Sign in</Form.Submit>
               </Form.Base>

               <Form.Text>New to Netflix?
                  <Form.Link to='/signup'>Sign up now
               </Form.Link>
               </Form.Text>

               <Form.SmallText>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Form.SmallText>
            </Form>
         </HeaderContainer>
         <FooterContainer />
      </>
   )
}

