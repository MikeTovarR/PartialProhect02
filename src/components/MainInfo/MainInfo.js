import './MainInfo.css';

function MainInfo({data}){
    const {name, career, mainColor, secondaryColor} = data;
    console.log(name, career, mainColor, secondaryColor);

    return(
        <div className="main-info" style={{backgroundColor: mainColor, color: secondaryColor}}>
            <div>
                <h2>Hi there! <br/> I'm {name}</h2>
            </div>
            <div style={{position: 'relative', width: '100%'}} >
                <img
                src={'https://ichef.bbci.co.uk/news/976/cpsprodpb/F382/production/_123883326_852a3a31-69d7-4849-81c7-8087bf630251.jpg'} /></div>
            <div>
                <h2>{career} Student</h2>
            </div>
            <div>
                <h2>Aquí van los links</h2>
            </div>
        </div>
    )
};

export default MainInfo;