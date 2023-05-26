import NaviBar from "./NaviBar"

export default function SplashPage(){
    return(
        <div>
            <NaviBar className="navbar" style={{position:'absolute', zIndex:'1'}}/>
            <div className='background-pic' style={{zIndex:'-1', position:'absolute', top:'0rem'}}>
                <h1 style={{fontSize:'200px', margin:'auto', fontFamily: 'Amatic SC, cursive', color: 'white'}}>JotLog</h1>
                <h5 style={{fontSize:'12px',color:'white'}}>Photo by <a style={{color:'white'}}href='https://unsplash.com/@sixteenmilesout'>Sixteen Miles Out</a> on Unsplash</h5>
            </div>
        </div>
    )
}