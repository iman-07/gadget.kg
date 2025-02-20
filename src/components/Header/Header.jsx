// import { Link } from 'react-router-dom'; // Импортируем Link
// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// import PlaceIcon from '@mui/icons-material/Place';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import SearchIcon from '@mui/icons-material/Search';
// import logo from '../../assets/img/images.jpeg';
// import logoGadjet from '../../assets/img/logo.png';

// const Header = ({ cart }) => {
//   return (
//     <header>
//       <div className="bg-[#373493] flex justify-center">
//         <div className="flex p-4 w-full max-w-screen-xl justify-between">
//           {/* Навигация по основным разделам сайта */}
//           <div className="flex space-x-14 border-r-2 w-[44%]">
//             <Link to="/" className="text-white no-underline">Главная</Link>
//             <Link to="/about" className="text-white no-underline">О Магазине</Link>
//             <Link to="/delivery" className="text-white no-underline">Доставка</Link>
//             <Link to="/contacts" className="text-white no-underline">Контакты</Link>
//           </div>
//           {/* Контактные телефоны */}
//           <div className="flex space-x-9 text-white border-r-2 w-[38%]">
//             <PhoneIphoneIcon />
//             <a href="tel:0709440000" className="no-underline text-white">0709 440 000</a>
//             <a href="tel:0704000020" className="no-underline text-white">0704 000 020</a>
//             <a href="tel:0700000000" className="no-underline text-white">0700 000 000</a>
//           </div>
//           {/* Адреса магазинов */}
//           <div className="flex items-center">
//             <PlaceIcon className="text-white" />
//             <Link to="/store-locations" className="text-white no-underline">Адреса Магазинов</Link>
//           </div>
//         </div>
//       </div>
      
//       <div className='bg-[#fff] flex justify-center'>
//         <div className='flex p-4 w-full max-w-screen-xl items-center justify-between'>
//           {/* Логотипы */}
//           <div className='flex items-center space-x-1'>
//             <img className='w-[74px] h-[69px]' src={logo} alt="Logo" />
//             <img className='w-[185px] h-[39px]' src={logoGadjet} alt="Gadget Logo" />
//           </div>
//           {/* Поиск */}
//           <div className="relative w-[50%] sm:w-[60%] md:w-[70%] lg:w-[50%] xl:w-[40%]">
//             <input
//               className="w-full h-[40px] rounded-[20px] pl-[13px] pr-[40px] bg-[#e9e9e9] border-none"
//               type="text"
//               placeholder="Живой поиск"
//             />
//             <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
//           </div>
//           {/* Корзина */}
//           <div className='inline-block w-[9%] text-center'>
//             <Link to="/cart"> {/* Ссылка на корзину */}
//               <ShoppingCartIcon className=' text-[#373493]' />
//               {cart.length > 0 && (
//                 <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-1">
//                   {cart.length}
//                 </span>
//               )}
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


import { Link } from 'react-router-dom';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PlaceIcon from '@mui/icons-material/Place';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/img/images.jpeg';
import logoGadjet from '../../assets/img/logo.png';

const Header = ({ cart = [] }) => {
  return (
    <header>
      <div className="bg-[#373493] flex justify-center">
        <div className="flex p-4 w-full max-w-screen-xl justify-between">
          {/* Навигация по основным разделам сайта */}
          <div className="flex space-x-14 border-r-2 w-[44%]">
            <Link to="/" className="text-white no-underline">Главная</Link>
            <Link to="/about" className="text-white no-underline">О Магазине</Link>
            <Link to="/delivery" className="text-white no-underline">Доставка</Link>
            <Link to="/contacts" className="text-white no-underline">Контакты</Link>
          </div>
          {/* Контактные телефоны */}
          <div className="flex space-x-9 text-white border-r-2 w-[38%]">
            <PhoneIphoneIcon />
            <a href="tel:0709440000" className="no-underline text-white">0709 440 000</a>
            <a href="tel:0704000020" className="no-underline text-white">0704 000 020</a>
            <a href="tel:0700000000" className="no-underline text-white">0700 000 000</a>
          </div>
          {/* Адреса магазинов */}
          <div className="flex items-center">
            <PlaceIcon className="text-white" />
            <Link to="/store-locations" className="text-white no-underline">Адреса Магазинов</Link>
          </div>
        </div>
      </div>
      
      <div className='bg-[#fff] flex justify-center'>
        <div className='flex p-4 w-full max-w-screen-xl items-center justify-between'>
          {/* Логотипы */}
          <div className='flex items-center space-x-1'>
            <img className='w-[74px] h-[69px]' src={logo} alt="Logo" />
            <img className='w-[185px] h-[39px]' src={logoGadjet} alt="Gadget Logo" />
          </div>
          {/* Поиск */}
          <div className="relative w-[50%] sm:w-[60%] md:w-[70%] lg:w-[50%] xl:w-[40%]">
            <input
              className="w-full h-[40px] rounded-[20px] pl-[13px] pr-[40px] bg-[#e9e9e9] border-none"
              type="text"
              placeholder="Живой поиск"
            />
            <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
          </div>
          {/* Корзина */}
          <div className='inline-block w-[9%] text-center'>
            <Link to="/cart"> {/* Ссылка на корзину */}
              <ShoppingCartIcon className=' text-[#373493]' />
              {cart?.length > 0 && (
                <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-1">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
