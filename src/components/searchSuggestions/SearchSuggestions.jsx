import "./SearchSuggestions.scss";

const SearchSuggestions = (props) => {
    return (
        <div className="search-suggestions">
            <h5 className="search-suggestions__title">Search Results</h5>
            <ul className="search-suggestions__list list-unstyled">
                {props.data.map((item) => (
                    <li key={item.id} className="search-suggestions__list-item" onClick={() => props.click(item)}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchSuggestions;
