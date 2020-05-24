import { StyleSheet } from 'react-native';
import Contants from 'expo-constants';

export default StyleSheet.create({
  container : {
    flex:1,
    paddingHorizontal:24,
    paddingTop: Contants.statusBarHeight + 20,
    backgroundColor:'#ff8c00'    
  },
  logoTopo :{
    width:400,
    height:200,  
    flex:1  
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  headerText: {
    fontSize: 15,
    color: '#737380'
  },
  headerTextBold : {
    fontWeight:'bold'
  },

  title:{
    fontSize:30,
    marginBottom:16,
    color:'#13131a',
    fontWeight:'bold'
  },
  description: {
    fontSize:16,
    lineHeight:24,
    color:'#000'
  },

  personagemList:{
  },
  personagem:{
    padding:24,
    borderRadius:12,
    backgroundColor:'#000',
    marginBottom:16
  },

  personagemProperty:{
    fontSize:14,
    color:'#fff',
    fontWeight:'bold'
  },

  personagemValue: {
    marginTop:8,
    fontSize:17,
    marginBottom:24,
    color:'#ff8c00',
    fontWeight: 'bold'
  }
});