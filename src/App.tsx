import Form from './components/Form/Form';
import SideBanner from './components/SideBanner/SideBanner';

function App() {
  return (
    <main className="bg-gradient-to-b from-[#CA38ED] xl:from-black to-black flex overflow-auto min-h-[100vh]">
      <Form />
      <SideBanner />
    </main>
  );
}

export default App;
