import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg';
import './styles.css';

type Props = {
    saleId: number;
}

function handeleClick(id :number){
      axios(`{$BASE_URL}/sales/${id}/notification`)
        .then((Response) => {
            console.log("Sucesso");
        });
}

function NotificationButton({saleId} : Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handeleClick(saleId)}>
        <img src={icon} alt="Notificar" />
    </div>
    )
       
    
}

export default NotificationButton;
