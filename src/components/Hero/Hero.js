import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Seja Bem-vindo!
      </SectionTitle>
      <SectionText>
        Aqui você poderá conhecer um pouco dos meus projetos que venho trabalhando e estudando ao longo da minha carreira como desenvolvedor.
      </SectionText>
    </LeftSection>
    <SectionText>
    </SectionText>
  </Section>
);

export default Hero;