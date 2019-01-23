import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        const lang = 'en';
        const dir = 'ltr';

        return {
            ...initialProps,
            lang,
            dir
        }
    }

    render() {
        const { lang, dir } = this.props;

        return (
            <html lang={lang} dir={dir}>
                <Head>
                    <title>My page</title>
                </Head>
                <body className="custom_class">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}