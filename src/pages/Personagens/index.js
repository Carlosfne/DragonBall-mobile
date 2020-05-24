import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Personagens() {
  const [ personagens, setPersonagens ] = useState([])

  async function getPersonagens(){   
    const response = await api.get('character')        
    setPersonagens(response.data)
  }

  useEffect(() => {
    getPersonagens()
  }, [])

  return (
    <View style={styles.container}>
      <View  style={styles.header}>
        <Image source={logoImg} style={styles.logoTopo} />        
      </View>

      <Text style={styles.title}>Bem-vindo! ao App do Dragon Ball Z</Text>
      <Text style={styles.description}>desenvolvido por Carlos Eduardo Junior</Text>

      <FlatList 
        data={personagens}
        style={styles.personagemList}
        keyExtractor={personagem => String(personagem.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item :personagem}) => (
          <View style={styles.personagem}>
          <Text style={styles.personagemProperty}>Personagem: </Text>
          <Text style={styles.personagemValue}>{personagem.name} </Text>
          
          <Text style={styles.personagemProperty}>Espécie: </Text>
          <Text style={styles.personagemValue}>{personagem.species} </Text>
          
          <Text style={styles.personagemProperty}>Planeta de Origem: </Text>
          <Text style={styles.personagemValue}>{personagem.originPlanet} </Text>

          <Text style={styles.personagemProperty}>Série: </Text>
          <Text style={styles.personagemValue}>{personagem.series} </Text>
           
        </View>
        )}
      />
    </View>
  )
}