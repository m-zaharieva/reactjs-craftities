import PageBanner from './../PageBanner/PageBanner.js';
import TopItems from './TopItems/TopItems.js';
import HomeCategories from './HomeCategories/HomeCategories';


function Home() {
    return (
        <>
            <PageBanner />
            <TopItems />
            <HomeCategories />
        </>
    );
};

export default Home;