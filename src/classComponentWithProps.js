import React from 'react';
import State from './State'
import styled from 'styled-components'
import OldReact from './OldReact'


const GetFontSize = ({size}) => {
    switch (size) {
        case 'desktop': return "36";
        case 'tablet': return "30";
        case 'mobile': return "25";
    
        default: return '18'
    }
}

export const StyledTitle = styled.h1`
    color: red;
    font-size: ${GetFontSize}px;
    font-style: ${({ fStyle }) => fStyle === 'i' ? 'italic' : 'normal'};
    -webkit-text-stroke: 1.3px blue;
`
export const Wrapper = styled.div`
    background: ${({ bg }) => bg === 'other' ? 'yellow' : 'lightgreen'};
    border: 1.5px blue dashed;
    border-radius: 5px;
    margin: 10px 15px;
    padding: 10px;
    width: fit-content;
`



export class ClassComp extends React.Component {
    render() {
        return (
            <div key={this.props.id}>
                <h2>Id:{this.props.id}</h2>
                <h2>Name:{this.props.name}</h2>
            </div>
        );
    }
}
export class ClassComp2 extends React.Component {
    render() {
        return (
            <div>
                <p>Propsi o'zi blan</p>
                <h2>Id:{this.props.id}</h2>
                <h2>Name:{this.props.name}</h2>
                <hr />
                <Wrapper>
                    <State />
                </Wrapper>
                <Wrapper bg='other'>
                    <StyledTitle size={'desktop'} fStyle="i">Styled title</StyledTitle>
                    <StyledTitle size={'tablet'} >Styled title </StyledTitle>
                    <StyledTitle size={'mobile'} >Styled title </StyledTitle>
                </Wrapper>
                <OldReact />
            </div>
        );
    }
}


