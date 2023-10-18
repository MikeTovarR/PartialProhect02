import './Resume.css';

function Resume({data}){

    const name = data;
    // var socials = getSocials(name);

    console.log(name);

    return(
        <div id="resume-container">
            <div id='overview' style={{padding: '10%'}}>
                <div>
                    <img className='presentation-image' style={{borderRadius: '100%', 'backgroundColor':'#ffffff'}}
                    src={require(`../media-sources/${name}/${name}PNG.png`)}/>
                </div>

                <div>
                    <h1>{name}</h1>
                    <h1>About Me</h1>
                </div>

                <div>
                    {/* <SocialButtons colorButtons={'#ffffff'} socials_links={socials}/> */}
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