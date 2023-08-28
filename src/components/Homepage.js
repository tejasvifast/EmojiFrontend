import Appbar from "./Appbar"
import Smilyface from "./SmilyFace"

const HomePage = () => {
    return (
        <div style={{boxShadow:'2px 2px 4px black',height:'100%',margin:'10px',borderRadius:'20px'}}>
            <Appbar/>
            <Smilyface/>
        </div>
    )
}

export default HomePage