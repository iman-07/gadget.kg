import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/img/images.jpeg';
import logoGadjet from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

const HeadBottom = ({ cart }) => {
  return (
    <div className='bg-[#fff] flex justify-center'>
    <div className='flex p-4 w-full max-w-screen-xl items-center justify-between'>
      <div className='flex items-center space-x-1'>
        <img className='w-[74px] h-[69px]' src={logo} alt="Logo" />
        <img className='w-[185px] h-[39px]' src={logoGadjet} alt="Gadget Logo" />
      </div>
      <div className="relative w-[50%] sm:w-[60%] md:w-[70%] lg:w-[50%] xl:w-[40%]">
        <input
          className="w-full h-[40px] rounded-[20px] pl-[13px] pr-[40px] bg-[#e9e9e9] border-none"
          type="text"
          placeholder="Живой поиск"
        />
        <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
      </div>
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
  )
}

export default HeadBottom