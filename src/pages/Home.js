import './Home.css';
import MainInfo from '../components/main-page/main-info/MainInfo';
import LinksSection from '../components/main-page/links-section/LinksSection';

function Home(){
    const color1 = "#75c5aa";
    const color2 = "#ffffff";
    const fabian = {name: 'Fabian', career: 'Animation', mainColor: color1, secondaryColor: color2, rotation: 270};
    const mike = {name: 'Mike', career: 'Software', mainColor: color2, secondaryColor: color1, rotation: 90};

    return(
        <div className='main-page' style={{width:'100vw'}}>
            <LinksSection data={fabian} />
            <MainInfo data={fabian}/>
            <MainInfo data={mike}/>
            <LinksSection data={mike} />
        </div>
    )
};

export default Home;