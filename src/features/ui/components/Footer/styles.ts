import styled from 'styled-components';

export const Footer = styled.footer`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: var(--spacing-xs);
   padding: var(--spacing-sm) 0;

   > p {
      font-family: "Ubuntu", sans-serif;
      font-size: var(--font-size-xxs);
      font-weight: 700;
      line-height: 1.5;

      color: ${({ theme }) => theme['gray-blue-800']};

      > span {
         color: ${({ theme }) => theme['gray-blue-400']};
      }
   }
`;

export const SocialNetworks = styled.ul`
   display: flex;
   align-content: baseline;
   gap: var(--spacing-xs);
   font-size: var(--font-size-sm);

   a {
      display: block;
      color: ${({ theme }) => theme['gray-blue-850']};
      transition: all 300ms ease;

      &:hover {
         transform: scale(1.15);
         color: ${({ theme }) => theme['blue-350']};
      }
   }
`;
