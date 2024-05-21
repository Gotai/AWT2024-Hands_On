import { useState, useEffect } from 'react';
import { socket } from './services/socket.js';
import NewsFeed from './NewsFeed.jsx'
import NewsCard from './components/newscard.jsx';
import './index.css'

import { ConnectionState } from './components/ConnectionState.jsx';
import { ConnectionManager } from './components/ConnectionManager.jsx';
import { Events } from './components/Events.jsx';

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [NewsDataEvents, setNewsDataEvents] = useState([]);
  const [EventList, setEventList] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onNewsDataEvent(value) {
      setNewsDataEvents(previous => [...previous, value.data]);
    }

    function onEvent(value) {
      setEventList(previous => [...previous, value.eventName]);
    }


    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('NewsData', onNewsDataEvent);
    socket.on('NewsData', onEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('NewsData', onNewsDataEvent);
    };
  }, []);

  return (
    <div className="App">
      <ConnectionState isConnected={ isConnected } />
      <Events events={ EventList } />
      <ConnectionManager />
      <NewsFeed NewsData={NewsDataEvents}/>
    </div>
  );
}
