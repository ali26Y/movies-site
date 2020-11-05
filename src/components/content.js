import React, { useContext, Fragment } from 'react';
import { css } from "emotion";
import { SearchContext } from '../providers/movieWrapper';
import { content_loader, over_flow_height, single_movie_banner, movie_year_style, movie_content_wrap, movie_subdetails } from '../styling';

const MovieDetail = ({ label, value }) => (
    <div className={css`
        padding: 0.2rem;
        border: solid 1px #bfbfbf;
    `}>
        <h5 className={css`margin: 0.2rem; color: #828282; font-weight: normal;`}>{label}</h5>
        <h5 className={css`margin: 1rem 0.2rem 1rem 0.2rem;`}>{value}</h5>
    </div>
);

export const Content = () => {
    const { userMovie, loading } = useContext(SearchContext);

    return (
        <Fragment>
            { !userMovie || loading === 'content' ? (
                <div className={content_loader}>
                    <h4>{loading === 'content' ? 'Loading...' :  'Please select a title from the sidebar'}</h4>
                </div>
            ) : (
                <div className={over_flow_height}>
                    <div className={single_movie_banner}>
                        <h3>
                            {userMovie.Title}
                            <span className={movie_year_style}>{userMovie.Year}</span>
                        </h3>
                    </div>
                    <div className={movie_content_wrap}>
                        <div className={css`width: 100%;`}>
                            <img className={css`max-width: 15rem`} src={userMovie.Poster !== 'N/A' ? userMovie.Poster : 'https://via.placeholder.com/240x340.png'} alt="movie poster" />
                            <div className={movie_subdetails}>
                                <MovieDetail label="Language" value={userMovie.Language} />
                                <MovieDetail label="Duration" value={userMovie.Runtime} />
                            </div>
                            <MovieDetail label="Cast" value={userMovie.Actors} />
                        </div>
                        
                        <div>
                            <h4 className={css`margin-top: 0px;`}>Synopsis</h4>
                            <p>{userMovie.Plot}</p>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
};
