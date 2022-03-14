import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Telegram</LinkTitle>
          <LinkItem href='https://t.me/antoninopraxedes' target="_blank">t.me/antoninopraxedes</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href='mailto:antonino.praxedes@gmail.com' target="_blank">antonino.praxedes@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>© 2022 Antonino Praxedes. All Rights Reserved.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/antonino3g' target="_blank">
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/antoninopraxedes/' target="_blank">
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.instagram.com/antonino.praxedes/' target="_blank">
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;