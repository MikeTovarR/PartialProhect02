import './MainInfo.css';

function MainInfo({data}){
    const {name, career, mainColor, secondaryColor} = data;
    console.log(name, career, mainColor, secondaryColor); // debugger

    return(
        <div className="main-info" style={{backgroundColor: mainColor, color: secondaryColor}}>
            <div>
                <h2>Hi there! <br/> I'm {name}</h2>
            </div>
            <div style={{position: 'relative', 'max-height': '80%'}} >
                <img
                src={require(`../../images/${name}/${name}PNG.png`)} />
            </div>
            <div>
                <h2>{career} Student</h2>
            </div>
            <div>
                <h2>Aquí van los links</h2>
                {/* <img src='../../images/icons'/>  aquí crear un "arreglo" de los diferentes iconos de cada color y llamarlo*/} 
            </div>
        </div>
    )
};

export default MainInfo;