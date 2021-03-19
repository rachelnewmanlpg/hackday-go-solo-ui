import React from 'react';
import PropTypes from 'prop-types';
import AttractionNearby from '../components/Nearby';

const Nearby = ({ attraction }) => <AttractionNearby attraction={attraction} />;

export async function getStaticProps() {
    // make fetch request for user here
    const attraction = {
        title: 'Empire State Building',
        lat: 40.748609,
        lng: -73.985696,
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
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
    }).isRequired,
};

export default Nearby;
