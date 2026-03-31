import { StatusBar } from 'expo-status-bar';
import {Pressable,StyleSheet,Text,TextInput,View,KeyboardAvoidingView,ScrollView,Platform,TouchableOpacity,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>
          <Image source={ require ('../../../assets/bobbie.jpg') } style={styles.logo}/>
          <Text style={styles.title}>Bobbie Goods Cosméticos </Text>

          <Text style={styles.description}>
           Bobbie Goods Cosméticos é uma empresa fictícia que oferece produtos de beleza modernos, acessíveis e de qualidade, com foco em autoestima, bem-estar e praticidade no dia a dia.
          </Text>
          <StatusBar style="auto" />
          <FontAwesome name='home' size={48} color='pink' />

          <View style={styles.alinharEmLinha}>
            <TouchableOpacity style={styles.socialMedia}>
              <FontAwesome name='facebook' size={32} color='pink' />
              <Text>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialMedia}>
              <FontAwesome name='youtube-play' size={32} color='red' />
              <Text style={styles.socialMediaText}>Youtube</Text>
            </TouchableOpacity>
          </View>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Contato')}
          >
            <Text style={styles.buttonText}>Entre em contato conosco</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Produtos')}
          >
            <Text style={styles.buttonText}>Venha conhecer nossos produtos</Text>
          </Pressable>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20
  },

 logo: {
  width: 120,   
  height: 120,  
  borderRadius: 30, 
  marginTop: 10
},

  title: {
    color: '#892a69',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10
  },

  description: {
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10
  },

  input: {
    borderWidth: 1,
    borderColor: '#d0d7de',
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 10,
    width: '95%',
    marginTop: 15
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff42b6',
    marginTop: 20,
    borderRadius: 10,
    height: 48,
    width: '95%'
  },

  alinharEmLinha: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    width: '95%'
  },

  socialMedia: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    height: 48
  },

  socialMediaText: {
    marginLeft: 5
  }
});