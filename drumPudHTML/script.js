import { KEY_MAP, SOUNDS } from './constans.js'



const pads = document.querySelectorAll('.pad')

const loadSounds = (sounds) => {
    sounds.forEach((sound) => {
        const audio = new Audio(sound)
        audio.load()
    });
}

const playSound = (sounds, index) => {
    const sound = sounds[index];
    const audio = new Audio(sound);
    audio.load();
    audio.play()
}

loadSounds(SOUNDS)

const animatePad = (pads, index) => {
    const pad = pads[index];
    pad.style.animation = 'dance 0.1s';
    pad.addEventListener('animationend', () =>{
        pad.style.animation = 'none';
    })
}

const keyPressHendler = (evt) => {
    switch (evt.key) {
        case KEY_MAP.kick:
            playSound(SOUNDS, 0)
            animatePad(pads, 0)            
            break;
        case KEY_MAP.cymbal:
            playSound(SOUNDS, 1)            
            break;
        case KEY_MAP.snare:
            playSound(SOUNDS, 2)            
            break;
        case KEY_MAP.openhat:
            playSound(SOUNDS, 3)            
            break;
        case KEY_MAP.longCrash:
            playSound(SOUNDS, 4)            
            break;
        case KEY_MAP.hihat:
            playSound(SOUNDS, 5)            
            break;
        default:
            break;
    }
}



document.addEventListener('keypress', keyPressHendler)