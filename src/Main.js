import {BrowserRouter,Routes,Route, Router} from 'react-router-dom';
import App from './component/App.js';
import Mainpage from './pages/MainPage.js';
import Page01 from './pages/page01.js';
import Page02 from './pages/page02.js';
import Page03 from './pages/page03.js';

function Main(){
  return(
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Mainpage />}/>
          <Route path="/page01" element={<Page01 />} />
          <Route path="/page02" element={<Page02 />} />
          <Route path="/page03" element={<Page03 />} />

        </Routes>
      </App>
    </BrowserRouter>
  )
}
export default Main