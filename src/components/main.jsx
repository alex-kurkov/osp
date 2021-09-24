import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CardsList from './cards-list'
import { useState } from 'react'
import Menu from './menu'

const StyledMain = styled.main`
  width: 100%;
  height: calc(100vh - 154px);
  background-color: ${(p) => p.theme.colors.background};
  overflow: scroll;
`

const Main = () => {
  const { goods } = useSelector(state => state.cart);
  const [ swiper, setSwiper ] = useState(null);
  const [ currentItemType, setCurrentItemType ] = useState(0);
  
  const menuItems = goods.map((item) => item.name);

/*   const next = () => {
    swiper?.slideNext()
  }
  const prev = () => {
    swiper?.slidePrev()
  } */
  const handleClick = (idx) => {
    setCurrentItemType(idx);
    swiper.slideTo(idx, 200);
  }

  return (
    <>
      <Menu
        items={menuItems}
        activeItem={currentItemType} 
        onClick={handleClick}  
      />
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
