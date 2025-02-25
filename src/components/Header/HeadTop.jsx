import React from 'react'
import { Link } from 'react-router-dom';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PlaceIcon from '@mui/icons-material/Place';


const HeadTop = () => {
  return (
    <div className="bg-[#373493] flex justify-center">
    <div className="flex p-4 w-full max-w-screen-xl justify-between">
      <div className="flex space-x-14 border-r-2 w-[44%]">
        <Link to="/" className="text-white no-underline">Главная</Link>
        <Link to="/about" className="text-white no-underline">О Магазине</Link>
        <Link to="/delivery" className="text-white no-underline">Доставка</Link>
        <Link to="/contacts" className="text-white no-underline">Контакты</Link>
      </div>
      <div className="flex space-x-9 text-white border-r-2 w-[38%]">
        <PhoneIphoneIcon />
        <a href="tel:0709440000" className="no-underline text-white">0709 440 000</a>
        <a href="tel:0704000020" className="no-underline text-white">0704 000 020</a>
        <a href="tel:0700000000" className="no-underline text-white">0700 000 000</a>
      </div>
      <div className="flex items-center">
        <PlaceIcon className="text-white" />
        <Link to="/store-locations" className="text-white no-underline">Адреса Магазинов</Link>
      </div>
    </div>
  </div>
  )
}

export default HeadTop