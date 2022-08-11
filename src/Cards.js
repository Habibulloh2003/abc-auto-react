import React from 'react';
import styled from 'styled-components';
import { FlexedDiv } from './CarBrands';


const WrapperCard = styled(FlexedDiv)`
    background: #FFFFFF;
    box-shadow: 0px 0px 30px rgba(133, 147, 159, 0.3);
    border-radius: 25px;
    width: 446px;
    height: 449px;
    padding: 25px;
`
const CardMainTitle = styled.h3`
    font-size: 40px;
    line-height: 47px;
    color: var(--black-color);
    margin-bottom: 65px;
    text-align: center;
`

const CarTitle = styled.h4`
    font-size: 27px;
    line-height: 32px;
    max-width: 300px;
    margin-bottom: 25px;
`
const CardRedTitle = styled.span`
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: #FFFFFF;
    background: var(--red-color);
    padding: 6.5px 15px;
    border-radius: 4px 0 0 4px;
    height: fit-content;
`
const CardRedTitleComp = styled.div`
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    border-bottom: 14px solid var(--red-color);
    transform: rotate(90deg) translate(-1px, -1px);
    
`

const CardItem = styled.p`
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: ${({ red }) => red ? 'var(--red-color)' : '#262626'};
    font-weight: ${({ fw500 }) => fw500 ? 500 : 'normal'};
    height: fit-content;
`

const CardUlItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 6px;
`

const WrapperGift = styled.div`
    display: flex;
    justify-content: center ;
    width: 32px;
    height: 32px;
    background: black;
    border-radius: 50%;
    margin-right: 9px;
    padding: 9px;
`

const CarCost = styled.h3`
    font-size: 22px;
    line-height: 26px;
    color: var(--black-color);
`
const CarCredit = styled.p`
    font-size: 16px;
    line-height: 14px;
    color: var(--black-color);
    align-self: flex-end;
`

const CarStat = styled.span`
    width: 94px;
    height: 31px;
    border: 1px solid #C2C2C4;
    border-radius: 20px;
    display: flex;
    justify-content: center ;
    align-items: center;
    font-size: 12px;
    line-height: 14px;
    color: var(--black-color);
`
const CardLastItems = styled.a`
    display: flex;
    align-items:center;
    padding-left: 20px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    border-radius: 6px 0 0 6px;
`
const CardLastItemsComp = styled.span`
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 25px solid var(--red-color);
    transform: rotate(90deg);
`

const AddCard = styled.span`
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    padding: 23px 102px;
    background: var(--red-color);
    width: max-content;
    border-radius: 6px;
    align-self: center;
    cursor: pointer;
`


const CardData = [
    { title: 'Skoda Octavia 1.6 MPI MT Active', cost: '1 615 000', credit: '115 000', img: './images/a32e3b81-2aeb-426a-bdf5-a5db7fcd18c1 8.png', hoursePower: '115', fuel: '5.3', overclocking: '10.3', max: '200' },
    { title: 'Новая Corolla', cost: '980 000', credit: '98 000', img: './images/tradeins 7.png', hoursePower: '145', fuel: '10', overclocking: '7.5', max: '180' },
    { title: 'Toyota prius', cost: '1 800 000', credit: '138 000', img: './images/toyota-crossover.png', hoursePower: '250', fuel: '12.7', overclocking: '7.3', max: '200' },
    { title: 'Toyota Camry', cost: '2 435 000', credit: '210 000', img: './images/cf3de6a6a3a8dcf216cb357b444fc381 1.png', hoursePower: '324', fuel: '15', overclocking: '6.3', max: '250' },
    { title: 'Kia Rio 1.5L', cost: '1 093 217', credit: '76 000', img: './images/rio_new.png', hoursePower: '107', fuel: '6,2', overclocking: '11.2', max: '220' },
    { title: 'Toyota xl 4x4', cost: '2 615 000', credit: '225 000', img: './images/sas.png', hoursePower: '264', fuel: '15.2', overclocking: '9,2', max: '200' },
    { title: 'Maseratti levante', cost: '5 735 000', credit: '1 015 000', img: './images/rapid-entry.png', hoursePower: '315', fuel: '17', overclocking: '6.5', max: '360' },
    { title: 'Mercades s class', cost: '5 615 000', credit: '1 115 000', img: './images/mercades s class.png', hoursePower: '245', fuel: '18', overclocking: '6.3', max: '300' },
    { title: 'Infinity', cost: '3 615 000', credit: '436 000', img: './images/infinity.png', hoursePower: '205', fuel: '12.7', overclocking: '7', max: '240' },
    { title: 'Honda sl', cost: '1 615 000', credit: '115 000', img: './images/honda sl.png', hoursePower: '115', fuel: '5.3', overclocking: '10.3', max: '200' },
    { title: 'Honda crossover', cost: '2 615 000', credit: '315 000', img: './images/honda crossover.png', hoursePower: '205', fuel: '5.5', overclocking: '11.3', max: '200' },
    { title: 'Mercades w212', cost: '6 005 000', credit: '2 005 000', img: './images/mercades w212.png', hoursePower: '405', fuel: '15', overclocking: '5.5', max: '330' },
    { title: 'Honda accent', cost: '1 005 000', credit: '125 000', img: './images/honda accent.png', hoursePower: '95', fuel: '6.7', overclocking: '9.8', max: '250' },
    { title: 'Audi Rs7', cost: '7 585 000', credit: '2 205 000', img: './images/audi.png', hoursePower: '390', fuel: '17', overclocking: '5.7', max: '320' },
    { title: 'Toyota Corolla', cost: '2 005 000', credit: '201 890', img: './images/tradeins 7.png ', hoursePower: '217', fuel: '12', overclocking: '8.5', max: '220' },
]

export class Cards extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 3,
            like: false,
            bool: true,
        }
    }


    render() {

        const increament = () => {
            if (this.state.count <= 15) {
                this.setState({
                    count: this.state.count + 3
                })
            }
        }

        const decreament = () => {
            if (this.state.count > 3) {
                this.setState({
                    count: this.state.count - 3,
                    bool: false,
                })
            }
            else{
                this.setState({
                    bool: true
                })
            }
        }

        const setLike = () => {
            this.setState({
                like: !this.state.like
            })
        }


        const CardDataLoop = () => {
            const d = [];
            for (let i = 0; i < this.state.count; i++) {
                const el = CardData[i];

                d.push(
                    <WrapperCard column style={{ position: 'relative', marginBottom: '30px', transition: '1s linear' }}>
                        <CarTitle style={{ zIndex: '2' }}>{el.title}</CarTitle>
                        <FlexedDiv style={{ marginBottom: '11px', zIndex: '2' }}>
                            <FlexedDiv>
                                <CardRedTitle>Предложение дня</CardRedTitle>
                                <CardRedTitleComp />
                            </FlexedDiv>
                            <CardItem red fw500 style={{ margin: '0' }}>Выгода <br />до 300 000 ₽</CardItem>
                        </FlexedDiv>
                        <FlexedDiv>
                            <ul style={{ zIndex: '2' }}>
                                <CardUlItem><WrapperGift><img src='./images/giftbox.png' alt="" /></WrapperGift><CardItem>Оборудование<CardItem red>в подарок</CardItem></CardItem></CardUlItem>
                                <CardUlItem><WrapperGift><img src='./images/giftbox.png' alt="" /></WrapperGift><CardItem>КАСКО<CardItem red>в подарок</CardItem></CardItem></CardUlItem>
                                <CardUlItem><WrapperGift><img src='./images/giftbox.png' alt="" /></WrapperGift><CardItem>Комплект резины<CardItem red>в подарок</CardItem></CardItem></CardUlItem>
                            </ul>
                            <img src={el.img} alt="" height='112px' style={{ zIndex: '2' }} />
                        </FlexedDiv>
                        <FlexedDiv jcsb style={{ marginTop: '10px' }}>
                            <CarCost>от {el.cost} ₽ </CarCost>
                            <CarCredit>Кредит {el.credit} ₽/мес. </CarCredit>
                        </FlexedDiv>
                        <FlexedDiv jcsb style={{ marginTop: '11px' }}>
                            <CarStat><img src="./images/horsePow.svg" style={{ marginRight: '5px' }} />{el.hoursePower} л.с.</CarStat>
                            <CarStat><img src="./images/fuel.svg" style={{ marginRight: '5px' }} />{el.fuel} л/км</CarStat>
                            <CarStat><img src="./images/km-h.svg" style={{ marginRight: '5px' }} />{el.overclocking} км/ч</CarStat>
                            <CarStat><img src="./images/do100.svg" style={{ marginRight: '5px' }} />{el.max} c.</CarStat>
                        </FlexedDiv>
                        <FlexedDiv style={{ height: '50px', position: 'relative', marginTop: 'auto' }}>
                            <FlexedDiv style={{ zIndex: '3', height: '100%', position: 'absolute', left: '0' }}><CardLastItems style={{ background: 'var(--red-color)', whiteSpace: 'nowrap' }}>Резерв онлайн</CardLastItems><CardLastItemsComp style={{ borderBottomColor: 'var(--red-color)' }}></CardLastItemsComp></FlexedDiv>
                            <FlexedDiv style={{ zIndex: '2', height: '100%', position: 'absolute', left: '105px' }}><CardLastItems style={{ padding: '0 20px 0 50px', background: 'var(--black-color)' }}>Купить</CardLastItems><CardLastItemsComp style={{ borderBottomColor: 'var(--black-color)' }}></CardLastItemsComp></FlexedDiv>
                            <FlexedDiv style={{ zIndex: '1', height: '100%', position: 'absolute', right: '0' }}><CardLastItems style={{ padding: '0 20px 0 40px', background: 'var(--gray2-color)' }}>Подробнее</CardLastItems><CardLastItemsComp style={{ borderBottomColor: 'var(--gray2-color)' }}></CardLastItemsComp></FlexedDiv>
                        </FlexedDiv>
                        <img src="./images/card-bg.png" alt="" style={{ position: 'absolute', top: '33px', right: '0', zIndex: '' }} />
                    </WrapperCard>)
            }
            return d
        }

        return (
            <FlexedDiv column className='container' style={{ marginTop: '65px', marginBottom: '65px', }}>
                    <CardMainTitle>Автомобили в наличии с ПТС</CardMainTitle>
                <FlexedDiv jcsb wr>
                    {CardDataLoop()}
                </FlexedDiv>
                    {this.state.count !== 15 && this.state.bool ? <AddCard onClick={increament} >Показать  еще</AddCard> : <AddCard onClick={decreament} >Скрыть</AddCard>}
                    {/* {this.state.count !== 3 && this.state.bool2 && <AddCard onClick={decreament} >Скрыть</AddCard>} */}
                    {console.log(this.state.bool)}
            </FlexedDiv>
        )
    }
}
