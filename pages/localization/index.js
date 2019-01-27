import React, { Component } from 'react';
import Head from '../../components/common/head';
import { withNamespaces } from '../../src/common/utils/localization';

const LocalizationPage = ({ t }) => (
    <div>
        <Head title={t('Title')} />
        <h1>{t('Title')}</h1>
    </div>
);

LocalizationPage.getInitialProps = ({ res, err }) => ({
  namespacesRequired: ['common']
});

export default withNamespaces()(LocalizationPage);
