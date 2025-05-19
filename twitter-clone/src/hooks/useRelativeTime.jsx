import { useMemo } from "react";

function useRelativeTime(dateString) {
  const relativeTime = useMemo(() => {
    const now = new Date();
    const time = new Date(dateString);
    const diff = Math.floor((now - time) / 1000); // 초 단위

    if (diff < 60) return `${diff}초 전`;
    if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
    if (diff < 2592000) return `${Math.floor(diff / 86400)}일 전`;

    // 그 외는 절대 날짜로
    return time.toLocaleDateString("ko-KR");
  }, [dateString]);

  return relativeTime;
}

export default useRelativeTime;
