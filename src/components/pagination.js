import React, { useContext } from 'react';
import { css } from "emotion";
import PolygonRight from '../assets/polygon-right.png';
import PolygonLeft from '../assets/polygon-left.png';
import { SearchContext} from '../providers/movieWrapper';
import { pagination_styles } from '../styling';

const cursorClass = `text-align: center; width: 1rem; border: solid 1px #bfbfbf; padding: 0.2rem; border-radius: 5px; cursor: pointer;`;

export const Pagination = ({ page, setPage, totalPages }) => {
    const { setUserMovie } = useContext(SearchContext);
    
    const updatePage = (isNext) => {
        setUserMovie(undefined);
        if (isNext && page < totalPages) {
            setPage(page+1);
        } else if(page > 1 && !isNext) {
            setPage(page-1);
        }
    }

    return (
        <div className={pagination_styles}>
            <div className={css`text-align: center;`} onClick={() => updatePage(false)}>
                <img className={css`${cursorClass}`} alt="prev button" src={PolygonLeft} /></div>
            <div>
                <p className={css`text-align: center`}>Page {page}/{totalPages}</p>
            </div>
            <div className={css`text-align: center;`} onClick={() => updatePage(true)}>
                <img className={css`${cursorClass}`} alt="next button" src={PolygonRight} />
            </div>
        </div>
    );
}

export default Pagination;
