import NaviBar from "./NaviBar"

export default function SplashPage(){
    return(
        <div>
            <NaviBar className="navbar" style={{zIndex:'1'}}/>
            <div className='background-pic'>
                <h1 style={{fontSize:'200px', justifySelf:'center', fontFamily: 'Amatic SC, cursive', color: 'white'}}>JotLy</h1>
            </div>
        </div>
    )
}