import React, { useState, useEffect } from 'react';

const LiveStream = ({ apiKey, channelId }) => {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    const fetchLiveStream = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`);
        const data = await response.json();

        if (data.items.length > 0) {
          setVideoId(data.items[0].id.videoId);
        } else {
          setVideoId(null);
        }
      } catch (error) {
        console.error('Failed to fetch live stream:', error);
      }
    };

    const interval = setInterval(fetchLiveStream, 60 * 1000); // Обновляем каждую минуту
    fetchLiveStream();

    return () => clearInterval(interval);
  }, [apiKey, channelId]);

  return (
        
    <div className='stream'>
      {videoId ? (
        <iframe
          width="900px"
          height="600px"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Live Stream"
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Нет активной трансляции</p>
      )}
    </div>
  );
};

export default LiveStream;