import { useEffect } from "react";
import { useState } from "react";

const Appbar = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

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
    return <div>
        <div style={{border:'1px solid green',  backgroundColor: '', textAlign: 'center', display: 'flex', justifyContent: 'center', height: '7vw', borderRadius: '20px 20px 15px 15px', boxShadow: '4px 4px 2px 0px black' }}>
            <span style={{ display: 'flex', alignItems: 'center', textAlign: 'center', fontSize: '4vw', fontWeight: 'bold', color: '#FF00FF', textShadow: '2px 1px 1px black'}}>
                EM <p className="headingEmoji">&#128521;</p> JI &nbsp; W<p className="headingEmoji">&#128521;</p>RLD
            </span>
            {isOnline && <div className="online-dot"></div>}
        </div>
    </div>
}

export default Appbar;