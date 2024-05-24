import Calculator from './component/Calculator'
import Hero from './component/Hero';

function App() {


  return (
    <section className="max-container padding-container w-full flex-col flexCenter">
      <h1 className="font-bold my-5 text-4xl text-[#353fa9]">
         Web-Calumaths
      </h1>
      <div className="flexBetween flex-col lg:flex-row  w-full">
     <Hero />
     <Calculator />
     </div>
    </section>
  );
}

export default App;
