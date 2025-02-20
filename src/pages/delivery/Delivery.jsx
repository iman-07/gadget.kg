import delivery from "../../assets/img/delivery.png"

const Delivery = () => {
  return (

    <div className="flex justify-center bg-[#339]">
      <div className="flex items-center p-[40px]">
        <div className="w-[600px]">
          <img className="w-max" src={delivery} alt="" />
        </div>
        <div className="w-[470px] float-right p-[70px] mt-[-5px]">
          <h3 className="mb-[40px] text-white">- Доставка по г.Бишкек Платная</h3>
          <h1 className="mb-[40px] text-[#ff0] text-3xl font-extrabold">Доставка по воскресеньям НЕ ОСУЩЕСТВЛЯЕТСЯ</h1>
          <h1 className="mb-[40px] text-[#ff0] text-3xl font-extrabold">Прием заказов с 10-00 до 15-00</h1>
          <h1 className="mb-[40px] text-[#ff0] text-3xl font-extrabold">Доставка товара осуществляется с 12-00 в течении дня</h1>
          <h3 className="text-white">Контактные номера телефонов для заказов:</h3>
          <p className="text-white">+996 700 916121</p>
          <p className="text-white">+996 551 916122</p>
        </div>
      </div>
    </div>
  )
}

export default Delivery