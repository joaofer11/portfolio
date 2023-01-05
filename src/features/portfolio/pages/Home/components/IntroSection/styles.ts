import styled, { keyframes } from 'styled-components';
import { sizes } from '../../../../../../styles/breakpoints';

const blink = keyframes`
	0%, 100% { opacity: 1; }
	50% { opacity: 0; }
`;

const stopBlink = keyframes`
	to { opacity: 1; }
`;

const greet = keyframes`
	3% { transform: rotateZ(10deg); }
	
	6% { transform: rotateZ(-15deg); }
	12% { transform: rotateZ(-17deg); }
	18% { transform: rotateZ(-19deg); }
	24% { transform: rotateZ(-17deg); }
	
	9% { transform: rotateZ(15deg); }
	15% { transform: rotateZ(16deg); }
	21% { transform: rotateZ(17deg); }
	27% { transform: rotateZ(16deg); }
	
	30% { transform: rotateZ(0deg); }
`;

export const IntroSection = styled.section`
   display: flex;
   justify-content: center;

   > svg {
      display: none;
   }

   @media ${sizes.lg} {
      justify-content: space-between;

      > svg {
         display: block;
         width: 10rem;
      }
   }
`;

export const Wrapper = styled.div`
   > span {
      display: block;
      margin-bottom: var(--spacing-xs);

      font-weight: 400;
      font-size: var(--font-size-xs);
      font-family: "Roboto Mono", monospace;

      line-height: 1.5;
      text-align: center;
      color: ${({ theme }) => theme['gray-blue-500']};

      &::before {
         content: "👋";
         display: inline-block;
         animation: ${greet} 7s ease-in-out 1.2s infinite;
         transform-origin: 90% bottom;
         transform-box: fill-box;
      }
   }

   > p {
      max-width: 30ch;

      font-weight: 500;
      font-size: var(--font-size-md);
      font-family: "Roboto Mono", monospace;

      line-height: 1.5;
      text-align: center;
      color: ${({ theme }) => theme['gray-blue-400']};

      &::after {
         content: "|";
         animation: ${blink} 1s steps(1, jump-end) infinite,
            ${stopBlink} 0s 800ms 1 forwards,
            ${blink} 1s steps(1, jump-end) 6.4s infinite;
      }
   }

   @media ${sizes.lg} {
      > span,
      p {
         text-align: left;
      }

      > p {
         width: 85%;
      }
   }
`;
