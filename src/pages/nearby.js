import React from 'react';
import PropTypes from 'prop-types';
import AttractionNearby from '../components/Nearby';

const Nearby = ({ attraction }) => <AttractionNearby attraction={attraction} />;

export async function getStaticProps() {
    // make fetch request for user here
    const attraction = {
        title: 'London Eye',
        lat: 51.503364,
        long: -0.120453,
    };

    return {
        props: {
            attraction,
        },
    };
}

Nearby.propTypes = {
    attraction: PropTypes.shape({
        title: PropTypes.string.isRequired,
        lat: PropTypes.string.isRequired,
        lng: PropTypes.string.isRequired,
    }).isRequired,
};

export default Nearby;
