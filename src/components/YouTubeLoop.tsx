import React, { useEffect, useRef } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface YouTubeLoopProps {
  videoId: string;
  start: number;
  end: number;
  className?: string;
}

export default function YouTubeLoop({ videoId, start, end, className }: YouTubeLoopProps) {
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const onReady: YouTubeProps['onReady'] = (event) => {
    playerRef.current = event.target;
    event.target.mute();
    event.target.playVideo();
  };

  const onStateChange: YouTubeProps['onStateChange'] = (event) => {
    // PLAYING state is 1
    if (event.data === 1) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        if (playerRef.current) {
          const currentTime = playerRef.current.getCurrentTime();
          if (currentTime >= end || currentTime < start) {
            playerRef.current.seekTo(start);
          }
        }
      }, 500); // Check every 500ms
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      // If it ended (0) or paused (2), try to play again to keep it looping
      if (event.data === 0) {
        playerRef.current?.seekTo(start);
        playerRef.current?.playVideo();
      }
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      modestbranding: 1,
      playsinline: 1,
      rel: 0,
      showinfo: 0,
      start: start,
      end: end,
    },
  };

  return (
    <div className={`pointer-events-none ${className}`}>
      <YouTube 
        videoId={videoId} 
        opts={opts} 
        onReady={onReady} 
        onStateChange={onStateChange}
        className="w-full h-full"
        iframeClassName="w-full h-full object-cover"
      />
    </div>
  );
}
