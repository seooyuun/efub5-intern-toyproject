import { useMemo } from "react";

function useRelativeTime(dateString) {
  const relativeTime = useMemo(() => {
    if (!dateString) return "";

    const now = new Date();
    const time = new Date(dateString);
    if (isNaN(time)) return "";

    const diff = Math.floor((now - time) / 1000);

    if (diff < 60) return `${diff}초 전`;
    if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
    if (diff < 2592000) return `${Math.floor(diff / 86400)}일 전`;

    return time.toLocaleDateString("ko-KR");
  }, [dateString]);

  return relativeTime;
}

export default useRelativeTime;
