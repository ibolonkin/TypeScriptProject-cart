import React, {Component} from 'react';
import Form from "./FormSubmit";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="contacts-otzyv">
                        <div className="contacts">
                            <ul className="contacts-list">
                                <li className="contacts-title">Контакты</li>
                                <li className="contacts-item contacts-telephone">+7 (952) 512-52-52</li>
                                <li className="contacts-item">punto@fakeadress.com</li>
                                <li className="contacts-item">Режим работы:</li>
                                <li className="contacts-item">Вс-чт c 10:00 - 23:00</li>
                                <li className="contacts-item">Пт-сб c 10:30 - 01:00</li>
                                <li className="contacts-item">Екатеринбург, ЖК Кандинский</li>
                                <li className="contacts-item">ул. Гоголя, 18/2</li>
                            </ul>
                        </div>
                        <div className="otzyv">
                            <div className="otzyv-title">Оставьте свое впечатление о ресторане!</div>

                            <Form/>
                        </div>
                    </div>



                </div>
            </div>
        )};
}

export default Footer