
import SoundPlayer from 'react-native-sound-player'
export class Player{
  
    static actualSong = ''
    static playing = false
  
    static load = (file, title)=>{
      try{
        SoundPlayer.loadSoundFile(file, 'mp3')
        this.actualSong = title
      }catch (e) {alert("e")}
    }
  
    static loadAndPlay = (file, title) =>{
      if(this.playing){
        this.pause()
      }
      this.load(file, title)
      this.play()
    }
  
    static play = ()=>{
      SoundPlayer.play()
      this.changeState()
    }
    static pause = ()=>{
      SoundPlayer.pause()
      this.changeState()
    }
    static playPause = ()=>{
      if(this.actualSong!=''){
        if(this.playing){
          SoundPlayer.pause()
        }else{
          SoundPlayer.play()
        }
        this.changeState()
      }
    }
    static isPlaying = ()=>{
      return this.playing
    }
    static getActualSong = ()=>{
      return this.actualSong
    }
    static setActualSong = (songTitle) => {
      this.actualSong = songTitle
    }
  
    static changeState = () => {
      this.playing = !this.playing
    }
  }