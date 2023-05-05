import React from "react";
import tw from "tailwind-styled-components"

type ThemeLayout = 'light' | 'dark'

const Root = tw.div`
    flex
`
interface ContainerProps {
    theme: ThemeLayout;
    children: React.ReactElement;
}

const Container = tw.div<ContainerProps>`
    ${props => props.theme === 'light' ? 'bg-white' : 'bg-gray-800'}
    flex-1
    flex
    flex-col
    justify-start
    items-start
    p-20
`


export { Root, Container }
export type { ThemeLayout }