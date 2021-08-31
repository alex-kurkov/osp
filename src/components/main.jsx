import React from 'react'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import styled from 'styled-components'
import CardsList from './cards-list'
import { useState } from 'react'
import ChevronIcon from '../ui/icons/chevron-icon'
import ArrowIcon from '../ui/icons/arrow-icon'
import { dishes } from '../utils/hardcode'
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


const Main = () =>{
  const { goods } = useSelector(store => store.cart);
  const [ swiper, setSwiper ] = useState(null);
  const [ menuToggled, setMenuToggled ] = useState(false);
  const [ currentItemType, setCurrentItemType ] = useState(0);
  const menuItems = dishes.map((item) => item.type)

  const next = () => {
    swiper?.slideNext()
  }
  const prev = () => {
    swiper?.slidePrev()
  }
  const handleClick = (idx) => {
    setCurrentItemType(idx);
    swiper.slideTo(idx, 200);
  }

  return (
    <StyledMain>
      <StyledNavigation>
        <ChevronIcon direction="left" onClick={prev}/>
        <StyledMenuItem>
          { dishes[currentItemType]['type'].toUpperCase() }
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
        <SwiperSlide>
          <CardsList goods={goods} />
        </SwiperSlide>
        <SwiperSlide>
          {(i) => 
            <CardsList goods={goods} />
          }

        </SwiperSlide>
        <SwiperSlide>
          <CardsList goods={goods} />
        </SwiperSlide>
      </Swiper>

    </StyledMain>
  )
}

export default Main
