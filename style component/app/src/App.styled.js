import styled from "styled-components";


 export const Appstyled = styled.div`

text-align:center;

`;
 export const Appheader = styled.header`
background-color:yellow;
min-height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
font-size:calc(10px + 2vmin);
  color:white;

`;
 export const Applogo = styled.img `
height: 40vmin;
  pointer-events: none;

@media (prefers-reduced-motion: no-preference) {

    animation: App-logo-spin infinite 20s linear;
}
`;
 export const Flexbox = styled.div`
flex-direction:${(props) => props.flexDirection};`
