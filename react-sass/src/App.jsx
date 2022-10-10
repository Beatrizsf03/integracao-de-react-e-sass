import mainContent from './components/mainContent';
import sidebar from './components/sidebar';

import './styles/components/app.sass';

function App() {
  return (
    <div id="portfolio">
      <h1>Beatriz Ferreira</h1>
      <sidebar />
      <mainContent />
    </div>
  )
}

export default App
