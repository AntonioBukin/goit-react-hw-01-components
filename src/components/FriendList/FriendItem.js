import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendItem({id, avatar, name, status}) {
    return (
        <li key={id} className={css.item}>
            <span className={status ? css.online : css.offline}></span>
            <img
            className={css.avatar}
            src={avatar}
            alt={name}
            width='50'
            height='50'/>
            <p className={css.name}>{name}</p>
        </li>
    );
}

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
};