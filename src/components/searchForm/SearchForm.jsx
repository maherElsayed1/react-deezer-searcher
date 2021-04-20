import { useEffect, useState } from "react";
import axios from "axios";
import { getAlbums, searchDeezer } from "../../redux";
import { useSelector, useDispatch } from "react-redux";

import "./SearchForm.scss";
import SearchSuggestions from "../searchSuggestions/SearchSuggestions";
import Albums from "../albums/Albums";

const SearchForm = () => {
    const dispatch = useDispatch();

    const [query, setQuery] = useState("");
    const [clickedItem, setClickedItem] = useState("");
    const [showSearchSuggestion, setShowSearchSuggestion] = useState(false);

    const { data, error, loading } = useSelector((state) => state.search);
    const { albums, albumsError, albumsLoading } = useSelector((state) => state.albums);

    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();
        const cancel = source.token;

        if (query.length === 0) return;
        dispatch(searchDeezer(query, cancel));
        setShowSearchSuggestion(true);
        return () => source.cancel("Request canceled!");
    }, [query, dispatch]);

    const handleClick = (item) => {
        dispatch(getAlbums(item.artist.id));
        setClickedItem(item.title);
        setShowSearchSuggestion(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setShowSearchSuggestion(false);
        handleClick();
    };

    return (
        <div>
            <div className="container">
                <div className="search-form">
                    <form onSubmit={onSubmit}>
                        <div className="search-form__inner">
                            <div className="search-form__input-container">
                                <input type="search" className="search-form__input" placeholder="Search here .." value={query} onChange={(e) => setQuery(e.target.value)} onFocus={() => setShowSearchSuggestion(true)} />
                                {!loading && !error && query && showSearchSuggestion && <SearchSuggestions data={data} click={(id) => handleClick(id)} />}
                            </div>

                            <button className="search-form__btn-submit" type="submit">
                                SEARCH
                            </button>
                        </div>
                    </form>
                </div>

                {!albumsLoading && !albumsError && albums.length && (
                    <>
                        <h3 className="search-results-headline">Search Results "{clickedItem}"</h3>
                        <Albums albums={albums} />
                    </>
                )}
            </div>
        </div>
    );
};

export default SearchForm;
