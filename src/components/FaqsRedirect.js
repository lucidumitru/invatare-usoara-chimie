import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {Redirect} from '@docusaurus/router';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function FaqsRedirect({location}) {
    const {siteConfig} = useDocusaurusContext();
    const url = location.pathname.replace(siteConfig.baseUrl, '');

    return (
        <Redirect to={useBaseUrl('docs/' + url)}/>
    );
}

export default FaqsRedirect;
