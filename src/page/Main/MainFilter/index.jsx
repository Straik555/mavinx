import React from 'react';
import { Icon } from 'react-icons-kit'
import {cross} from 'react-icons-kit/icomoon/cross'
import ReactSlider from 'react-slider'
import styled from 'styled-components';

const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 5px;
`;

const StyledThumb = styled.div`
    margin-top: -2.5px;
    height: 12px;
    line-height: 10px;
    width: 12px;
    background-color: dodgerBlue;
    border-radius: 50%;
    cursor: grab;
    outline: none;
`;

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${props => props.index === 2 ? '#ddd' : props.index === 1 ? 'dodgerBlue' : '#ddd'};
    border-radius: 999px;
`;
const MainFilter = () => {
    const Thumb = (props, state) => <StyledThumb {...props}></StyledThumb>;
    const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

    return (
        <div style={{width: '30%', borderRight: '1px solid silver', display: 'flex', flexDirection: 'column', padding: '0 40px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: '20px', borderBottom: '1px solid silver'}}>
                <h1 style={{fontSize: '22px', paddingTop: '6px'}}>Фильтры</h1>
                <p style={{color: 'silver'}}>Очистить</p>
            </div>
            <div style={{padding: ' 20px 0 40px', borderBottom: '1px solid silver'}}>
                <div style={{display: "flex", alignItems: 'center', paddingBottom: '20px'}}>
                    <h1 style={{fontSize: '16px', paddingRight: '7px'}}>Категории</h1>
                    <p style={{color: 'silver', fontSize: '16px'}}>(4)</p>
                </div>
                <div style={{display: 'flex', justifyContent: "space-between", alignItems: 'center', padding: '20px', background: '#ebebeb', borderRadius: '5px'}}>
                    <select style={{width: '85%', color: 'silver', paddingBottom: '10px', background: "transparent", outline: 'none', border: 'none', borderBottom: '1px solid silver'}}>
                        <option style={{color: 'silver'}}>Название</option>
                    </select>
                    <p style={{fontSize: '29px', fontWeight: 'bold', color: '#6d7ea3', margin: '0'}}>+</p>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', paddingTop: '20px'}}>
                    <div style={{padding: '10px 20px', margin: '10px 10px 0 0', textAlign: 'center', borderRadius: '20px', background: '#ebebeb'}}>
                        <span style={{fontSize: '14px', fontWeight: 'bold'}}>#Landing-page</span>
                    </div>
                    <div style={{padding: '10px 20px', margin: '10px 10px 0 0', textAlign: 'center', borderRadius: '20px', background: '#ebebeb'}}>
                        <span style={{fontSize: '14px', fontWeight: 'bold'}}>#Логотип</span>
                    </div>
                    <div style={{padding: '10px 20px', margin: '10px 10px 0 0', textAlign: 'center', borderRadius: '20px', background: '#ebebeb'}}>
                        <span style={{fontSize: '14px', fontWeight: 'bold'}}>#Промо-сайт</span>
                    </div>
                    <div style={{padding: '10px 20px', margin: '10px 10px 0 0', textAlign: 'center', borderRadius: '20px', background: '#ebebeb'}}>
                        <Icon style={{color: 'red'}} size={14} icon={cross} />
                    </div>
                </div>
            </div>
            <div style={{padding: ' 20px 0 40px', borderBottom: '1px solid silver'}}>
                <h1 style={{fontSize: '16px'}}>Стоимость</h1>
                <div style={{padding: '20px', background: '#ebebeb', borderRadius: '5px'}}>
                    <div style={{display: 'flex', paddingBottom: '30px'}}>
                        <select style={{width: '30%', color: 'silver', marginBottom: '16px', background: "transparent", outline: 'none', border: 'none', borderBottom: '1px solid silver'}}>
                            <option style={{color: 'silver'}}>USD</option>
                        </select>
                        <p style={{width: '30%', marginRight: '10px', marginLeft: '10px', color: 'silver', paddingBottom: '15px', background: "transparent", outline: 'none', border: 'none', borderBottom: '1px solid silver'}}>
                            от
                        </p>
                        <p style={{width: '30%', color: 'silver', paddingBottom: '10px', background: "transparent", outline: 'none', border: 'none', borderBottom: '1px solid silver'}}>
                            до
                        </p>
                    </div>
                    <StyledSlider
                        defaultValue={[50, 75]}
                        renderTrack={Track}
                        renderThumb={Thumb}
                    />
                </div>
            </div>
        </div>
    )
}

export default MainFilter;