import PropTypes from 'prop-types';
import React from 'react';
import ProductRow from './ProductRow';

const recipes = [
  { genre: 'Soups', name: 'Chicken Tortilla Soup' },
  { genre: 'Pizza', name: 'Homemade Pizza' },
  { genre: 'Salads', name: 'Macho Salad' },
  { genre: 'Main Dish', name: 'Sweet Potato Tinfoil Dinners' },
];

const ProductTable = ({ filter }) => {
    let rows = [];

    recipes.forEach(p => {
        const nameLC = p.name.toLowerCase();
        const filterLC = filter.toLowerCase();

        if (nameLC.indexOf(filterLC) !== -1) {
            rows.push(
                <ProductRow key={p.name} data={p} />
            );
        }
    });

    return <div> {rows} </div>;
};

ProductTable.propTypes = {
    filter: PropTypes.string
};

export default ProductTable;
