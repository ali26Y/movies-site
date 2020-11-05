import { useEffect, useContext } from "react";
import { SearchContext } from '../providers/movieWrapper';
import { Client } from './apiClient';

export const useMovieLookup = (searchText, userPage) => {
    const { setMovie, setErrors, setLoading } = useContext(SearchContext);

    useEffect(() => {
        const lookupMovie = async () => {
            try {
                if (searchText && searchText.length) {
                    setLoading('sidebar');
                    setErrors(undefined);
                    const data = await Client(`s=${searchText}&page=${userPage}`)
                    if (data) {
                        setMovie(data);
                        setLoading(false);
                    }
                }
            } catch (err) {
                setErrors(err);
                setLoading(false);
                setMovie(undefined);
            }
        }
        lookupMovie();
    }, [searchText, userPage, setMovie, setLoading, setErrors]);

  return;
};
