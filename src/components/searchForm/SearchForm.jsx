import { useEffect, useState } from "react";
import axios from "axios";
import { searchDeezer } from "../../redux";
import { useSelector, useDispatch } from "react-redux";

import "./SearchForm.scss";

const SearchForm = () => {
    const [query, setQuery] = useState("");

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();
        const cancel = source.token;

        if (query.length === 0) return;
        dispatch(searchDeezer(query, cancel));
        return () => source.cancel("Request canceled!");
    }, [query, dispatch]);

    return (
        <div>
            <div className="container">
                <div className="search-form">
                    <form onSubmit={onSubmit}>
                        <div className="search-form__inner">
                            <input type="search" className="search-form__input" placeholder="Search here .." value={query} onChange={(e) => setQuery(e.target.value)} />
                            <button className="search-form__btn-submit" type="submit">
                                SEARCH
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchForm;
