import './Home.css';
import MainInfo from '../components/MainInfo/MainInfo';
import LinksSection from '../components/LinksSection/LinksSection';

function Home(){
    const color1 = "#75c5aa";
    const color2 = "#ffffff";
    const fabian = {name: 'Fabian', career: 'Animation', mainColor: color1, secondaryColor: color2};
    const mike = {name: 'Mike', career: 'Software', mainColor: color2, secondaryColor: color1};

    return(
        <div className='main-page' style={{width:'100vw'}}>
            <LinksSection data={{name: 'Fabian', rotation: 270, mainColor: color2, secondaryColor: color1}} />
            <MainInfo data={fabian}/>
            <MainInfo data={mike}/>
            <LinksSection data={{name: 'Mike', rotation: 90, mainColor: color1, secondaryColor: color2}} />
        </div>
    )
};

export default Home;