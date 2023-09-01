import styles from './Paragraph.module.css'

console.log(styles);

function Paragraph() {
    return (
        <p className={styles.paragraph}>
            Waiting for update signal from WDS...
        </p>
    )
}

export default Paragraph