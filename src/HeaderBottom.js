import React from 'react'
import './HeaderBottom.css';

class headerBottom extends React.Component {
    render() {
        return (
            <div className='header-bottom'>
                <div className='container'>
                    <div className='header-bottom__left-items'>
                        <div className='header-bottom__left-inner'>
                            <h3 className='header-bottom__txt1'>Осталось всего 10 авто!</h3>
                            <h2 className='header-bottom__title'>Грандиозная распродажа<br /> тестового парка!</h2>
                            <span className='header-bottom__txt2'>Узнай свою цену!</span>
                        </div>
                        <div className='wrapper__slider-indicators'>
                            <div className='slider-indicator active'></div>
                            <div className='slider-indicator'></div>
                            <div className='slider-indicator'></div>
                        </div>
                    </div>
                </div>
                <div className='header-bottom__slider' style={{ backgroundImage: "url('./images/header-bottom_slider-bg.png')" }}>
                    <img className='slider-img active' src='./images/rio_new.png' alt='' />
                    <img className='slider-img active2' src='./images/toyota-crossover.png' alt='' />
                    <img className='slider-img active3' src='./images/rapid-entry.png' alt='' />
                </div>
                <div className='wrapper-arrows'>
                    <i id='left' className="far fa-angle-left"></i>
                    <i id='right' className="far fa-angle-right"></i>
                </div>
            </div>
        );
    }
}

export default headerBottom;