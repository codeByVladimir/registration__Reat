import React from "react";
import { useState } from "react";
import Input from "./components/input/input";
import Button from "./components/button/button";

function App(){
    return (
        <main className="main">
            <div className="container">
                <h1 className="hero__title">Создание аккаунта</h1>
                <p className="hero__subtitle">Введите свои данные, чтобы создать аккаунт в сервисе</p>
                <form className="hero__form-wrapper" method="#">
                    <Input placeholder={'Имя'}/>
                    <Input placeholder={'Фамилия'}/>
                    <Input placeholder={'Номер телефона'}/>
                    <Input placeholder={'Email'}/>
                    <Input placeholder={'Пароль'}/>
                    <Input placeholder={'Повторите пароль'}/>
                    <label className="input__checkbox">
                        <input type="checkbox" className="checkbox"/>
                        Подтверждаю
                    </label>
                </form>
                <Button title={'Продолжить'}/>
                <p className="hero__signIn">Уже есть аккаунт ? <a href="#" className="signIn">Войти</a></p>
            </div>
        </main>
    )
}

export default App