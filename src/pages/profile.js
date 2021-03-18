import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@pickle/avatar';
import { Profile as Container } from '../styles/global';

const Profile = ({ user }) => (
    <Container>
        <div className="profile profile--avatar">
            <Avatar
                img="https://www.nacdnet.org/wp-content/uploads/2016/06/person-placeholder.jpg"
                text={`Hi, ${user.name}!`}
            />
        </div>

        <div className="profile profile--email">Email: {user.email}</div>
        <div className="profile profile--age">Age: {user.age}</div>
        <div className="profile profile--bio">Bio: {user.bio}</div>

        <button type="button" onClick={() => console.log('clicked')}>
            I have an order number
        </button>

        <button type="button" onClick={() => console.log('clicked')}>
            Where are you travelling?
        </button>
    </Container>
);

export async function getStaticProps() {
    // make fetch request for user here
    const user = {
        name: 'Tom',
        email: 'tom.allen@email.com',
        age: 30,
        bio: 'Lorem Ipsum something about somthing to do with a bio.',
    };

    return {
        props: {
            user,
        },
    };
}

Profile.propTypes = {
    user: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        bio: PropTypes.string.isRequired,
    }).isRequired,
};

export default Profile;
