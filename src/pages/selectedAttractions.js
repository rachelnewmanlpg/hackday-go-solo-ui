import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import data from '../data/attractionList.json';
import { AttractionList as Container } from '../styles/global';

const AttractionList = ({ attractions }) => {
    const router = useRouter();

    const handleClick = (id) => {
        router.push({
            pathname: '/companionFinder/',
        });
    };

    return (
        <Container>
            <h1>Attraction List</h1>
            <div className="attraction--wrapper">
                {attractions.length > 0 &&
                    attractions.map((item) => (
                        <div className="attraction attraction--tile" key={item.id}>
                            <div className="attraction attraction--tile__image" />

                            <div className="attraction--tile__content">
                                {item.name}
                                <button type="button" onClick={() => handleClick(item.code)}>
                                    Find Friends
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </Container>
    );
};

AttractionList.propTypes = {
    attractions: PropTypes.array.isRequired,
};

export async function getStaticProps() {
    // GET list of attractions
    const attractions = Object.keys(data).map((key) => data[key]);
    return {
        props: {
            attractions,
        },
    };
}

export default AttractionList;
