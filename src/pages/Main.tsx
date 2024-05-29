import React, {Component} from 'react';

class Main extends Component {
    render() {
        return (
            <div>
                <div className="header-title">
                    Добро пожаловать в
                    <div className="header-subtitle">
                        Наш ресторан
                    </div>

                    <div className="header-btn">
                        <a href="/menu" className='header-button'>МЕНЮ</a>
                    </div>

                </div>

                <div className="main-cards">
                    <div className="container">
                        <div className="cards-holder">
                            <div className="card">

                                <div className="main-card-img">
                                    <img src="./card-img.svg" className="card-img" width="70" height="70"/>
                                </div>

                                <div className="card-title">
                                    Вкусная <span>&nbsp;еда</span>
                                </div>

                                <div className="card-desc">
                                    У нас самые вкусные блюда итальянской кухни
                                </div>

                            </div>

                            <div className="card">

                                <div className="main-card-img">
                                    <img src="./card-img.svg" className="card-img" width="70" height="70"/>
                                </div>

                                <div className="card-title">
                                    Уютная <span>&nbsp;атмосфера</span>
                                </div>

                                <div className="card-desc">
                                    В зале играет приятная музыка, а интерьер создает уют
                                </div>

                            </div>

                            <div className="card">

                                <div className="main-card-img">
                                    <img src="./card-img.svg" className="card-img" width="70" height="70"/>
                                </div>

                                <div className="card-title">
                                    Лучший <span>&nbsp;шеф-повар</span>
                                </div>

                                <div className="card-desc">
                                    Наш шеф-повар &mdash; коренной итальянец, который знает все про итальянскую кухню
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="history">
                    <div className="history-holder">
                        <div className="history-info">
                            <div className="history-title">
                                Наш ресторан <span> в цифрах:</span>
                            </div>
                            <div className="statistic">
                                <div className="history-number">
                                    <div className="number-item">
                                        90 <span> Итальянских блюд</span>
                                    </div>
                                    <div className="number-item">
                                        8 <span> Ресторанов по России</span>
                                    </div>
                                    <div className="number-item six">
                                        6 <span>Лет на рынке</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="history-gallery">
                            <img className="img-1" src={"./gallery1.jpg"} alt='first-img'/>
                            <img className="img-2" src={"./gallery2.jpg"} alt='second-img'/>
                            <img className="img-3" src={"./gallery3.jpg"} alt='third-img'/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Main;