import styled from "styled-components/macro"
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
display: flex;
flex-direction: column;
background: url(${({ src }) => src ? `../images/misc${src}.jpg` : '../images/misc/home-bg.jpg'}) top left / cover no-repeat;
height: 50%;
`;

export const Logo = styled.img`
height: 32px;
width: 90px;
margin-right: 40px;

@media (max-width: 1449px) {
   height: 45px;
   width: 100px;
}
`;

export const Container = styled.div`
display: flex;
margin: 0 56px;
justify-content: space-between;
height: 64px;
padding: 18px 0;
align-items: center;
a {
   display: flex;
   }

@media (max-width: 1000px) {
   margin: 0 30px;
}
`;

export const Button = styled(ReactRouterLink)`
display: block;
background-color: #e50914;
width: 84px;
color: white;
height: fit-content;
border: 0;
font-size: 15px;
border-radius: 3px;
padding: 8px 17px;
cursor: pointer;
text-decoration: none;
box-sizing: border-box;

&:hover {
   background-color: #f40612;
}
`;