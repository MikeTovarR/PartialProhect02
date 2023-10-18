import './Resume.css';
import BackButton from '../components/BackButton';
import SocialButtons from '../components/social-buttons/SocialButtons';
import { useMyContext } from '../DataContext.js';

function Resume(){

    const {globalData} = useMyContext();

    console.log(globalData['Temporary']);

    return(
        <div id="resume-container">
            <div id='overview' style={{padding: '10%'}}>
                <div style={{align:'top-left', width:'10%'}}><BackButton/></div>
                <div>
                    <img className='presentation-image' style={{borderRadius: '100%', 'backgroundColor':'#ffffff'}}
                    src={require(`../media-sources/${globalData["Temporary"]}/${globalData["Temporary"]}PNG.png`)}/>
                </div>

                <div>
                    <h1>{globalData["Temporary"]}</h1>
                    <h1>About Me</h1>
                </div>

                <div >
                    <SocialButtons colorButtons={'White'} name={globalData['Temporary']}/>
                </div>
            </div>

            <div id='details' style={{padding: '1%'}}>
                <div>
                    <h1>info1</h1>
                </div>

                <div>
                    <h1>info2</h1>
                </div>
            </div>
        </div>
    )
};

export default Resume;