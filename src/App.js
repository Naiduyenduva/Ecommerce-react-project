import './App.css';
import { Routes,Route } from 'react-router-dom';
import LandingPage from './stores/pages/LandingPage';
import MobilePage from './stores/pages/MobilePage';
import ComputersPage from './stores/pages/ComputersPage';
import BooksPage from './stores/pages/BooksPage';
import AcPage from './stores/pages/AcPage';
import FridgePage from './stores/pages/FridgePage';
import FurniturePage from './stores/pages/FurniturePage';
import MenPage from './stores/pages/MenPage';
import WatchePage from './stores/pages/WatchPage';
import WomenPage from './stores/pages/WomenPage';
import SpeakerPage from './stores/pages/SpeakerPage';
import TvPage from './stores/pages/TvPage';
import KitchenPage from './stores/pages/KitchenPage';
import MobileSingle from './SingleProducts/MobileSingle';
import ComputerSingle from './SingleProducts/ComputerSingle';
import BookSingle from './SingleProducts/BookSingle';
import Cartpage from './stores/pages/Cartpage';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/mobiles' element={<MobilePage />}/>
        <Route path='/computers' element={<ComputersPage />}/>
        <Route path='/books' element={<BooksPage />}/>
        <Route path='/acs' element={<AcPage />}/>
        <Route path='/fridges' element={<FridgePage />}/>
        <Route path='/furnitures' element={<FurniturePage />}/>
        <Route path='/watches' element={<WatchePage />}/>
        <Route path='/women' element={<WomenPage />}/>
        <Route path='/men' element={<MenPage />}/>
        <Route path='/speakers' element={<SpeakerPage />}/>
        <Route path='/tvs' element={<TvPage />}/>
        <Route path='/kitchens' element={<KitchenPage />}/>
        <Route path="/mobiles/:id" element={<MobileSingle />} />
        <Route path="/computers/:id" element={<ComputerSingle />} />
        <Route path="/books/:id" element={<BookSingle />} />
        <Route path="/watches/:id" element={<BookSingle />} />
        <Route path="/Cart" element={<Cartpage />} />

      </Routes>
    </div>
  );
}

export default App;
