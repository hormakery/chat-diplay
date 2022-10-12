import styled from "styled-components";

export const Layout = styled.div`
  color: darkblue;
  background-color: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
`;

export const Tiltle = styled.h2`
  color: #000;
  font-weight: 800;

  @media (max-width: 559px) {
    font-size: 1rem;
  }
`;

export const Icon = styled.div`
  height: 20px;
  width: 25px;
  color: #fff;
  font-size: 0.6rem;
  text-align: center;
  padding: 0.25rem;
  margin-left: 10px;
  border-radius: 3px;
  background-color: #143c85;
`;

export const Receipient = styled.span`
  font-size: 0.8rem;
  cursor: pointer;

  &: hover {
    color: darkblue;
    font-weight: 700;
    transition: 0.3s all ease-in-out;
  }
  @media (max-width: 559px) {
    font-size: 0.6rem;
  }
`;

export const ContentWrapper = styled.div`
  .background_light {
    background-color: #fff;
  }

  .background_dark {
    background-color: #c2c5ca;
  }
`;

export const Content = styled.div`
  diplay: flex;
  flex: 1;
  padding: 0.5rem;
  margin-top: 2rem;
  border-radius: 0.5rem;
  flex-direction: column;

  @media (max-width: 559px) {
    padding-left: 0.5rem;
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 559px) {
    flex: 1;
  }
`;

export const Image = styled.img`
  height: 40px;
  border-radius: 50%;
`;

export const Profile = styled.div`
  cursor: pointer;
  font-size: 0.7rem;
  margin-left: 0.5rem;
  letter-spacing: 0.04rem;


  @media (max-width: 559px) {
    overflow: none;
    margin-bottom: 0.7rem;
    word-break: keep-all;
  }
`;

export const Name = styled.b`
  color: #000;
  font-weight: 800;

  &:hover {
    color: darkblue;
    font-weight: bold;
    transition: 0.4s all ease-in-out;
  }

  @media (max-width: 559px) {
    white-space: nowrap;
  }
`;

export const Post = styled.span`
  color: gray;
  margin-left: 0.5rem;

  &::after {
    @media (max-width: 550px) {
      text-align: left;
    }
  }
`;

export const Event = styled.span`
  color: darkblue;
  font-weight: 500;
  margin-left: 0.5rem;

  &: hover {
    font-weight: 700;
    transition: 0.3s all ease-in-out;
  }
`;

export const Dot = styled.span`
  width: 3px;
  height: 3px;
  top: -3px;
  bottom: -0.5rem;
  position: relative;
  margin-left: 0.4rem;
  border-radius: 100%;
  align-items: center;
  display: inline-block;
  background-color: red;
  justify-content: center;

  @media (max-width: 559px) {
    position: relative;
  }
`;

export const Date = styled.span`
  color: gray;
  top: -0.7rem;
  font-size: 0.7rem;
  margin-left: 3rem;
  position: relative;

  @media (max-width: 559px) {
    margin-top: 0.7rem;
  }
`;

export const Response = styled.div`
  color: gray;
  z-index: 2;
  top: 1rem;
  display: block;
  padding: 1.5rem;
  font-size: 0.7rem;
  line-height: 1rem;
  border-radius: 5px;
  position: relative;
  margin-left: 3rem;
  background-color: #fff;
  transition: 0.3s all;
  border: 1px solid lightgray;
  // visibility: hidden;

  &: hover {
    background-color: #c2c5ca;
  }
`;
