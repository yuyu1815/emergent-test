import React, { useState } from 'react';

// Icon Components
export const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-blue-500">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

export const HomeIcon = ({ active = false }) => (
  <svg viewBox="0 0 24 24" className={`w-6 h-6 ${active ? 'fill-current' : 'stroke-current fill-none'}`}>
    <path strokeWidth={active ? 0 : 2} d="M22 12L12 2 2 12v10h6v-6h4v6h6V12z"/>
  </svg>
);

export const ExploreIcon = ({ active = false }) => (
  <svg viewBox="0 0 24 24" className={`w-6 h-6 ${active ? 'fill-current' : 'stroke-current fill-none'}`}>
    <path strokeWidth={active ? 0 : 2} d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3" strokeWidth={active ? 0 : 2}/>
  </svg>
);

export const NotificationIcon = ({ active = false }) => (
  <svg viewBox="0 0 24 24" className={`w-6 h-6 ${active ? 'fill-current' : 'stroke-current fill-none'}`}>
    <path strokeWidth={active ? 0 : 2} d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path strokeWidth={active ? 0 : 2} d="M13.73 21a2 2 0 01-3.46 0"/>
  </svg>
);

export const MessageIcon = ({ active = false }) => (
  <svg viewBox="0 0 24 24" className={`w-6 h-6 ${active ? 'fill-current' : 'stroke-current fill-none'}`}>
    <path strokeWidth={active ? 0 : 2} d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
);

export const BookmarkIcon = ({ active = false }) => (
  <svg viewBox="0 0 24 24" className={`w-6 h-6 ${active ? 'fill-current' : 'stroke-current fill-none'}`}>
    <path strokeWidth={active ? 0 : 2} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
  </svg>
);

export const ProfileIcon = ({ active = false }) => (
  <svg viewBox="0 0 24 24" className={`w-6 h-6 ${active ? 'fill-current' : 'stroke-current fill-none'}`}>
    <path strokeWidth={active ? 0 : 2} d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
    <circle cx="12" cy="7" r="4" strokeWidth={active ? 0 : 2}/>
  </svg>
);

export const MoreIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none">
    <circle cx="12" cy="12" r="1" strokeWidth="2"/>
    <circle cx="19" cy="12" r="1" strokeWidth="2"/>
    <circle cx="5" cy="12" r="1" strokeWidth="2"/>
  </svg>
);

export const HeartIcon = ({ filled = false }) => (
  <svg viewBox="0 0 24 24" className={`w-5 h-5 ${filled ? 'fill-red-500 text-red-500' : 'stroke-current fill-none'}`}>
    <path strokeWidth={filled ? 0 : 2} d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
);

export const RetweetIcon = ({ active = false }) => (
  <svg viewBox="0 0 24 24" className={`w-5 h-5 ${active ? 'fill-green-500 text-green-500' : 'stroke-current fill-none'}`}>
    <path strokeWidth="2" d="M17 1l4 4-4 4"/>
    <path strokeWidth="2" d="M3 11V9a4 4 0 014-4h14"/>
    <path strokeWidth="2" d="M7 23l-4-4 4-4"/>
    <path strokeWidth="2" d="M21 13v2a4 4 0 01-4 4H3"/>
  </svg>
);

export const ReplyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none">
    <path strokeWidth="2" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
  </svg>
);

export const ShareIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none">
    <path strokeWidth="2" d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/>
    <polyline strokeWidth="2" points="16,6 12,2 8,6"/>
    <line strokeWidth="2" x1="12" y1="2" x2="12" y2="15"/>
  </svg>
);

export const SearchIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none">
    <circle cx="11" cy="11" r="8" strokeWidth="2"/>
    <path strokeWidth="2" d="M21 21l-4.35-4.35"/>
  </svg>
);

export const VerifiedIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-blue-500">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

export const ImageIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
    <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="2"/>
    <polyline points="21,15 16,10 5,21" strokeWidth="2"/>
  </svg>
);

export const CloseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none">
    <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2"/>
    <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2"/>
  </svg>
);

export const MoonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none">
    <path strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
  </svg>
);

export const SunIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none">
    <circle cx="12" cy="12" r="5" strokeWidth="2"/>
    <line x1="12" y1="1" x2="12" y2="3" strokeWidth="2"/>
    <line x1="12" y1="21" x2="12" y2="23" strokeWidth="2"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth="2"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth="2"/>
    <line x1="1" y1="12" x2="3" y2="12" strokeWidth="2"/>
    <line x1="21" y1="12" x2="23" y2="12" strokeWidth="2"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth="2"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth="2"/>
  </svg>
);

// Layout Components
export const TwitterHeader = () => (
  <div className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50 lg:hidden">
    <div className="flex items-center justify-between px-4 py-3">
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?w=150&h=150&fit=crop&crop=face" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>
      <TwitterIcon />
      <div className="w-8"></div>
    </div>
  </div>
);

export const MainLayout = ({ children }) => (
  <div className="max-w-6xl mx-auto flex">
    {children}
  </div>
);

export const LeftSidebar = ({ currentPage, setCurrentPage, onTweetClick, theme, setTheme }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'explore', label: 'Explore', icon: ExploreIcon },
    { id: 'notifications', label: 'Notifications', icon: NotificationIcon },
    { id: 'messages', label: 'Messages', icon: MessageIcon },
    { id: 'bookmarks', label: 'Bookmarks', icon: BookmarkIcon },
    { id: 'profile', label: 'Profile', icon: ProfileIcon },
    { id: 'more', label: 'More', icon: MoreIcon }
  ];

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // Force update the document class for immediate effect
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="w-64 lg:w-72 xl:w-80 h-screen sticky top-0 p-4 hidden lg:flex flex-col">
      <div className="mb-8">
        <TwitterIcon />
      </div>
      
      <nav className="flex-1">
        {menuItems.map(item => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className="nav-item flex items-center space-x-4 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200 w-full text-left mb-2"
              data-testid={`nav-${item.id}`}
            >
              <IconComponent active={currentPage === item.id} />
              <span className={`text-xl ${currentPage === item.id ? 'font-bold' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="space-y-4">
        <button
          onClick={handleThemeToggle}
          className="theme-toggle flex items-center space-x-4 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200 w-full text-left"
          data-testid="theme-toggle"
        >
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          <span className="text-xl">
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
          </span>
        </button>
        
        <button
          onClick={onTweetClick}
          className="tweet-btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full w-full transition-colors duration-200"
          data-testid="tweet-button"
        >
          Tweet
        </button>
        
        <div className="user-profile flex items-center space-x-3 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200">
          <img 
            src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?w=150&h=150&fit=crop&crop=face" 
            alt="Profile" 
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <div className="font-bold">You</div>
            <div className="text-gray-500">@yourhandle</div>
          </div>
          <MoreIcon />
        </div>
      </div>
    </div>
  );
};

export const MainFeed = ({ tweets, onTweetAction, currentUser, onNewTweet }) => {
  const handleNewTweet = (content) => {
    // Create a mock new tweet with the actual content
    const newTweet = {
      id: tweets.length + 1,
      user: currentUser,
      content,
      timestamp: 'now',
      likes: 0,
      retweets: 0,
      replies: 0,
      image: null,
      liked: false,
      retweeted: false
    };
    
    // Call the parent's onNewTweet function with the new tweet data
    onNewTweet(newTweet);
  };

  return (
    <div className="flex-1 max-w-xl border-x border-gray-200 dark:border-gray-800 min-h-screen pt-16 lg:pt-0">
      <div className="sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 p-4 z-10">
        <h1 className="text-xl font-bold">Home</h1>
      </div>
      
      <TweetComposerInline currentUser={currentUser} onNewTweet={handleNewTweet} />
      
      <div>
        {tweets.map(tweet => (
          <TweetCard 
            key={tweet.id} 
            tweet={tweet} 
            onAction={onTweetAction}
          />
        ))}
      </div>
    </div>
  );
};

export const RightSidebar = ({ trendingTopics, whoToFollow }) => (
  <div className="w-80 p-4 hidden xl:block">
    <div className="sticky top-4 space-y-4">
      <div className="relative">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search Twitter"
          className="w-full bg-gray-100 dark:bg-gray-900 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
          <SearchIcon />
        </div>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
        <h2 className="text-xl font-bold mb-3">What's happening</h2>
        {trendingTopics.map((topic, index) => (
          <div key={index} className="py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
            <div className="font-bold">{topic.topic}</div>
            <div className="text-gray-500 text-sm">{topic.tweets}</div>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
        <h2 className="text-xl font-bold mb-3">Who to follow</h2>
        {whoToFollow.map((user, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3">
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold">{user.name}</span>
                  {user.verified && <VerifiedIcon />}
                </div>
                <div className="text-gray-500">@{user.username}</div>
              </div>
            </div>
            <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-1 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const TweetCard = ({ tweet, onAction }) => (
  <div className="tweet-card border-b border-gray-200 dark:border-gray-800 p-4 hover:bg-gray-50 dark:hover:bg-gray-950 transition-colors duration-200">
    <div className="flex space-x-3">
      <img 
        src={tweet.user.avatar} 
        alt={tweet.user.name}
        className="w-12 h-12 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-1">
          <span className="font-bold">{tweet.user.name}</span>
          {tweet.user.verified && <VerifiedIcon />}
          <span className="text-gray-500">@{tweet.user.username}</span>
          <span className="text-gray-500">·</span>
          <span className="text-gray-500">{tweet.timestamp}</span>
        </div>
        
        <div className="mb-3">
          <p className="whitespace-pre-wrap">{tweet.content}</p>
          {tweet.image && (
            <div className="mt-3 rounded-xl overflow-hidden">
              <img 
                src={tweet.image} 
                alt="Tweet media"
                className="w-full max-h-80 object-cover"
              />
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between max-w-md">
          <button
            onClick={() => onAction(tweet.id, 'reply')}
            className="tweet-reply-btn flex items-center space-x-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 p-2 rounded-full transition-colors duration-200"
            data-testid={`reply-${tweet.id}`}
          >
            <ReplyIcon />
            <span className="text-sm">{tweet.replies}</span>
          </button>
          
          <button
            onClick={() => onAction(tweet.id, 'retweet')}
            className={`tweet-retweet-btn flex items-center space-x-2 ${tweet.retweeted ? 'text-green-500' : 'text-gray-500'} hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-950 p-2 rounded-full transition-colors duration-200`}
            data-testid={`retweet-${tweet.id}`}
          >
            <RetweetIcon active={tweet.retweeted} />
            <span className="text-sm">{tweet.retweets}</span>
          </button>
          
          <button
            onClick={() => onAction(tweet.id, 'like')}
            className={`tweet-like-btn flex items-center space-x-2 ${tweet.liked ? 'text-red-500' : 'text-gray-500'} hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950 p-2 rounded-full transition-colors duration-200`}
            data-testid={`like-${tweet.id}`}
          >
            <HeartIcon filled={tweet.liked} />
            <span className="text-sm">{tweet.likes}</span>
          </button>
          
          <button 
            className="tweet-share-btn flex items-center space-x-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 p-2 rounded-full transition-colors duration-200"
            data-testid={`share-${tweet.id}`}
          >
            <ShareIcon />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export const TweetComposerInline = ({ currentUser, onNewTweet }) => {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (content.trim()) {
      // Call onNewTweet with the actual content
      onNewTweet(content);
      setContent('');
    }
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-800 p-4">
      <div className="flex space-x-3">
        <img 
          src={currentUser.avatar} 
          alt={currentUser.name}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening?"
            className="tweet-composer-textarea w-full bg-transparent text-xl placeholder-gray-500 resize-none focus:outline-none min-h-[120px]"
            rows="3"
            data-testid="tweet-composer-textarea"
          />
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-4">
              <button 
                className="text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 p-2 rounded-full transition-colors duration-200"
                data-testid="image-button"
              >
                <ImageIcon />
              </button>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="text-sm text-gray-500">
                {280 - content.length}
              </div>
              <button
                onClick={handleSubmit}
                disabled={!content.trim() || content.length > 280}
                className="tweet-submit-btn bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-2 px-6 rounded-full transition-colors duration-200"
                data-testid="tweet-submit"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TweetComposer = ({ currentUser, onSubmit, onClose }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content, image);
      setContent('');
      setImage(null);
    }
  };

  return (
    <div className="bg-white dark:bg-black rounded-xl max-w-xl w-full mx-4">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        <div></div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors duration-200"
        >
          <CloseIcon />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex space-x-3">
          <img 
            src={currentUser.avatar} 
            alt={currentUser.name}
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's happening?"
              className="w-full bg-transparent text-xl placeholder-gray-500 resize-none focus:outline-none min-h-[200px]"
              rows="8"
              autoFocus
            />
            
            {image && (
              <div className="mt-3 relative">
                <img src={image} alt="Upload preview" className="w-full rounded-xl max-h-80 object-cover" />
                <button
                  onClick={() => setImage(null)}
                  className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 transition-opacity duration-200"
                >
                  <CloseIcon />
                </button>
              </div>
            )}
            
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center space-x-4">
                <button className="text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 p-2 rounded-full transition-colors duration-200">
                  <ImageIcon />
                </button>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-sm text-gray-500">
                  {280 - content.length}
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={!content.trim() || content.length > 280}
                  className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-2 px-6 rounded-full transition-colors duration-200"
                >
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Modal = ({ children, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div onClick={onClose} className="absolute inset-0"></div>
    <div className="relative z-10">
      {children}
    </div>
  </div>
);