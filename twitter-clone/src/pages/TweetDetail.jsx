import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getTweetDetail } from "../api/tweet";
import PageLayout from "../components/PageLayout";
import { useParams, useNavigate } from "react-router-dom";
import { IoIosMore } from "react-icons/io";
import DeleteModal from "../components/DeleteModal";
import useRelativeTime from "../hooks/useRelativeTime";
import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaHeart,
  FaRegBookmark,
  FaShareSquare,
} from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 53px;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid #eff3f4;
  margin-bottom: 12px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-right: 30px;
  padding: 0;

  &:hover {
    color: #1d9bf0;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
`;

const UsernameInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const DisplayName = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const Username = styled.div`
  font-size: 14px;
  color: #536471;
`;

const Content = styled.div`
  font-size: 20px;
  margin: 20px 0;
`;

const Meta = styled.div`
  font-size: 14px;
  color: #536471;
  border-bottom: 1px solid #eff3f4;
  padding-bottom: 16px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #eff3f4;
  color: #536471;
  font-size: 16px;
`;

const FooterIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  &:hover {
    color: #1d9bf0;
  }
`;

const FooterRetweetIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  &:hover {
    color: #00b97c;
  }
`;

const FooterHeartIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  color: ${({ liked }) => (liked ? "#f8187f" : "#536471")};

  &:hover {
    color: ${({ liked }) => (liked ? "#f8187f" : "#f8187f")};
  }
`;

const MoreButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 9999px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(29, 155, 240, 0.2);
    color: #1d9bf0;
  }

  &:focus {
    outline: none;
  }
`;

const ReplyBox = styled.div`
  display: flex;
  gap: 12px;
  padding-top: 16px;
  border-bottom: 1px solid #eff3f4;
  justify-content: space-between;
`;

const ReplyInput = styled.textarea`
  width: 100%;
  resize: none;
  border: none;
  border-radius: 12px;
  padding: 10px;
  font-size: 16px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #1d9bf0;
  }
`;

const ReplyButton = styled.button`
  background-color: ${(props) => (props.active ? "black" : "#87898c")};
  color: white;
  border: none;
  padding: 8px 16px;
  height: 40px;
  border-radius: 9999px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #1a8cd8;
  }
`;

const CommentList = styled.div`
  padding: 0;
  margin-top: 0;
`;

function TweetDetail() {
  const { tweetId } = useParams();
  const navigate = useNavigate();
  const [tweet, setTweet] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0); // 서버 연동되면 변경
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTweet() {
      try {
        const data = await getTweetDetail(tweetId);
        setTweet(data);
        setLoading(false);
      } catch (err) {
        console.error("트윗 상세 불러오기 실패:", err);
        setLoading(false);
      }
    }

    fetchTweet();
  }, [tweetId]);

  const handleDelete = async () => {
    try {
      await deleteTweet(tweet.tweetId); // 실제 삭제 API 호출
      setShowModal(false);
      navigate("/home");
    } catch (error) {
      console.error("삭제 실패:", error);
    }
  };

  const handleLikeClick = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  if (loading) return <div>불러오는 중...</div>;
  if (!tweet) return <div>트윗을 찾을 수 없습니다.</div>;

  const relativeTime = useRelativeTime(tweet.createdDate);

  return (
    <PageLayout>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <IoArrowBack />
        </BackButton>
        게시물
      </Header>

      <Top>
        <Row>
          <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
          <UsernameInfo>
            <DisplayName>{tweet.username}</DisplayName>
            <Username>{tweet.handle}</Username>
          </UsernameInfo>
        </Row>
        <MoreButton onClick={() => setShowModal(true)}>
          <IoIosMore />
        </MoreButton>
      </Top>

      <Content>{tweet.content}</Content>
      <Meta>{relativeTime} · 123 조회</Meta>

      <Footer>
        <FooterIcon>
          <FaRegComment /> 0
        </FooterIcon>
        <FooterRetweetIcon>
          <FaRetweet /> 0
        </FooterRetweetIcon>
        <FooterHeartIcon onClick={handleLikeClick} liked={liked}>
          {liked ? <FaHeart /> : <FaRegHeart />} {likeCount}
        </FooterHeartIcon>
        <FooterIcon>
          <FaRegBookmark />
        </FooterIcon>
        <FooterIcon>
          <FaShareSquare />
        </FooterIcon>
      </Footer>

      {showModal && (
        <DeleteModal
          onClose={() => setShowModal(false)}
          onDelete={handleDelete}
        />
      )}
    </PageLayout>
  );
}

export default TweetDetail;
