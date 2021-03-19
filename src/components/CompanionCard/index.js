import React from 'react';
import { CompanionCard } from '../../styles/global';

const Card = ({ user, handleClick }) => (
    <CompanionCard>
        <div className="c-card c-card__left">
            <div className="c-card--image" />
            <div>
                <button onClick={handleClick}>Connect</button>
            </div>
        </div>
        <div className="c-card c-card__right">
            <h2>{user.name}</h2>

            <div className="c-card__languages">
                <img src="https://o.dlf.pt/dfpng/smallpng/164-1640241_language-free-download-png-and-vector-language.png" />
                {user.languages.map((language, i) => [i > 0 && ', ', <span key={i}>{language}</span>])}
            </div>

            <div>Goes with the flow:</div>
            <input type="range" id="gwtf" name="gwtf" min="0" max="11" value="5" />
            <div>Introvert:</div>
            <input type="range" id="introvert" name="introvert" min="0" max="11" value="6" />

            <div />
        </div>
    </CompanionCard>
);

export default Card;
