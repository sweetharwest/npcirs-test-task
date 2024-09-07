import React, {useState} from 'react';
import './FilterPosition.css';

const FilterPosition = ({people, positionFilter, setPositionFilter}) => {
    const variants = [...new Set(people.map((person) => person.job.position))];
    const [showAll, setShowAll] = useState(false);

    const displayedVariants = showAll ? variants : variants.slice(0, 5);

    return (
        <div className="filter">
            <div className="filter-header">
                Позиция
            </div>
            <div
                className={positionFilter? "filter-variant" : "filter-variant-selected"}
                onClick={() => {
                    setPositionFilter(null);
                }}
            >
                Любая
            </div>
            {displayedVariants.map((variant, index) => (
                <div
                    className={variant === positionFilter? "filter-variant-selected" : "filter-variant"}
                    onClick={() => {
                        setPositionFilter(variant === positionFilter ? null : variant);
                    }}
                    key={index}
                >
                    {variant}
                </div>
            ))}
            <div
                className="filter-variant"
                onClick={() => setShowAll(!showAll)}>
                {showAll ? "Показать меньше" : "Показать все"}
            </div>
        </div>
    );
};

export default FilterPosition;
