import { Dropdown } from 'react-native-material-dropdown';
import {Player} from './services/player'
import { PlayButton} from './playbuttons'
import React, {Component} from 'react';
import {View} from 'react-native';

export  class PlayerComponent extends Component{
  
    
    constructor(props){
        super(props)
        this.state={
            playing:false
        }
        this.onChangeText = this.onChangeText.bind(this);
    }

    onChangeText(text) {
      alert("e")
      cambiarcancion(text, this.props.songs)
    }

    //NOTA: HAY QUE OPTIMIZAR ESTA FUNCIÓN
    playPress = ()=>{
      let value = this.child.state.value
      if(value == Player.getActualSong()){
        Player.playPause()
      }else{
        
        this.cambiarcancion(value, this.props.songs)
        
      }
      
    }

    cambiarcancion = (valor, canciones) => {
      for (i=0; i<canciones.length; i++){
        if(canciones[i].title == valor){
          Player.loadAndPlay(canciones[i].filename, canciones[i].title)
        }
      }
    }

    render(){
        let elems = []
        let songs = this.props.songs
        let texto = ""
        for (i=0;i<songs.length;i++){
            elems.push(
                {
                    value:songs[i].title
                }
            )
        }
        if(this.state.playing == false){
            texto = "false"
        }else{
            texto = "true"
        }
      return(
        <View style={{flex:1, flexDirection:"row", justifyContent:"space-around", marginVertical:10}}>
            <View style={{width:"10%"}}></View>
            <View style={{width:"60%",backgroundColor:'#039be5', borderRadius:5, paddingHorizontal:10}}>
            <Dropdown
                ref={child => {this.child = child}} {...this.props} 
                label={this.props.title}
                data={elems}
                value={elems[0].value}
                style={{color:"white"}}
                baseColor="white"
            />
            </View>
            <View style={{flex:1, alignItems:"center",justifyContent:"center",width:"20%"}}>
            <PlayButton onPress={this.playPress}/>
            </View>
            <View style={{width:"10%"}}></View>
          </View>
      )
    }
  }