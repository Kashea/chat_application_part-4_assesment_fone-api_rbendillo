import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  return (
    <ChatEngine
        height ="100vh"
        projectID="
        081d0466-82be-45c2-afc4-04836cf67e16"
        userName="Rossrival Bendillo"
        userSecret="M@halkita01"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;

