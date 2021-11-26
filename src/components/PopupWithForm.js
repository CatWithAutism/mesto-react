import React from 'react';

export default function PopupWithForm({ name, title, onClose, children, onSubmit, submitButtonText, isOpen }) {
    return (
        <div id={`popup${name}`} className={`popup ${(isOpen ? 'popup_opened' : '')}`}>
            <button className={'popup__closing-button'} type='button' onClick={onClose}></button>
            <div className='popup__container'>
                <h2 className='popup__title'>{title}</h2>
                <form className='popup__form' name={`popup${name}`} onSubmit={onSubmit}>
                    {children}
                    <button className="popup__submit-button" type="submit">{submitButtonText}</button>
                </form>
            </div>
        </div>
    );
}