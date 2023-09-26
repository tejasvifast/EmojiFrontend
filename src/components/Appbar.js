import { get } from "lodash";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { faceEmojis } from "../utils/emojiBundle";


const Appbar = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const emojiRef1 = useRef(null)
  const emojiRef2 = useRef(null)

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    }

    const handleOffline = () => {
      setIsOnline(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    }
  }, []);

  const changeEmogi = () => {
    let i = 0
    //let emojis = ['😀','😄','😂','🤣','🙂','😉','😍','😘','😗','😚','😛','😜','🤪','🤨','🧐','😎','🤩','😃','😁','😆','😅'];
    const interval = setInterval(() => {
      console.log(i)
      emojiRef1.current.innerText = get(faceEmojis, `[${i++}].emoji`)
      emojiRef2.current.innerText = get(faceEmojis, `[${i++}].emoji`)
      if (i > faceEmojis.length - 5) {
        i = 0
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);


  }

  useEffect(() => {
    changeEmogi()
  })
  //#FF00FF  PINK COLOR
  return <div>
    <div style={{ border: '1px solid #D2D2D2', backgroundColor: '', textAlign: 'center', display: 'flex', justifyContent: 'center', height: '7vw', borderRadius: '20px 20px 15px 15px', boxShadow: '4px 4px 2px 0px #D2D2D2' }}>
      <span style={{ display: 'flex', alignItems: 'center', textAlign: 'center', fontSize: '4vw', fontWeight: 'bold', color: '#ff91f0', textShadow: '4px 4px 4px #616061' }}>
        EM <p ref={emojiRef1} className="headingEmoji">&#128521;</p> JI &nbsp; W<p ref={emojiRef2} className="headingEmoji">&#128521;</p>RLD
      </span>
      {isOnline && <div className="online-dot"></div>}
    </div>
  </div>
}

export default Appbar;