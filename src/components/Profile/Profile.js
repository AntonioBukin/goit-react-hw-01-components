import PropTypes from 'prop-types';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={profile}>
      <div className={description}>
        <img src={avatar} alt="User avatar" className={avatar} />
        <p className={name}>{username}</p>
        <p className={tag}>@{tag}</p>
        <p className={location}>{location}</p>
      </div>
    </div>
  );
}
