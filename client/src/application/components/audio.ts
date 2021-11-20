export class Audio{
    src: string;
    play() {
      throw new Error("Method not implemented.");
    }
    audio: Audio;
    autoplay: boolean;
    constructor(){
        this.audio = new Audio();
        this.audio.autoplay = false;
    }
    
}
