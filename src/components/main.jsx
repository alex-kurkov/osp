import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CardsList from './cards-list'
import { useState } from 'react'
import ChevronIcon from '../ui/icons/chevron-icon'
import Menu from './menu'

const StyledNavigation = styled.div`
  width: 100%;
  height: 38px;
  padding: 4px;
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  align-items: center;
`
const StyledMain = styled.main`
  width: 100%;
  height: calc(100vh - 144px);
  background-color: ${(p) => p.theme.colors.background};
  overflow: scroll;
`

const Main = () => {
  const { goods } = useSelector(state => state.cart);
  const [ swiper, setSwiper ] = useState(null);
  const [ currentItemType, setCurrentItemType ] = useState(0);
  
  const menuItems = goods.map((item) => item.name);



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
    <>
      <StyledNavigation>
        <ChevronIcon direction="left" onClick={prev}/>
        <Menu
          items={menuItems}
          activeItem={currentItemType} 
          onClick={handleClick}  
        />
        <ChevronIcon direction="right" onClick={next} />
      </StyledNavigation>
      <StyledMain>
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
            goods.map((i) => {
              return (
                <SwiperSlide key={i.slug}>
                  <CardsList goods={i.items} />
                </SwiperSlide>
              )
            })

          }
        </Swiper>
      </StyledMain>
    </>
  )
}

export default Main
