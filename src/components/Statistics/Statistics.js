import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomHexColor() {
    let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return color;
  }

export default function Statistics({title, stats}) {
    return (
    <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.statlist}>
        {stats.map(({id, label, percentage}) => {
            return (<li style = {{
                backgroundColor: getRandomHexColor(),
            }}
            key={id} className={css.item}>
                <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}</span>
        </li>);
        })}
    </ul>
  </section>
  );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),
    )
};
