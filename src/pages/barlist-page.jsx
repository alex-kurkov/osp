import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CardsList from '../components/cards-list'
import Menu from '../components/menu'

const Page = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
`
const StyledMain = styled.main`
  width: 100%;
  height: calc(100% - 48px);
  background-color: ${(p) => p.theme.colors.background};
  overflow: scroll;
`

const BarListPage = () => {
  const { drinks } = useSelector(state => state.cart);
  const [ swiper, setSwiper ] = useState(null);
  const [ currentItemType, setCurrentItemType ] = useState(0);

  const menuItems = drinks.map((item) => item.name);
  
  const handleClick = (idx) => {
    setCurrentItemType(idx);
    swiper.slideTo(idx, 200);
  }

  return (
    <Page>
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
            setSwiper(swiper);
          }}
        >
          {
            drinks.map((i) => {
              return (
                <SwiperSlide key={i.slug}>
                  <CardsList goods={i.items} type="bar" />
                </SwiperSlide>
              )
            })

          }
        </Swiper>
      </StyledMain>
    </Page>
  )
}

export default BarListPage;
