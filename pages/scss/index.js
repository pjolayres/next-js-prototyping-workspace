import React from 'react';
import axios from 'axios';
import Head from '../../components/common/head'
import Nav from '../../components/client/nav'
import styles from './style.scss'

const ScssPage = () => (
    <div>
        <Head title="Home" />
        <Nav />

        <div className={styles.scss}>
            <p className={styles.red}>This text should be red</p>
            <p className={styles.leftMargin}>This text should have a left margin in LTR or right margin in RTL</p>
            <p className={styles.invariantLeftMargin}>This text should have a left margin in both LTR and RTL</p>
        </div>
    </div>
);

ScssPage.getInitialProps = ({ res, err }) => ({
  namespacesRequired: ['common']
});

export default ScssPage;
