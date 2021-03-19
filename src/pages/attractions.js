import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import data from '../data/attractionList.json';
import { AttractionList as Container, UserIconWrapper } from '../styles/global';
import { StyledButton } from '../components/profileForm/styles';
import { attractionActions } from '../store/ducks/attractions';
import { getAttractionList } from '../store/selectors/attraction';

const AttractionList = () => {
    const router = useRouter();
    const [friendAttractions, setFriendAttractions] = useState([]);
    const attractions = useSelector(getAttractionList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(attractionActions.getAttractionsByCity('Nyc'));
    });
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
                <StyledButton type="button" className="attraction--btn" onClick={handleSelectAll}>
                    Find a friend for any attractions
                </StyledButton>
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
                <StyledButton type="button" className="attraction--btn attraction--btn__submit" onClick={handleSubmit}>
                    Submit
                </StyledButton>
            </Container>
        </>
    );
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
