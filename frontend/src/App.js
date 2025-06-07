import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  MainLayout, 
  TwitterHeader,
  LeftSidebar, 
  MainFeed, 
  RightSidebar, 
  TweetComposer,
  Modal 
} from './components';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showTweetModal, setShowTweetModal] = useState(false);
  const [theme, setTheme] = useState('light');
  
  // Initialize theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('twitter-theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Update theme and save to localStorage
  useEffect(() => {
    localStorage.setItem('twitter-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  const [tweets, setTweets] = useState([
    {
      id: 1,
      user: {
        name: 'Sarah Chen',
        username: 'sarahdev',
        avatar: 'https://images.pexels.com/photos/3419650/pexels-photo-3419650.jpeg?w=150&h=150&fit=crop&crop=face',
        verified: true
      },
      content: 'Just shipped a new feature! The feeling when your code works on the first try... 🚀✨ #coding #developer',
      timestamp: '2h',
      likes: 234,
      retweets: 12,
      replies: 8,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop',
      liked: false,
      retweeted: false
    },
    {
      id: 2,
      user: {
        name: 'Tech Enthusiast',
        username: 'techie2025',
        avatar: 'https://images.pexels.com/photos/6484132/pexels-photo-6484132.jpeg?w=150&h=150&fit=crop&crop=face',
        verified: false
      },
      content: 'The future of AI is here and it\'s incredible! What are your thoughts on the latest developments? 🤖',
      timestamp: '4h',
      likes: 89,
      retweets: 23,
      replies: 15,
      liked: true,
      retweeted: false
    },
    {
      id: 3,
      user: {
        name: 'Creative Studio',
        username: 'creativehub',
        avatar: 'https://images.unsplash.com/photo-1517840933437-c41356892b35?w=150&h=150&fit=crop&crop=face',
        verified: true
      },
      content: 'Beautiful sunset from our team retreat! Sometimes the best ideas come when you step away from the screen 🌅',
      timestamp: '6h',
      likes: 456,
      retweets: 67,
      replies: 24,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=300&fit=crop',
      liked: false,
      retweeted: true
    },
    {
      id: 4,
      user: {
        name: 'Food Explorer',
        username: 'foodie_life',
        avatar: 'https://images.unsplash.com/photo-1507522682902-781c2e75716b?w=150&h=150&fit=crop&crop=face',
        verified: false
      },
      content: 'Made these colorful donuts for the weekend! Recipe in the comments 🍩🌈',
      timestamp: '8h',
      likes: 178,
      retweets: 34,
      replies: 42,
      image: 'https://images.unsplash.com/photo-1506224477000-07aa8a76be20?w=500&h=300&fit=crop',
      liked: true,
      retweeted: false
    },
    {
      id: 5,
      user: {
        name: 'Mountain Explorer',
        username: 'nature_lover',
        avatar: 'https://images.pexels.com/photos/32458841/pexels-photo-32458841.jpeg?w=150&h=150&fit=crop&crop=face',
        verified: false
      },
      content: 'Nothing beats this view! 🏔️ Nature therapy is the best therapy. Where\'s your favorite place to disconnect?',
      timestamp: '12h',
      likes: 312,
      retweets: 45,
      replies: 18,
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&h=300&fit=crop',
      liked: false,
      retweeted: false
    },
    {
      id: 6,
      user: {
        name: 'StartupLife',
        username: 'startup_journey',
        avatar: 'https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?w=150&h=150&fit=crop&crop=face',
        verified: true
      },
      content: 'Team collaboration at its finest! Remote work doesn\'t mean working alone 💪 #teamwork #startup',
      timestamp: '1d',
      likes: 523,
      retweets: 89,
      replies: 31,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?w=500&h=300&fit=crop',
      liked: true,
      retweeted: false
    }
  ]);

  const currentUser = {
    name: 'You',
    username: 'yourhandle',
    avatar: 'https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?w=150&h=150&fit=crop&crop=face'
  };

  const trendingTopics = [
    { topic: '#React2025', tweets: '45.2K Tweets' },
    { topic: '#TechTrends', tweets: '23.8K Tweets' },
    { topic: '#WebDevelopment', tweets: '89.1K Tweets' },
    { topic: '#AI', tweets: '156.7K Tweets' },
    { topic: '#JavaScript', tweets: '234.5K Tweets' }
  ];

  const whoToFollow = [
    {
      name: 'ReactJS',
      username: 'reactjs',
      avatar: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=150&h=150&fit=crop&crop=face',
      verified: true
    },
    {
      name: 'GitHub',
      username: 'github',
      avatar: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=150&h=150&fit=crop&crop=face',
      verified: true
    },
    {
      name: 'TechCrunch',
      username: 'techcrunch',
      avatar: 'https://images.pexels.com/photos/32418796/pexels-photo-32418796.jpeg?w=150&h=150&fit=crop&crop=face',
      verified: true
    }
  ];

  const handleTweetAction = (tweetId, action) => {
    setTweets(tweets.map(tweet => {
      if (tweet.id === tweetId) {
        const updatedTweet = { ...tweet };
        switch (action) {
          case 'like':
            updatedTweet.liked = !updatedTweet.liked;
            updatedTweet.likes += updatedTweet.liked ? 1 : -1;
            break;
          case 'retweet':
            updatedTweet.retweeted = !updatedTweet.retweeted;
            updatedTweet.retweets += updatedTweet.retweeted ? 1 : -1;
            break;
          case 'reply':
            updatedTweet.replies += 1;
            break;
          default:
            break;
        }
        return updatedTweet;
      }
      return tweet;
    }));
  };

  const addNewTweet = (tweetData) => {
    // If tweetData is a string (from modal), convert to tweet object
    if (typeof tweetData === 'string') {
      const newTweet = {
        id: tweets.length + 1,
        user: currentUser,
        content: tweetData,
        timestamp: 'now',
        likes: 0,
        retweets: 0,
        replies: 0,
        image: null,
        liked: false,
        retweeted: false
      };
      setTweets([newTweet, ...tweets]);
      setShowTweetModal(false);
    } else {
      // If tweetData is already an object (from inline composer)
      setTweets([tweetData, ...tweets]);
    }
  };

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <TwitterHeader />
        <MainLayout>
          <LeftSidebar 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            onTweetClick={() => setShowTweetModal(true)}
            theme={theme}
            setTheme={setTheme}
          />
          <MainFeed 
            tweets={tweets}
            onTweetAction={handleTweetAction}
            currentUser={currentUser}
            onNewTweet={() => setShowTweetModal(true)}
          />
          <RightSidebar 
            trendingTopics={trendingTopics}
            whoToFollow={whoToFollow}
          />
        </MainLayout>
        
        {showTweetModal && (
          <Modal onClose={() => setShowTweetModal(false)}>
            <TweetComposer 
              currentUser={currentUser}
              onSubmit={addNewTweet}
              onClose={() => setShowTweetModal(false)}
            />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default App;