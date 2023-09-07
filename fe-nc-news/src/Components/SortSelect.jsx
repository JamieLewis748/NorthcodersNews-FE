const SortSelect = ({ onSortChange }) => {
    const handleSortChange = (event) => {
        const newSort = event.target.value;
        onSortChange(newSort);
    };

    return (
        <div className="sort-container">
            <label htmlFor="sort-select">Sort by:</label>
            <select id="sort-select" onChange={handleSortChange}>
                <option value="created_at">Date</option>
                <option value="comment_count">Comment Count</option>
                <option value="votes">Votes</option>
            </select>
        </div>
    );
};

export default SortSelect;