import styled from 'styled-components/native';

export const HeaderWrapper = styled.View`
    position: relative;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    height: 50px;
`;

export const HeaderMenu = styled.View`
    position: absolute;
    left: 2%;
`;

export const HeaderTitle = styled.View`
    
`;

export const TitleText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: black;
`;

export const HeaderLine = styled.View`
    position: absolute;
    bottom: 0px;
    height: 1px;
    width: 100%;
    opacity: 0.7;
    background: gray;
`;
