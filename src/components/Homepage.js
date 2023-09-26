import { map } from "lodash";
import Appbar from "./Appbar"
import EmojiContainer from "./EmojiContainer"
import { Button } from 'react-bootstrap';
import { useState } from "react";

const buttonConfig = [
    { value: 'faceEmojis', label: 'Face' },
    { value: 'flowersEmojis', label: 'Flower' },
    { value: 'handSignEmojis', label: 'Hand Sign' },
    { value: 'fruitsEmojis', label: 'Fruit' },
    { value: 'foodEmojis', label: 'Food' },
    { value: 'vehicleEmojis', label: 'Vehicle' }
]

const HomePage = () => {
    const [selectedEmojiBundle, setSelectedEmojiBundle] = useState('faceEmojis')
    return (
        <div style={{ boxShadow: '2px 2px 4px black', height: '100%', margin: '10px', borderRadius: '20px', padding: '10px' }}>
            <Appbar />
            {/* <div class="box"></div>

            <div class="container">
                <div class="ring red-ring"></div>
                <div class="ring green-ring"></div>
                <div class="main"></div>
            </div> */}

            <div style={{ display: 'flex', flexWrap: 'wrap', border: '1px solid lightGreen', borderRadius: '10px', marginTop: '15px', marginBottom: '5px' }}>
                {
                    map(buttonConfig, (el) => {
                        return <div>
                            <Button
                                className="nav-button"
                                style={{ backgroundColor: selectedEmojiBundle === el.value ? "#61dafb" : "white" }}
                                onClick={() => {
                                    setSelectedEmojiBundle(el.value)
                                }}
                            >
                                {el.label}
                            </Button>
                        </div>
                    })
                }
            </div>
            <EmojiContainer selectedEmojiBundle={selectedEmojiBundle} />
        </div>
    )
}

export default HomePage