import { get, map } from "lodash";
import { useEffect, useState } from "react";
import { faceEmojis, flowersEmojis, handSignEmojis, fruitsEmojis, foodEmojis } from "../utils/emojiBundle";
import { Button } from "react-bootstrap";

//console.log(moreFlowers);
const emojisbundle = { faceEmojis, flowersEmojis, handSignEmojis, fruitsEmojis, foodEmojis }

const EmojiContainer = (props) => {
  const { selectedEmojiBundle } = props
  const [rotate, setRotate] = useState('')
  const [emoji, setEmoji] = useState(
    // {
    //   name: "Grinning Face",
    //   emoji: "😀",
    //   unicode: "\\u{1F600}",
    //   utf8: "&#x1F600;",
    //   html: "&#128512;",
    //   url: "%F0%9F%98%80"
    // }
  )   //backgroundColor:'#194D33'
  const [ howToUseContainer , setHowToUseContainer] = useState(false)


  // useEffect(() => {
  //   const handleOnline = () => {
  //     alert("You are online!");
  //   }
  
  //   window.addEventListener('online', handleOnline);
  
  //   return () => {
  //     window.removeEventListener('online', handleOnline);
  //   }
  // }, []);
  

  useEffect(() => {
    setEmoji(get(emojisbundle, selectedEmojiBundle)[0])
    //window.addEventListener('online',()=>{alert("online")})
   // document.getElementById('firstDiv').innerText = '\\u{1F600}'
  }, [selectedEmojiBundle])

  return <div style={{ borderRadius: '20px' }}>
    {emoji && <div className="detailContainerMain" style={{ }}>
      <div className="emojiDetailContainer" >
        <div style={{borderBottom:'2px solid #8B8000', backgroundColor: '#FFF380', width: '100%' ,paddingLeft:'10px'}}>
          <span style={{ fontWeight: '700' }} >Emoji Details {emoji.emoji}</span>
          
        </div>
        <table style={{ width: '100%',padding:'5px' }}>
          <tbody>
            <tr>
              <td style={{ fontWeight: '500' }}>Name</td>
              <td>: {emoji.name}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '500' }}>Emoji</td>
              <td>: {emoji.emoji}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '500' }}>Unicode</td>
              <td>: {emoji.unicodeString}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '500' }}>UTF8</td>
              <td>: {emoji.utf8}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '500' }}>Html Code</td>
              <td>: {emoji.html}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '500' }}>Url Code</td>
              <td>: {emoji.url}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {howToUseContainer && <div className="detailContainer" style={{}}>
        <div style={{borderBottom:'2px solid #8B8000', backgroundColor: '#FFF380', width: '100%' ,paddingLeft:'10px'}}>
          <span style={{ fontWeight: '700' }} >Emoji Details</span>
          <i className="fa fa-close cursor-pointer"/>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div id='firstDiv'></div>
          <span style={{ fontWeight: '100px' }}> Name : {emoji.name}</span>
          <span> Unicode : {emoji.unicode}</span>
          <span> UTF8 : {emoji.utf8}</span>
          <span> Html Code : {emoji.html}</span>
          <span> Url Code : {emoji.url}</span>
        </div>
      </div>}



      {/* <div className="detailContainer" style={{marginLeft: '10px' }}>
      <div style={{borderBottom:'2px solid #8B8000', backgroundColor: '#FFF380', width: '100%' ,paddingLeft:'10px'}}>
          <span style={{ fontWeight: '700' }} >Emoji Details</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: '100px' }}> Name : {emoji.name}</span>
          <span> Unicode : {emoji.unicode}</span>
          <span> UTF8 : {emoji.utf8}</span>
          <span> Html Code : {emoji.html}</span>
          <span> Url Code : {emoji.url}</span>
        </div>
      </div> */}

    </div>
    }
    <div id="howToUseButton" style={{textAlign:'center',marginTop:'5px'}}>
    <Button style={{height:'30px',backgroundColor:'lightyellow'}} onClick={()=>{setHowToUseContainer(true)}}>How To Use In Code ?</Button>
    </div>

    <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: '10px' }}>
      {map(get(emojisbundle, selectedEmojiBundle), (el) => {
        return <div
          className={rotate === el.html ? 'headingEmoji' : ''}
          style={{ width: '41px', height: '41px', textAlign: 'center' }}
          onClick={() => {
            setEmoji(el)
            setRotate(el.html)
          }}
        >
          <span style={rotate === el.html ? { fontSize: '35px' } : { fontSize: '25px' }} >{el.unicode}
          </span>
        </div>
      })}
    </div>
  </div>
}

export default EmojiContainer;