import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import styled from 'styled-components'
import CardsList from './cards-list'
import { useState } from 'react'
import ChevronIcon from '../ui/icons/chevron-icon'
import ArrowIcon from '../ui/icons/arrow-icon'
import Menu from './menu'

const StyledMain = styled.main`
  width: 100%;
  margin-top: 160px;
  background-color: ${(p) => p.theme.colors.background};
`
const StyledNavigation = styled.div`
  width: 100%;
  height: 24px;
  padding: 0 4px;
  position: fixed;
  top: 130px;
  left: 0;
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  z-index: 10;
`
const StyledMenuItem = styled.div`
  justify-self: center;
  color: ${p => p.theme.colors.textPrimary};
  display: flex;
  align-items: center;
`;

const Main = ({ goods }) => {
  const [ swiper, setSwiper ] = useState(null);
  const [ menuToggled, setMenuToggled ] = useState(true);
  const [ currentItemType, setCurrentItemType ] = useState(0);
  
  const dishes = [...goods].sort((a, b) => a['order'] - b['order']);
  const menuItems = dishes.map((item) => item.name);

  const next = () => {
    swiper?.slideNext()
  }
  const prev = () => {
    swiper?.slidePrev()
  }
  const handleClick = (idx) => {
    setCurrentItemType(idx);
    swiper.slideTo(idx, 200);
    setMenuToggled(!menuToggled);
  }

  return (
      <StyledMain>
      <StyledNavigation>
        <ChevronIcon direction="left" onClick={prev}/>
        <StyledMenuItem>
          { dishes[currentItemType]['name'].toUpperCase() }
          <ArrowIcon direction={menuToggled ? "up" : "down"} onClick={() => setMenuToggled(!menuToggled)} />
        </StyledMenuItem>
        <ChevronIcon direction="right" onClick={next} />
      </StyledNavigation>
      <Menu
        toggled={menuToggled} 
        items={menuItems}
        activeItem={currentItemType} 
        onClick={handleClick}  
      />
      <Swiper
        autoHeight={true}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(i) => {
          setCurrentItemType(i.activeIndex)
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper)
          setCurrentItemType(swiper.activeIndex)
        }}
      >
        {
          dishes.map((i) => {
            return (
              <SwiperSlide key={i.slug}>
                <CardsList goods={i.items} />
              </SwiperSlide>
            )
          })

        }
      </Swiper>

    </StyledMain>
  )
}

export default Main
