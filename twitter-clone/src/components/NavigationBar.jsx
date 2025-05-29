import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { PiBell } from "react-icons/pi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaRegBookmark } from "react-icons/fa";
import { RiFileList2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi";
import { IoEllipsisHorizontalCircleOutline } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { IoIosMore } from "react-icons/io";

const NavWrapper = styled.nav`
  height: 100vh;
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1000;
`;

const MenuArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 12px;
  margin-left: 12px;
  font-size: 24px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 12px;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 19px;
  padding: 11px;
  color: inherit;
  width: fit-content;

  &:hover {
    background-color: #e7e7e8;
    border-radius: 9999px;
    color: inherit;
    font-weight: bold;
  }

  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
`;

const PostButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  border-radius: 9999px;
  padding: 14px 0;
  font-weight: bold;
  margin-top: 20px;
  font-size: 16px;
  width: 230px;
  cursor: pointer;
`;

const Profile = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin-top: auto;
  gap: 10px;
  border-radius: 9999px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  width: fit-content;

  &:hover {
    background-color: #e7e7e8;
    color: inherit;
  }
`;

const ProfileAvatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const ProfileInfoLeft = styled.div`
  display: flex;
`;

const DisplayName = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const Username = styled.div`
  color: #536471;
  font-size: 13px;
`;

function NavigationBar() {
  const { pathname } = useLocation();

  const userId = localStorage.getItem("userId");
  const username = localStorage.getItem("username");
  const handle = localStorage.getItem("handle");

  return (
    <NavWrapper>
      <MenuArea>
        <Logo>
          <FaXTwitter />
        </Logo>
        <NavItem to="/home" $active={pathname === "/home"}>
          <IconWrapper>
            <GoHomeFill />
          </IconWrapper>
          Home
        </NavItem>
        <NavItem to="/explore">
          <IconWrapper>
            <HiMiniMagnifyingGlass />
          </IconWrapper>
          Explore
        </NavItem>
        <NavItem to="/notifications">
          <IconWrapper>
            <PiBell />
          </IconWrapper>
          Notifications
        </NavItem>
        <NavItem to="/messages">
          <IconWrapper>
            <HiOutlineEnvelope />
          </IconWrapper>
          Messages
        </NavItem>
        <NavItem to="/lists">
          <IconWrapper>
            <RiFileList2Line />
          </IconWrapper>
          Lists
        </NavItem>
        <NavItem to="/bookmarks">
          <IconWrapper>
            <FaRegBookmark />
          </IconWrapper>
          Bookmarks
        </NavItem>
        <NavItem to="/communities">
          <IconWrapper>
            <HiOutlineUsers />
          </IconWrapper>
          Communities
        </NavItem>
        <NavItem
          to={`/users/${userId}`}
          $active={pathname.startsWith(`/users/${userId}`)}
        >
          <IconWrapper>
            <FaRegUser />
          </IconWrapper>
          Profile
        </NavItem>

        <NavItem to="#">
          <IconWrapper>
            <IoEllipsisHorizontalCircleOutline />
          </IconWrapper>
          More
        </NavItem>
        <PostButton>Post</PostButton>
      </MenuArea>

      <Profile to={`/users/${userId}`}>
        <ProfileInfoLeft>
          <ProfileAvatar
            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
            alt="profile 이미지"
          />
          <ProfileInfo>
            <DisplayName>{username}</DisplayName>
            <Username>{handle}</Username>
          </ProfileInfo>
        </ProfileInfoLeft>
        <IoIosMore />
      </Profile>
    </NavWrapper>
  );
}

export default NavigationBar;
