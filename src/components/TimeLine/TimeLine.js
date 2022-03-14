import React, { useState, useRef, useEffect } from 'react';

// import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { BlogCard, GridContainer, Img } from '../../components/TimeLine/TimeLineStyles';
import { TimeLineData, profilePic } from '../../constants/constants';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
   // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id='about'>
      <SectionTitle>Sobre</SectionTitle>
      <SectionText>
        Desenvolvedor Mobile, formado pelo Instituto Federal de Roraima e Pós Graduado em Desenvolvimento em Aplicativos Móveis pela UniBF.
        Sou apaixonado por tecnologia e um entusiasta GNU/Linux e do conhecimento livre.
      </SectionText>
      <GridContainer>
        {profilePic.map(({image}) => (
            <Img src={image} />
          ))}
       </GridContainer>
    </Section>
  );
};

export default Timeline;