const Appbar = () => {
    return <div>
        <div style={{ backgroundColor: 'lightyellow', textAlign: 'center', display: 'flex', justifyContent: 'center', height: '7vw', borderRadius: '20px', boxShadow: '2px 3px 10px 4px orange' }}>
            <span style={{ display: 'flex', alignItems: 'center', textAlign: 'center', fontSize: '4vw', fontWeight: 'bold', color: 'yellow', textShadow: '2px 10px 10px black' }}>
                EM <p className="headingEmoji">&#128521;</p> JI &nbsp; W<p className="headingEmoji">&#128521;</p>RLD
            </span>
        </div>
    </div>
}

export default Appbar;