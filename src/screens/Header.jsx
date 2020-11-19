import React from 'react';

import { HeaderWrapper, 
        HeaderMenu, 
        HeaderTitle,
        TitleText,
        HeaderLine } from '../styles/Header';

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderMenu style={{backgroundColor: "yellow", height: 15, width: 15}} />
            <HeaderTitle>
                <TitleText>
                    Home
                </TitleText>
            </HeaderTitle>
            <HeaderLine />
        </HeaderWrapper>
    )
}
