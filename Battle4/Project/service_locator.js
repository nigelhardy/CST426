class AudioService {
    // should be abstract class
    // would be virtual
  playSound(soundID) { return null; };
};

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
class AudioNull {
  constructor() {
      
  }
  playSound(soundID)
  {
    alert("Audio not initialized.");
    
  }
};

Object.setPrototypeOf(AudioNull.prototype, AudioService);