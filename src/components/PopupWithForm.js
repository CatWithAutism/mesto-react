import React from 'react';

export default function PopupWithForm(props) {
    return (
        <div id={`popup${props.name}`} className={`popup ${(props.isOpen ? 'popup_opened' : '')}`}>
            <button className={'popup__closing-button'} type='button' onClick={props.onClose}></button>
            <div className='popup__container'>
                <h2 className='popup__title'>{props.title}</h2>
                <form className='popup__form' name={`popup${props.name}`}>
                    {props.children}
                    <button className="popup__submit-button" type="submit">{props.submitButtonText}</button>
                </form>
            </div>
        </div>
    );
}