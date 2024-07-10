import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './untils/appStore';

function App() {
  return (
    <div className='overflow-y-scroll'>
      <Provider store={appStore}>
        <Body/>
      </Provider>
      
    </div>
  );
}

export default App;
