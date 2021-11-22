export default function ImagePopup(props){
    return (
    <div id='popupPicture'className={`popup ${(props && props.card ? 'popup_opened' : '')}`}>
      {props && props.card && (
          <>
            <button className='popup__closing-button' type='button' onClick={props.onClose}></button>
            <div className='popup__container popup__container_large'>
                <img className='popup__picture' alt={props.card.name} src={props.card.link}/>
                <p className='popup__subtitle'>{props.card.name}</p>
            </div>
          </>
      )}

    </div>
    );
}