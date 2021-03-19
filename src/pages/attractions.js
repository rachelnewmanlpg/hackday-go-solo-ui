import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import data from '../data/attractionList.json';
import { AttractionList as Container, UserIconWrapper } from '../styles/global';
import { attractionActions } from '../store/ducks/attractions';

const AttractionList = ({ attractions }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [friendAttractions, setFriendAttractions] = useState([]);

    const handleClick = (code) => {
        if (friendAttractions.includes(code)) {
            setFriendAttractions(friendAttractions.filter((e) => e !== code));
        } else {
            setFriendAttractions([...friendAttractions, code]);
        }
    };

    const handleSelectAll = () => {
        setFriendAttractions([...attractions.map((item) => item.code)]);
    };

    const handleSubmit = () => {
        console.log(friendAttractions);
        dispatch(
            attractionActions.selectAttractions({
                friendAttractions,
            })
        );
        router.push('/selectedAttractions');
    };

    return (
        <>
            <Container>
                <h1>Attraction List</h1>
                <p>Click the person icon to show you want to find a friend for that attraction.</p>
                <p>Or...</p>
                <button type="button" className="attraction--btn" onClick={handleSelectAll}>
                    Find a friend for any attractions
                </button>
                <div className="attraction--wrapper">
                    {attractions.length > 0 &&
                        attractions.map((item) => (
                            <div className="attraction attraction--tile" key={item.id}>
                                <div className="attraction attraction--tile__image" />

                                <div className="attraction--tile__content">
                                    {item.name}
                                    <button type="button" onClick={() => handleClick(item.code)}>
                                        <UserIconWrapper
                                            className={friendAttractions.includes(item.code) ? 'active' : ''}
                                        />
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
                <button type="button" className="attraction--btn attraction--btn__submit" onClick={handleSubmit}>
                    Submit
                </button>
            </Container>
        </>
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
