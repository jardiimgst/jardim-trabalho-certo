
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Text, View } from 'react-native';



import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFFAFA', dark: '#4169E1' }}
      headerImage={

        <Image source={require('@/assets/images/capa-praia.png')} //fundo 2
        style={styles.headerImage}
        />

      }
      
      >

          <Image source={require('@/assets/images/sitegrazi.png')}
          style={styles.fundo}
          />

        

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem Vindo ! 👋🏽</ThemedText>
        
        </ThemedView>
      
      <View style={{alignItems: "center", justifyContent: "center"}}>
        <Text style={styles.txt}> - Venha conferir o meu trabalho como desenvolvedor web.</Text>
      </View>

        {Platform.select({
          ios: (
            <ThemedText>
              
            </ThemedText>
          ),
        })}
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: 395,
    height: 250,
    resizeMode: "cover",
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  txt: {
    fontSize: 20,
    color: '#fff',
    textAlign: "center",
    fontWeight: 'bold',
    marginTop: -5,
    alignItems: "center"
  },
  fundo: {
    
  },
});
