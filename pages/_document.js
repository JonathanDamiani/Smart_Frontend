// Copyright © 2021 Jonathan Dean Damiani
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet as StyledComponentsSheets } from 'styled-components';
import { ServerStyleSheets as MaterialSheets } from '@material-ui/core/styles';
import theme from '../styles/theme';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const styledSheet = new StyledComponentsSheets();
        const materialSheets = new MaterialSheets();
        const originalRenderPage = ctx.renderPage;
        
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                    styledSheet.collectStyles (
                        materialSheets.collect(<App {...props} />),
                    ),
                })
    
            const initialProps = await Document.getInitialProps(ctx)

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {materialSheets.getStyleElement()}
                        {styledSheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            styledSheet.seal()
        }
    }
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* PWA primary color */}
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;