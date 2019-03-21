import React from 'react'
import styled from 'styled-components'

export const CheckboxContainer = styled.div`
    width: 57.2px;
    height: 57.2px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
`;

export const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
    :hover {
        background: #b0c7f1;
    }
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    `;

export const StyledCheckbox = styled.div`
    display: inline-block;
    width: 51px;
    height: 51px;
    background: ${props => (props.checked ? '#c1d6fc' : '#b0c7f1')}
    transition: all 150ms;
    ${HiddenCheckbox}:focus + & {
        box-shadow: 0 0 0 3px pink;
    }
    ${Icon} {
        visibility: ${props => (props.checked ? 'visible' : 'hidden')}
    }
`;

const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
            <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer>
)

export default Checkbox