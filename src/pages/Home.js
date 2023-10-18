import './Home.css';
import MainInfo from '../components/main-page/main-info/MainInfo';
import LinksSection from '../components/main-page/links-section/LinksSection';
import { useMyContext } from '../DataContext.js';

function Home(){
    const {globalData} = useMyContext();
    if (!globalData) {
        return <div>Loading...</div>;
    }

    return(
        <div id='main-page' style={{width:'100vw'}}>
            <LinksSection data={globalData['Fabian']} />
            <MainInfo data={globalData['Fabian']}/>
            <MainInfo data={globalData['Mike']}/>
            <LinksSection data={globalData['Mike']} />
        </div>
    )
};

export default Home;