import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { GuideSection } from './pages/GuideSection';
import { SearchResults } from './pages/SearchResults';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide/:sectionId" element={<GuideSection />} />
          <Route path="/guide/:sectionId/:subsectionId" element={<GuideSection />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
