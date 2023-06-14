import PropTypes from 'prop-types';
import FrendItem from './FriendItem';
import css from './FriendList.module.css';

export default function FriendList({friends}) {
    return (
        <ul className={css.friends}>
            {
                friends.map(friend =>(
                    <FrendItem
                    id={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    status={friend.isOnline}/>
                ))
            }
</ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    ) 
}
