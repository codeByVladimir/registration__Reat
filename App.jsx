import React from "react";
import { useState } from "react";
import Input from "./components/input/input";
import Button from "./components/button/button";
import Popup from "./components/popup/popup";

function App(){
    const [profile, setProfile] = useState({});
    const [error, setError] = useState({});
    const [popup, setPopup] = useState({});

    function checkValidData(e){
        const {name, value} = e.target;
        if(!value.trim()){
            setError(prev => ({...prev, [name]: true}));
        }else{
            setError(prev => ({...prev, [name]: false}));
            setProfile(prev => ({...prev, [name]: value}))
        }
    }

    function submitData(){
        for(let key in error){
            if(error[key]){
                setPopup(prev => ({...prev, status: true, title: "Не все поля заполнены!"}))
            }
            else{
                setPopup(prev => ({...prev, status: true, title: "Спасибо за регистрацию!"}))
            }
        }
    }

    return (
        <main className="main">
            <div className="container">
                <Popup title={popup.title} status={popup.status}/>
                <h1 className="hero__title">Создание аккаунта</h1>
                <p className="hero__subtitle">Введите свои данные, чтобы создать аккаунт в сервисе</p>
                <form className="hero__form-wrapper" method="#">
                    <Input placeholder={'Имя'} name={'name'} type={'text'} errorStatus={error.name} onBlur={checkValidData}/>
                    <Input placeholder={'Фамилия'} name={'surname'} type={'text'} errorStatus={error.surname} onBlur={checkValidData}/>
                    <Input placeholder={'Номер телефона'} name={'tel'} type={'tel'} errorStatus={error.tel} onBlur={checkValidData}/>
                    <Input placeholder={'Email'} name={'email'} type={'email'} errorStatus={error.email} onBlur={checkValidData}/>
                    <Input placeholder={'Пароль'} name={'passwd'} type={'password'} errorStatus={error.passwd} onBlur={checkValidData}/>
                    <Input placeholder={'Повторите пароль'} name={'confirmPasswd'} type={'password'} errorStatus={error.confirmPasswd} onBlur={checkValidData}/>
                    <label className="input__checkbox">
                        <input type="checkbox" className="checkbox"/>
                        Подтверждаю
                    </label>
                </form>
                <Button title={'Продолжить'} onClick={submitData}/>
                <p className="hero__signIn">Уже есть аккаунт ? <a href="#" className="signIn">Войти</a></p>
            </div>
        </main>
    )
}

export default App