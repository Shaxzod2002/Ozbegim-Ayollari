import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const CulturalEntertainmentForWomen = () => {
  return (
    <div>
      <Navbar />
      <section className="cultural-entertainment-for-women w-full min-h-[100vh] bg-black">
        <header>
          <div className="bg-theme">
            <div className="w-1/2 min-h-[100vh] flex justify-center flex-col gap-4 pl-[100px]">
              <h1 className="text-[#EEA73D] text-5xl font-bold">
                Va nihoyat, bu yerda maroqli hordiq olishingiz mumkin.
              </h1>
              <p className="text-white text-3xl">
                Eng mashhur o'zbek filmlarni bizning kanalda tomosha qiling
              </p>
            </div>
          </div>
        </header>
        <div className="w-[90%] min-h-[100vh] flex justify-around items-center">
          <div className="w-[600px] min-h-[400px] shadow-lg shadow-[#EEA73D] rounded-xl flex justify-center items-center gap-4 flex-col p-4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1BydSDMuOIo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className='rounded-lg'
            ></iframe>
            <h3 className="text-xl text-[#EEA73D]">
              Adam Warlock - Personaj Haqida | Adam Warlockning Comicslardagi
              Sarguzashtlari O'zbek Tilida
            </h3>
            <p className='text-white text-lg'>
              Ilk bor Galaktika Qo'riqchilari 3 filmida debyut qiladigan Adam
              Warlock personajining Comicslardagi yaralishi va tarixi.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default CulturalEntertainmentForWomen