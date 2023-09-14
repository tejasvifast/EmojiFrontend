import { get, map } from "lodash";
import { useEffect, useState } from "react";
import { faceEmojis, flowersEmojis, handSignEmojis, fruitsEmojis, foodEmojis } from "../utils/emojiBundle";

//console.log(moreFlowers);
const emojisbundle = { faceEmojis, flowersEmojis, handSignEmojis, fruitsEmojis, foodEmojis }

const EmojiContainer = (props) => {
  const { selectedEmojiBundle } = props
  const [rotate, setRotate] = useState('')
  const [emoji, setEmoji] = useState(
    {
      name: "Grinning Face",
      emoji: "😀",
      unicode: "\u{1F600}",
      utf8: "&#x1F600;",
      html: "&#128512;",
      url: "%F0%9F%98%80"
    }
  )   //backgroundColor:'#194D33'

  useEffect(() => {
    setEmoji(get(emojisbundle, selectedEmojiBundle)[0])
  }, [selectedEmojiBundle])

  return <div style={{ borderRadius: '20px' }}>
    {emoji && <div style={{ borderRadius: '20px', backgroundColor: 'pink', padding: '20px', display: 'flex' }}>
      <div>
        <h4>Emoji Details</h4>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: '100px' }}> Name : {emoji.name}</span>
          <span> Unicode : {emoji.unicode}</span>
          <span> UTF8 : {emoji.utf8}</span>
          <span> Html Code : {emoji.html}</span>
          <span> Url Code : {emoji.url}</span>
        </div>
      </div>
      <div>
        <h4>Emoji Details</h4>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: '100px' }}> Name : {emoji.name}</span>
          <span> Unicode : {emoji.unicode}</span>
          <span> UTF8 : {emoji.utf8}</span>
          <span> Html Code : {emoji.html}</span>
          <span> Url Code : {emoji.url}</span>
        </div>
      </div>

    </div>
    }
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