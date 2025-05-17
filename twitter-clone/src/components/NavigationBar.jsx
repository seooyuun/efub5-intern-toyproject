import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import {
  FaUser,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaUsers,
  FaCirclePlus,
} from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  width: 259px;
  padding: 0 8px;
  height: 100vh;
`;

const Logo = styled.img``;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 19px;
  padding: 11px;

  &:hover {
    background-color: #e7e7e8;
    border-radius: 9999px;
  }

  font-weight: ${(props) => (props.active ? "bold" : "normal")};
`;

const PostButton = styled.button`
  background-color: #1d9bf0;
  color: white;
  border: none;
  border-radius: 9999px;
  padding: 14px 0;
  font-weight: bold;
  margin-top: 20px;
  font-size: 16px;
  width: 90%;
  cursor: pointer;

  &:hover {
    background-color: #1a8cd8;
  }
`;

function NavigationBar() {
  const { pathname } = useLocation();

  return (
    <NavWrapper>
      <NavItem to="/home" active={pathname === "/home" ? 1 : 0}>
        <FaHome /> Home
      </NavItem>
      <NavItem to="/explore">
        <FaHashtag /> Explore
      </NavItem>
      <NavItem to="/notifications">
        <FaBell /> Notifications
      </NavItem>
      <NavItem to="/messages">
        <FaEnvelope /> Messages
      </NavItem>
      <NavItem to="/lists">
        <FaUsers /> Lists
      </NavItem>
      <NavItem to="/bookmarks">
        <FaBookmark /> Bookmarks
      </NavItem>
      <NavItem to="/communities">
        <FaUsers /> Communities
      </NavItem>
      <NavItem to="/premium">
        <FaCirclePlus /> Premium
      </NavItem>
      <NavItem to="/profile" active={pathname === "/profile" ? 1 : 0}>
        <FaUser /> Profile
      </NavItem>
      <PostButton>Post</PostButton>
    </NavWrapper>
  );
}

export default NavigationBar;
