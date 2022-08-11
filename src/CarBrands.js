import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Slider, Switch } from 'antd';
import 'antd/dist/antd.css';
import './CarBrands.css'


const CarBrandsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    border-radius: 11px;
    background: var(--gray-color);
`

export const FlexedDiv = styled.div`
    display: flex;
    flex-direction: ${({column}) => column && 'column'};
    justify-content: ${({ jcsb }) => jcsb ? 'space-between' : ''};
    flex-wrap: ${({ wr }) => wr && 'wrap'};
`
const CarBrandsUl = styled.ul`
    margin-right: ${({ notMargin }) => notMargin ? '0' : '30px'};
`
const CarBrandsList = styled.li`
    display: flex;
    align-items: center;
`
const CarBrandsLink = styled.a`
    font-size: 14px;
    line-height: 290%;
    color: var(--black-color);
`
const CarBrandsTitle = styled.h3`
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
    color: var(--black-color);
    margin-bottom: 22px;
`

const CarBrandsSliderTitle = styled.span`
    font-size: 16px;
    line-height: 19px;
    color: var(--black-color);
    font-weight: ${({ bold }) => bold && 'bold'};
`

const CarBrandsSelect = styled.select`
    background: #FFFFFF;
    border: 1px solid #E1E1E1;
    border-radius: 6px;
    color: var(--black-color);
    outline: none;
`
const Sliderlines = styled.div`
    height: 10px;
    width: 0;
    border: .3px solid #bdb3b3;
`

const SliderlinesNum = styled.h4`
    font-size: 11px;
    line-height: 13px;
    color: #ADADB0;
`

export const RedBtn = styled.a`
    background: var(--red-color);
    border-radius: 6px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 16px 0;
`


class Demo extends React.Component {
    state = {
        disabled: false,
    };

    handleDisabledChange = disabled => {
        this.setState({ disabled });
    };

    render() {
        const { disabled } = this.state;
        return (
            <>
                <Slider range defaultValue={[0, 300000]} disabled={disabled} max={3000000} />
            </>
        );
    }
}




const CarBrandsUlData = [
    [
        'Kia',
        'Brilliance',
        'Citroen',
        'Ford',
        'Haima',
        'Lifan',
        'Peugeot',
        'UAZ',
    ],
    [
        'Hyundai',
        'Changan',
        'Datsun',
        'Foton',
        'Haval',
        'Mazda',
        'Ravon',
        'Zotye',
    ],
    [
        'Skoda',
        'Chery',
        'Dongfeng',
        'GAC',
        'Honda',
        'Mitsubishi',
        'Renault',

    ],
    [
        'Volkswagen',
        'CheryExeed',
        'DW Hower',
        'Geely',
        'JAC',
        'Nissan',
        'SsangYong',
    ],
    [
        'Toyota',
        'Chevrolet',
        'FAW',
        'Great Wall',
        'Lada',
        'Opel',
        'Suzuki',

    ]
];

export class CarBrands extends React.Component {
    render() {
        return (
            <div className='container'>
                <CarBrandsWrapper>
                    <FlexedDiv>
                        <CarBrandsUl>
                            {CarBrandsUlData[0].map((value) => {
                                return <CarBrandsList><img style={{ marginRight: '10px' }} src={'./images/' + value + '.png'} alt='' /><CarBrandsLink>{value}</CarBrandsLink></CarBrandsList>
                            })}
                        </CarBrandsUl>
                        <CarBrandsUl>
                            {CarBrandsUlData[1].map((value) => {
                                return <CarBrandsList><img style={{ marginRight: '10px' }} src={'./images/' + value + '.png'} alt='' /><CarBrandsLink>{value}</CarBrandsLink></CarBrandsList>
                            })}
                        </CarBrandsUl>
                        <CarBrandsUl>
                            {CarBrandsUlData[2].map((value) => {
                                return <CarBrandsList><img style={{ marginRight: '10px' }} src={'./images/' + value + '.png'} alt='' /><CarBrandsLink>{value}</CarBrandsLink></CarBrandsList>
                            })}
                        </CarBrandsUl>
                        <CarBrandsUl>
                            {CarBrandsUlData[3].map((value) => {
                                return <CarBrandsList><img style={{ marginRight: '10px' }} src={'./images/' + value + '.png'} alt='' /><CarBrandsLink>{value}</CarBrandsLink></CarBrandsList>
                            })}
                        </CarBrandsUl>
                        <CarBrandsUl notMargin>
                            {CarBrandsUlData[4].map((value) => {
                                return <CarBrandsList><img style={{ marginRight: '10px' }} src={'./images/' + value + '.png'} alt='' /><CarBrandsLink>{value}</CarBrandsLink></CarBrandsList>
                            })}
                        </CarBrandsUl>
                    </FlexedDiv>
                    <FlexedDiv column style={{ width: '500px' }}>
                        <CarBrandsTitle>Быстрый подбор авто</CarBrandsTitle>
                        <FlexedDiv jcsb>
                            <CarBrandsSliderTitle>Цена</CarBrandsSliderTitle>
                            <CarBrandsSliderTitle bold ><span className='CarsPriceFrom'></span><span>₽ - </span><span className='CarsPriceTo'></span>₽</CarBrandsSliderTitle>
                        </FlexedDiv>
                        <Demo />
                        <FlexedDiv jcsb style={{padding: '0 5px'}}>
                            <Sliderlines />
                            <Sliderlines />
                            <Sliderlines />
                            <Sliderlines />
                            <Sliderlines />
                            <Sliderlines />
                            <Sliderlines />
                            <Sliderlines />
                            <Sliderlines />
                            <Sliderlines />
                            <Sliderlines />
                        </FlexedDiv>
                        <FlexedDiv jcsb style={{padding: '0 0 0 3px', marginTop: '5px'}}>
                            <SliderlinesNum>0</SliderlinesNum>
                            <SliderlinesNum style={{marginLeft: '10px'}}>300т</SliderlinesNum>
                            <SliderlinesNum>600т</SliderlinesNum>
                            <SliderlinesNum>900т</SliderlinesNum>
                            <SliderlinesNum>1,2м</SliderlinesNum>
                            <SliderlinesNum>1,5м</SliderlinesNum>
                            <SliderlinesNum>1,8м</SliderlinesNum>
                            <SliderlinesNum>2,1м</SliderlinesNum>
                            <SliderlinesNum>2,4м</SliderlinesNum>
                            <SliderlinesNum>2,7м</SliderlinesNum>
                            <SliderlinesNum>3м</SliderlinesNum>
                        </FlexedDiv>
                        <FlexedDiv jcsb className='wrapper_carBrand-select'>
                            <CarBrandsSelect className='carBrand-select'>
                                <option id="disabled-option">Тип кузова</option>
                                <option>Седан</option>
                                <option>Хетчбек</option>
                                <option>Кросовер</option>
                                <option>Купе</option>
                                <option>Кабриолет</option>
                                <option>Фургон</option>
                                <option>Бездорожник</option>
                            </CarBrandsSelect>
                            <CarBrandsSelect className='carBrand-select'>
                                <option id="disabled-option">Каробка</option>
                                <option>Механическая</option>
                                <option>Автоматическая</option>
                                <option>Роботизированная</option>
                                <option>Вариативная</option>
                            </CarBrandsSelect>
                        </FlexedDiv>
                        <RedBtn style={{marginTop: '25px'}}>Показать</RedBtn>
                    </FlexedDiv>
                </CarBrandsWrapper>
            </div>
        )
    }
}