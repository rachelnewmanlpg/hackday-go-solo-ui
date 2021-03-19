import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useRouter } from 'next/router';
import { CompanionFinderWrapper } from '../styles/global';
import Card from '../components/CompanionCard';

const CompanionFinder = ({ users, attraction }) => {
  const router = useRouter();
    const handleClick = (id) => {
        // Send this somewhere
        axios({
            method: 'POST',
            url: '',
            data: id,
        });
    };

    const handleSubmit = (code) => {
        // Go to the nearby maps
      router.push({
        pathname: '/nearby',
      });
    };

    return (
        <CompanionFinderWrapper>
            <h2>Find your companion from the list below</h2>
            <div className="c-card__attraction">
                <div className="c-card__attraction--image" />
                <div className="c-card__attraction--content">
                    <div>{attraction.name}</div>
                    <button type="button" onClick={() => handleSubmit(attraction.code)}>
                        Nearby highlights
                    </button>
                </div>
            </div>
            {users.length > 0 &&
                users.map((user) => <Card key={user.name} user={user} handleClick={() => handleClick(user.id)} />)}
        </CompanionFinderWrapper>
    );
};

CompanionFinder.propTypes = {
    users: PropTypes.array.isRequired,
    attraction: PropTypes.object.isRequired,
};

export async function getStaticProps() {
    // GET companion data here
    const data = [
        {
            id: '12345',
            name: 'Tom',
            languages: ['English', 'German'],
            avatar: '',
        },
        {
            id: '67890',
            name: 'Jebb',
            languages: ['Dog', 'Mandarin'],
            avatar: '',
        },
    ];

    const attraction = {
        name: 'Empire State Building',
        code: 'empire_state_building',
    };
    return {
        props: {
            users: data,
            attraction,
        },
    };
}

export default CompanionFinder;
