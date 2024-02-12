import styles from './Part1.module.scss';
const {container, item} = styles;

const Part1 = () => {
    return (
        <div><h1>Part 1</h1>
            <div className={container}>
                <div className={item}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                    commodi consequatur debitis dignissimos earum, facere illum ipsa iste maxime minima nam nihil
                    quisquam rerum? Excepturi fuga molestiae nisi perferendis reprehenderit!
                </div>
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

export default Part1;
