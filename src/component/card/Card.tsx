import React, { useState } from "react";
import { Data } from "../data/Data";
import { DataType } from "../data/Data.interface";
import {
  Nav,
  Top,
  Dot,
  Post,
  Main,
  Icon,
  Event,
  Name,
  Date,
  Image,
  Tiltle,
  Layout,
  Wrapper,
  Response,
  Profile,
  Content,
  Receipient,
  ContentWrapper,
} from "./Card.styles";

const Card: React.FC = () => {
  const [messageId, setMessageId] = useState<number | null>(null);
  const [notifications, setNotifications] = useState(Data);

  const noOfUnread = notifications.filter(({ isRead }) => !isRead).length;

  const handleClick = (notification: typeof notifications[number]) => {
    setMessageId(notification.id);
    if (!notification.isRead) {
      const newNofication = notifications.map((data) => {
        if (data.id === notification.id) {
          data.isRead = true;
        }
        return data;
      });
      setNotifications(newNofication);
    }
  };

  return (
    <Layout>
      <Wrapper>
        <Nav>
          <Top>
            <Tiltle>Notifications</Tiltle>
            <Icon>{noOfUnread}</Icon>
          </Top>

          <Receipient>Mark all as read</Receipient>
        </Nav>

        <ContentWrapper>
          {notifications.map((notification) => (
            <Content key={notification.id} className={!notification.isRead ? "background_dark" : "background_light"}>
              <Main onClick={() => handleClick(notification)}>
                <Image src={notification.image} alt="profile img" />
                <Profile>
                  <Name>{notification.name}</Name> <Post>{notification.post}</Post> <Event>{notification.event}{!notification.isRead && <Dot />}</Event>
                  
                </Profile>
              </Main>
              <Date>{notification.date}</Date>

              {notification.id === messageId && notification.message ? (
                <Response>{notification.message}</Response>
              ) : null}
            </Content>
          ))}
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Card;
