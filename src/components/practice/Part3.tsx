import styles from './Part3.module.scss';
const {container} = styles;

const Part3 = () => {
    return (
        <div>
            <h1>Part 2</h1>
            <div className={container}>
            <header>Header</header>
                <main>Content</main>
                <nav>Navigation</nav>
                <aside>Sidebar</aside>
                <footer>Footer</footer>
            </div>
        </div>
    );
};

export default Part3;
