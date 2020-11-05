import { css } from 'emotion';

export const card_with_image_styles = css`
    margin: 0.5rem auto 0 auto;
    display: grid;
    grid-template-columns: 2fr 5fr;
    grid-gap: 1rem;
    padding: 1rem;
    border-bottom: solid 1px #bfbfbf;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const card_without_image_styles = css`
    margin: 1rem auto 0 auto;
    display: block;
    padding: 1rem;
    border-bottom: solid 1px #bfbfbf;
    cursor: pointer;
`;

export const full_width = css`
    width: 100%;
`;

/* ------ content styles ---------- */

export const content_loader = css`
    overflow-y: scroll; 
    height: 100vh; 
    align-items: center;
    justify-content: center;
    display: grid;
`;

export const over_flow_height = css`
    overflow-y: scroll; 
    height: 100vh; 
`;

export const single_movie_banner = css`
    background: linear-gradient(#4D4D4D, #2B2B2B, #020202);
    max-height: 30vh;
    height: 30rem;
    color: #fff;
    align-items: center;
    display: grid;
    padding-left: 3rem;
`;

export const movie_year_style = css`
    font-size: 1.2rem; 
    font-weight: normal; 
    margin-top: 1rem; 
    display:block;
`;

export const movie_content_wrap = css`
    margin: 0.5rem auto 0 auto;
    display: grid;
    grid-template-columns: 2fr 5fr;
    grid-gap: 1.5rem;
    padding: 2rem;
    cursor: pointer;
`;

export const movie_subdetails = css`
    margin: 0.5rem auto 0 auto;
    display: grid;
    grid-template-columns: 2fr 2fr;
`;

export const navbar_styles = css`
    height: calc(100vh - 60px);
    background: #FFFFFF;
    box-shadow: 2px 4px 12px 4px rgba(0, 0, 0, 0.05);
`

export const input_field_wrapper = css`
    text-align: center; 
    padding: 2rem 0 2.5rem 0; 
    border-bottom: solid 1px #f3f3f3
`;

export const input_fied_styles = css`
    height: 2.5rem;
    border-radius: 10px;
    font-size: 1rem;
    width: 70%;
    margin: 0 auto;
    padding: 5px;
    border: solid 1px #bfbfbf;
`;

export const pagination_styles = css`
    display: grid;
    grid-template-columns: 2fr 3fr 2fr;
    grid-gap: 1rem;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`;

