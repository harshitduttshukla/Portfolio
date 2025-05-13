import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react'; // You can add more icons if needed

const VideoCV: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoUrl = "/video/introduction.mp4"; // Replace with your video URL

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-blue-400">My Video CV</h2>
        <p className="text-lg text-gray-300 mb-8">
          Watch this video to learn more about my skills, experience, and aspirations. This video highlights my technical
          background and approach to problem-solving.
        </p>

        {/* Video container */}
        <div className="relative w-full max-w-2xl mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          {/* Thumbnail and play button */}
          {!isPlaying && (
            <div
              className="absolute inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center cursor-pointer"
              onClick={handlePlayPause}
            >
              <div className="p-4 bg-blue-500/50 rounded-full">
                <Play size={40} className="text-white" />
              </div>
            </div>
          )}

          {/* Video element */}
          <video
            ref={videoRef}
            className="w-full h-auto"
            src={videoUrl}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            controls
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mt-8 text-lg text-gray-300">
          <p>
            This video CV allows you to get a better sense of who I am and what I bring to the table as a software engineer
            and problem solver.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoCV;