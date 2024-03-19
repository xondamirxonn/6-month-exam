import React from "react";
import { FooterLogo } from "./../../assets/Icon/FooterLogo";
import { Link } from "react-router-dom";
import AppStore from '../../assets/Img/appstore.png'
import PlayMarket from '../../assets/Img/playmarket.png'

export const Footer = () => {
  return (
    <div className=" bg-black p-3">
      <div className="containerr">
        <div className=" flex justify-between pt-8">
          <div>
            <Link to={"/"}>
              <FooterLogo />
            </Link>
          </div>
          <ul className="text-white flex flex-col gap-2">
            <Link to={"#"}>Mobil ilovalar</Link>
            <Link to={"#"}>Yordam</Link>
            <Link to={"#"}>Pullik xizmatlar</Link>
            <Link to={"#"}>OXO da biznes</Link>
            <Link to={"#"}>Saytda reklama</Link>
            <Link to={"#"}>Foydalanish shartlari</Link>
            <Link to={"#"}>Maxfiylik siyosati</Link>
            <Link to={"#"}>Foydalanish shartlari</Link>
          </ul>

          <ul className="text-white flex flex-col gap-2">
            <Link to={"#"}>Qanday qilib sotish va sotib olish kerak?</Link>
            <Link to={"#"}>Xavfsizlik qoidalari</Link>
            <Link to={"#"}>Sayt xaritasi</Link>
            <Link to={"#"}>Mintaqalar xaritasi</Link>
            <Link to={"#"}>OXO da karyera</Link>
            <Link to={"#"}>Qayta aloqa</Link>
          </ul>

          <div>
            <img src={AppStore} alt="" />
            <img src={PlayMarket} alt="" />
          </div>
        </div>

        <div className="border border-b-0 bg-gray-300 w-full mt-10"></div>

        <h1 className="mt-3 text-white">
          © 2022 Barcha huquqlar himoyalangan.Ushbu sayt cookie-fayllardan
          foydalanadi. Brauzeringizda cookie sozlamalarini o'zgartirishingiz
          mumkin.
        </h1>
      </div>
    </div>
  );
};
