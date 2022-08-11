import React from 'react';
import lightOn from './assets/on.jpg';
import lightOff from './assets/off.jpg';

class State extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            surname: '',
            age: '',
            count: 0,
            light: false
        }
    }
    render() {
        const decreament = () => {
            if (this.state.count > 0) {
                this.setState({
                    count: this.state.count - 1
                })
            }
        }

        const increament = () => {
            this.setState({
                count: this.state.count + 1
            })
        }

        const onChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        const OnOff = ()=>{
            this.setState({
                light: !this.state.light
            })
        }

        return (
            <div className='state' style={{ paddingLeft: "25px" }}>

                <button style={{ width: "35px" }} onClick={decreament}>-</button>
                <h1>{this.state.count}</h1>
                <button style={{ width: "35px" }} onClick={increament}>+</button>


                <br />


                <h1>Name:{this.state.name}</h1>
                <h1>Surname:{this.state.surname}</h1>
                <h1>Age:{this.state.age}</h1>


                <br />

                <input name="name" type="text" placeholder="Name" onChange={onChange} value={this.state.name} />
                <input name="surname" type="text" placeholder="Surname" onChange={onChange} value={this.state.surname} />
                <input name="age" type="text" placeholder="Age" onChange={onChange} value={this.state.age} />

                <br />

                <img src={this.state.light ? lightOn : lightOff} />
                <br />
                <button style={{width: '50px', textAlign: 'center'}} onClick={OnOff}>{this.state.light ? 'Off' : 'On'}</button>
            </div>
        )
    }
}

export default State