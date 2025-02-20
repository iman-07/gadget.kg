import { useState } from 'react';

const DropdownButton = ({ imgSrc, text, menuItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);  
    };

    const handleMouseLeave = () => {
        setIsOpen(false); 
    };

    return (
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button
                className="w-[270px] h-[53px] flex items-center gap-4 justify-center "
                type="button"
                style={{
                    backgroundColor: '#373493',
                    color: 'white',
                }}
            >
                <img src={imgSrc} alt={text} />
                {text}
            </button>

            <ul
                className={`absolute left-full top-0 transition-all duration-300 ${isOpen ? 'visible' : 'opacity-0 invisible'}`}
                aria-labelledby="dropdownMenuButton"
                style={{
                    backgroundColor: '#373493',
                    color: 'white',
                    width: '270px',
                    listStyleType: 'none',
                    padding: '10px 0',
                    margin: 0,
                    zIndex: 10,
                }}
            >
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <a className="dropdown-item px-4 py-2 hover:bg-[#2a2f7f]" href={item.link}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropdownButton;
