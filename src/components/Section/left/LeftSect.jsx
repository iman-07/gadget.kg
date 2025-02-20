

import 'bootstrap/dist/css/bootstrap.min.css';
import News from '../../../assets/img/new.png';
import Cars from '../../../assets/img/menu1.png';
import Sport from '../../../assets/img/sport.png';
import Gadjet from '../../../assets/img/gadjet.png';
import Phone from '../../../assets/img/phone.png';
import Gift from '../../../assets/img/gift.png'
import child from '../../../assets/img/gift.png'
import house from '../../../assets/img/house.png'
import techn from '../../../assets/img/technique.png'
import dishes from '../../../assets/img/dishec.png'
import hobby from '../../../assets/img/hobby.png'
import games from '../../../assets/img/games.png'
import miscel from '../../../assets/img/miscel.png'
import DropdownButton from './DropdownButton.jsx'

const LeftSect = () => {
    const newsMenuItems = [
        { label: 'Новинки', link: '#novinki' },
        { label: 'Авто', link: '#avto' },
        { label: 'Другие категории', link: '#other' },
    ];

    const carMenuItems = [
        { label: 'Новинки', link: '#novinki' },
        { label: 'Авто', link: '#avto' },
        { label: 'Другие категории', link: '#other' },
    ];

    const sportMenuItems = [
        { label: 'Новинки', link: '#novinki' },
        { label: 'Авто', link: '#avto' },
        { label: 'Другие категории', link: '#other' },
    ];
    const gadjetMenuItems = [
        { label: 'Новинки', link: '#novinki' },
        { label: 'Авто', link: '#avto' },
        { label: 'Другие категории', link: '#other' },
    ]
    const phoneMenuItems = [
        { label: 'Новинки', link: '#novinki' },
        { label: 'Авто', link: '#avto' },
        { label: 'Другие категории', link: '#other' },
    ]
    const giftMenuItems = [
        { label: 'Новинки', link: '#novinki' },
        { label: 'Авто', link: '#avto' },
        { label: 'Другие категории', link: '#other' },
    ]
    const forthehouseMenuItems = [
        { label: 'Новинки', link: '#novinki' },
        { label: 'Авто', link: '#avto' },
        { label: 'Другие категории', link: '#other' },
    ]
    const childMenuItems = [
        { label: 'Новинки', link: '#novinki' },
        { label: 'Авто', link: '#avto' },
        { label: 'Другие категории', link: '#other' },
    ]
    const techMenuItems = [
        { label: 'Новинки', link: '#novinki' },
        { label: 'Авто', link: '#avto' },
        { label: 'Другие категории', link: '#other' },
    ]
    const dishMenuItems = [
        { label: 'Новинки', link: '#novinki' },
        { label: 'Авто', link: '#avto' },
        { label: 'Другие категории', link: '#other' },
    ]
    const hobMenuItems = [
        { label: 'Новинки', link: '#novinki' },
        { label: 'Авто', link: '#avto' },
        { label: 'Другие категории', link: '#other' },
    ]
    const gameMenuItems = [
        { label: 'Новинки', link: '#novinki' },
        { label: 'Авто', link: '#avto' },
        { label: 'Другие категории', link: '#other' },
    ]
    const miscMenuItems = [
        { label: 'Новинки', link: '#novinki' },
        { label: 'Авто', link: '#avto' },
        { label: 'Другие категории', link: '#other' },
    ]

    return (
        <div className='mt-4 shadow-lg'>
            <DropdownButton
                imgSrc={News}
                text="Новинки"
                menuItems={newsMenuItems}
            />

            <DropdownButton
                imgSrc={Cars}
                text="Авто"
                menuItems={carMenuItems}
            />

            <DropdownButton
                imgSrc={Sport}
                text="Спорт"
                menuItems={sportMenuItems}
            />

            <DropdownButton
                imgSrc={Gadjet}
                text="Гаджеты"
                menuItems={gadjetMenuItems}
            />

            <DropdownButton
                imgSrc={Phone}
                text="Телефоны"
                menuItems={phoneMenuItems}
            />

            <DropdownButton
                imgSrc={Gift}
                text="Подарки"
                menuItems={giftMenuItems}
            />

            <DropdownButton
                imgSrc={house}
                text="Для дома"
                menuItems={forthehouseMenuItems}
            />
            <DropdownButton
                imgSrc={child}
                text="Для детей"
                menuItems={childMenuItems}
            />
            <DropdownButton
                imgSrc={techn}
                text="Техника"
                menuItems={techMenuItems}
            />
            <DropdownButton
                imgSrc={dishes}
                text="Посуды"
                menuItems={dishMenuItems}
            />
            <DropdownButton
                imgSrc={hobby}
                text="Хобби"
                menuItems={hobMenuItems}
            />
            <DropdownButton
                imgSrc={games}
                text="Игры"
                menuItems={gameMenuItems}
            />
            <DropdownButton
                imgSrc={miscel}
                text="Разное"
                menuItems={miscMenuItems}
            />
        </div>
    );
};

export default LeftSect; 