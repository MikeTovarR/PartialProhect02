import './MainInfo.css';
import SocialButtons from '../../social-buttons/SocialButtons';

function MainInfo({data}){
    
    if (!data) {
        return <div>Loading...</div>;
    }

    var colorButtons = '';
    if(data.color1 == "#ffffff"){
        colorButtons = "Green";
    }else{
        colorButtons = "White";
    }

    // console.log(name, career, mainColor, secondaryColor); // debugger

    return(
        <div id="main-info" style={{backgroundColor: data["color1"], color: data["color2"]}}>
            <div>
                <h2>Hi there! <br/> I'm {data["name"]}</h2>
            </div>
            <div style={{position: 'relative', 'maxHeight': '70%'}} >
                <img className='presentation-image'
                src={require(`../../../media-sources/${data["name"]}/${data["name"]}PNG.png`)} />
            </div>
            <div>
                <h2>{data.major} data</h2>
            </div>
            <div>
                <SocialButtons colorButtons={colorButtons} name={data['name']}/>
            </div>
        </div>
    )
};

export default MainInfo;