import { useToken } from 'hooks/useToken';
import React from 'react';
import { TSize, TBreakSize } from './types'
import { EColor, EIcon } from './enums'


export interface ITextProps {
    As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
    children?: React.ReactNode;
    size: TSize;
    mobileSize?: TSize;
    tabletSize?: TSize;
    desctopSize?: TSize;
    color?: EColor;
}
export interface IBreakProps {
    size: TBreakSize;
    mobileSize?: TBreakSize;
    tabletSize?: TBreakSize;
    desctopSize?: TBreakSize;
    top?: boolean;
    inline?: boolean;
}
export interface IIconProps {
    name: EIcon;
    className: string;
}

export interface IUserBblockProps {
    avatarSrc?: string;
    username?: string;
}

export interface IHeaderProp {
    token: string
}
export interface ISearchBlockProps {
    token: string
}

export interface IUserData {
    name?: string;
    iconImg?: string
}
export interface IUserContextData {
    name?: string;
    iconImg?: string
}

export interface IPostData {
    id: string;
    author: string;
    title: string;
    rating: string;
    avatar: string;
    previewImg: string;
    datePostUtc: string;
}

export interface ITextContentProps {
    author: string;
    title: string;
    datePostUtc: string;
    avatar: string;
    id: string;
    token: string;
}

export interface IMetaDataProps {
    author: string;
    datePostUtc: string;
    avatar: string;
}
