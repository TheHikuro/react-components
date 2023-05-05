import { Container, Root } from "common/Layout/demo"
import React from "react"
import { HikuroThemeProvider } from "theme/context"
import { AlertElement, AlertProvider } from "./alert"

export default function () {
    return (
        <Root>
            <Container theme="light">
                <HikuroThemeProvider theme={{ success: () => { }, error: () => { } }}>
                    <AlertProvider>
                        <AlertElement />
                    </AlertProvider>
                </HikuroThemeProvider>
            </Container>
            <Container theme="dark">
                <HikuroThemeProvider theme={{ success: () => { }, error: () => { } }}>
                    <AlertProvider>
                        <AlertElement />
                    </AlertProvider>
                </HikuroThemeProvider>
            </Container>
        </Root>
    )
}