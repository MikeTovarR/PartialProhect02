import './MainInfo.css';
import SocialButtons from '../../social-buttons/SocialButtons';

function MainInfo({data}){
    const {name, career, mainColor, secondaryColor} = data;

    var colorButtons = '';
    if(mainColor == "#ffffff"){
        colorButtons = "Green";
    }else{
        colorButtons = "White";
    }

    var socials = {}
    if(name == "Mike"){
        socials = {linkedin: 'https://www.linkedin.com/in/miguel-tovarrodriguez/', 
        tw: 'https://x.com/miketovarr', 
        email: 'mailto:miguel_tovarrodriguez@hotmail.com'};
    }else{
        socials = {linkedin: 'https://www.linkedin.com/in/fabi%C3%A1n-ruiz-s%C3%A1nchez-930b59262/', 
        tw: 'https://x.com/feivianss', 
        email: 'mailto:fabian@halberdstudios.com'};
    }

    console.log(name, career, mainColor, secondaryColor); // debugger

    return(
        <div className="main-info" style={{backgroundColor: mainColor, color: secondaryColor}}>
            <div>
                <h2>Hi there! <br/> I'm {name}</h2>
            </div>
            <div style={{position: 'relative', 'maxHeight': '70%'}} >
                <img id='presentation-image'
                src={require(`../../../media-sources/${name}/${name}PNG.png`)} />
            </div>
            <div>
                <h2>{career} Student</h2>
            </div>
            <div>
                <SocialButtons colorButtons={colorButtons} socials_links={socials}/>
            </div>
        </div>
    )
};

export default MainInfo;