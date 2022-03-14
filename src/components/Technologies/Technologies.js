import React from 'react';
import { DiFirebase, DiAndroid, DiReact, DiTerminal } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
      Tenho experiência em desenvolvimento de Back-end e Front-end, mas atualmente venho me especializando na área Mobile com 
      foco na Stack de Dart e Flutter.
      {/* Já venho estudando e adquirindo experiências com tecnologias para Back-end já algum tempo, mas gosto muito de me aventurar
      no Front-end em alguns projetos e atualmente venho me especializando na área de Desenvolvimento Mobile. */}
    </SectionText>
    <List>
      <ListItem>
        <DiAndroid size='3rem' />
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>
          Flutter + utilities: <br />
          - Flutter modular <br />
          - Mockito <br />
          - Micro-app <br />
          - Geolocator <br />
          - Clean Dart <br />     
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            React.js<br />
            Angular <br />
            PrimeFaces <br />    
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Dart<br />
            Java Spring REST <br />
            Node.js <br />
            Python <br />     
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;