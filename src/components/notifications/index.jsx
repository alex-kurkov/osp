import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CloseIcon from '../../ui/icons/close-icon';
import './styles.css';

const NotsWrap = styled.div`
  max-width: 475px;
  width: 100%;
  margin: 0 auto;
  height: ${p => p.customHeight};
  padding: 8px;
  transition: height 300ms ease-in-out;
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
  align-items: center;
  gap: 10px;
`

const StyledNotification = styled.article`
  position: relative;
  height: 70px;
  border-radius: 20px;
  width: 100%;
  padding: 4px 36px 4px 8px;
  background-color:${p => p.theme.colors.activeElementBg};
  opacity: .9;
`

const IconWrap = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
`
const Title = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  color: ${p => p.theme.colors.textPrimary};
  overflow: hidden;
`
const Content = styled.div`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: ${p => p.theme.colors.textPrimary};
  max-height: 100%;
  overflow: hidden;
`
const notificationsStack = [
  {
    id: 'oietgjoirjv',
    title: 'ОЧЕНЬ ВАЖНЫЙ ТИТУЛ',
    content: 'ну а тут содержание',
    action: null,
    cancellableWithoutAction: true,
    lifetime: 3000,
  },
  {
    id: '1234132__312',
    title: 'SECOND',
    content: 'and again тут содержание and again тут содержание and again тут содержание',
    action: () => {console.log('cookies accepted')},
    cancellableWithoutAction: true,
    lifetime: null,
  },
];

const notificationRoot = document.getElementById('notification');

const Notification = ({item, setNots, nots}) => {
  const [isTerminated, setIsTerminated] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const destroyNotification = (id) => {
    if (isTerminated) return;
    setIsTerminated(true);
    setNots(nots.filter(i => i.id != id))
  }
  console.log('Imrendered')

  const handleDestroy = (id) => {
    if (timeoutId) clearTimeout(timeoutId);
    if (!isTerminated) destroyNotification(id);
  }

  useEffect(() => {
    if (item.lifetime && !isTerminated) {
      const timeX = setTimeout(() => {
        destroyNotification(item.id)
      }, item.lifetime);
      setTimeoutId(timeX);
    }
  }, [item])

  return (
    <CSSTransition key={item.id}
        timeout={300}
        classNames="item"
    >
      <StyledNotification>
        <IconWrap>
          { !!item.cancellableWithoutAction && <CloseIcon onClick={() => handleDestroy(item.id)} width="24" height="24" />}
        </IconWrap>
        <Content>
          <Title>{item.title}</Title>
          {item.content}
        </Content>
      </StyledNotification>
    </CSSTransition>
  )
}
 
const Notifications = () => {

  const [nots, setNots] = useState(notificationsStack);
  const calculatedHeight = useCallback(() => `${nots.length * 80}px`, [nots.length])

  return notificationRoot && ReactDOM.createPortal(
    (
        <NotsWrap customHeight={calculatedHeight}>
          <TransitionGroup>
            {
              nots.map((item) => <Notification 
                key={item.id} 
                item={item} 
                setNots={setNots} 
                nots={nots}/>)
            }
          </TransitionGroup>
        </NotsWrap>
    ),
    notificationRoot
  );
};

export default Notifications;
