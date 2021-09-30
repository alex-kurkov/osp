import { useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '../../ui/icons/close-icon';
import { removeNotification } from '../../services/reducers/control/controlSlice';

const NotsWrap = styled.div`
  max-width: 475px;
  width: 100%;
  margin: 0 auto;
  height: ${p => p.customHeight};
  transition: height 300ms ease-in-out;
  display: flex;
  overflow: hidden;
  flex-flow: column;
  gap: 10px;
`
const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const StyledNotification = styled.article`
  position: relative;
  height: 70px;
  border-radius: 20px;
  width: 100%;
  padding: 4px 36px 4px 8px;
  background-color:${p => p.theme.colors.activeElementBg};
  opacity: .9;
  animation: ${appear} 300ms ease-in-out;
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
  text-overflow: ellipsis;
  word-wrap: nowrap;
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

const Notifications = () => {
  const { notifications } = useSelector(s => s.control);
  const dispatch = useDispatch();

  const calculatedHeight = useCallback(() => {
    if (notifications.length > 3) {
      return `${(3 * 70) + 20}px`
    } else {
      return `${(notifications.length * 80) - 10}px`;
    }
  }, [notifications])

  return notificationRoot && ReactDOM.createPortal(
    (
        <NotsWrap customHeight={calculatedHeight}>
            {
              notifications.map((item) => (
                <StyledNotification key={item.id} >
                  <IconWrap>
                    <CloseIcon onClick={() => dispatch(removeNotification(item.id))} width="24" height="24" />
                  </IconWrap>
                  <Title>{item.title}</Title>
                  <Content>{item.content}</Content>
                </StyledNotification>            
              ))
            }
        </NotsWrap>
    ),
    notificationRoot
  );
};

export default Notifications;
