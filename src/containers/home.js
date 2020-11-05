import React from 'react';
import { css } from 'emotion';
import { SearchProvider } from '../providers/movieWrapper';
import { Navbar } from '../components/navbar';
import { Content } from '../components/content';

export const Home = () => (
    <SearchProvider>
        <div className={css`
            margin: 1rem auto 0 auto;
            display: grid;
            grid-template-columns: 2fr 5fr;
            padding: 1rem;
        `}>
            <Navbar />
            <Content />
        </div>
    </SearchProvider>
);
