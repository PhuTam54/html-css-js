import clsx from 'clsx'
import styles from './Button.module.scss'

// classnames
// clsx

function Button({ primary, disabled }) {

    const classes = clsx(styles.btn, {
            [styles.primary]: primary,
            // 'd-flex': true
            [styles.disabled] : disabled
        })

    return (
        <button className={classes}>
            Click me!!!
        </button>
    )
}

export default Button