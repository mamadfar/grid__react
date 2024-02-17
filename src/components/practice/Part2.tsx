import styles from './Part2.module.scss';
const {container, item} = styles;

const Part2 = () => {
    return (
        <div>
            <h1>Part 2</h1>
            <div className={container}>
                <div className={item}>Item 1</div>
                <div className={item}>Item 2</div>
                <div className={item}>Item 3</div>
                <div className={item}>Item 4</div>
                <div className={item}>Item 5</div>
                <div className={item}>Item 6</div>
                <div className={item}>Item 7</div>
                <div className={item}>Item 8</div>
                <div className={item}>Item 9</div>
            </div>
        </div>
    );
};

export default Part2;
