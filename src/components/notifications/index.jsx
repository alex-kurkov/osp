import { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CloseIcon from '../../ui/icons/close-icon';
import './styles.css';
import { removeNotification } from '../../services/reducers/control/controlSlice';

const NotsWrap = styled.div`
  max-width: 475px;
  width: 100%;
  margin: 0 auto;
  height: ${p => p.customHeight};
  transition: height 300ms ease-in-out;
`

const StyledNotification = styled.article`
  position: relative;
  height: 70px;
  border-radius: 20px;
  width: 100%;
  padding: 4px 36px 4px 8px;
  background-color:${p => p.theme.colors.activeElementBg};
  opacity: .9;
  margin-bottom: 10px;
  &:last-of-type {
    margin-bottom: 20px;
  }
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

const notificationRoot = document.getElementById('notification');

const Notification = ({ item }) => {
  const dispatch = useDispatch();
  const { id, title, content } = item;

/*   useEffect(() => {
    if (lifetime) {
      setTimeout(() => {
        dispatch(removeNotification(id));
      }, lifetime);
    }
  }, []) */

  return (
    <CSSTransition
      timeout={300}
      classNames="item">
      <StyledNotification>
        <IconWrap>
          <CloseIcon onClick={() => dispatch(removeNotification(id))} width="24" height="24" />
        </IconWrap>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </StyledNotification>
    </ CSSTransition>
  )
}
 
const Notifications = () => {
  const { notifications } = useSelector(s => s.control);

  const calculatedHeight = useCallback(() => {
    if (notifications.length > 3) {
      return `${3 * 80}px`
    } else {
      return `${notifications.length * 80}px`;
    }
  }, [notifications])

  return notificationRoot && ReactDOM.createPortal(
    (
        <NotsWrap customHeight={calculatedHeight}>
          <TransitionGroup>
            {
              notifications.map((item) => <Notification key={item.id} item={item} />)
            }
          </TransitionGroup>
        </NotsWrap>
    ),
    notificationRoot
  );
};

export default Notifications;
