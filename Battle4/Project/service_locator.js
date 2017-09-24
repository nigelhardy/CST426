class AudioService {
    // should be abstract class
    // would be virtual
  playSound(soundID) { return null; };
};
// HD implementation of Audio
// plays more HD sound
class AudioHD {
  constructor() {
      this.sounds = ['../Project/game_sound.wav'];
  }
  playSound(soundID)
  {
    var audio = new Audio(this.sounds[soundID]);
    audio.play();
    
  }
};
Object.setPrototypeOf(AudioHD.prototype, AudioService);
// standard def audio implementation, plays lower quality audio
class AudioSD {
  constructor() {
      this.sounds = ['../Project/game_sound_lo-fi.wav'];
  }
  playSound(soundID)
  {
    var audio = new Audio(this.sounds[soundID]);
    audio.play();
    
  }
};
Object.setPrototypeOf(AudioSD.prototype, AudioService);
// Audio implementation for no audio at all (prevents empty/null object reference)
class AudioNull {
  constructor() {
      
  }
  playSound(soundID)
  {
    alert("Audio not initialized.");
    
  }
};
Object.setPrototypeOf(AudioNull.prototype, AudioService);