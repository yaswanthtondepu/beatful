import { v4 as uuidv4 } from 'uuid';

function chillHop() {
    return [
        {
            name: "Beaver Creek",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist: "Aso, Middle School Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10076",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Jazz Cabbage",
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
            artist: "Ian Ewing, Strehlow",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9363",
            color: ["#BA4A46", "#FDF0DD"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Conflicted",
            cover: "https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",
            artist: "Hanz",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=24642",
            color: ["#95737f", "#4d5d7a"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Seeds for Tomorrow",
            cover: "https://chillhop.com/wp-content/uploads/2021/08/af3ce13ad39d38057f00144f8a7c295877ccfec1-1024x1024.jpg",
            artist: "Smile High, Teddy Roxpin",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=23336",
            color: ["#5eadb2", "#4d5967"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Gratitude",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/3b73a510169f14c4af83ac4016e809917412702b-1024x1024.jpg",
            artist: "fantompower",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=22792",
            color: ["#dcb5d8", "#cddfdf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Fallin'",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/034f52eeaeceb144cca67b0930d705d32fc39e37-1024x1024.jpg",
            artist: "Ruck P, Jaz Lund",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=20561",
            color: ["#c6868e", "#676483"],
            id: uuidv4(),
            active: false,
        }
    ]
}

export default chillHop;