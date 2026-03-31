import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Contato() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Contato da Bobbie Goods Cosméticos</Text>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Telefone:</Text>
          <Text style={styles.info}>(11) 98765-4321</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>WhatsApp:</Text>
          <Text style={styles.info}>(11) 91234-5678</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Endereço:</Text>
          <Text style={styles.info}>Rua das Flores, 123 - Campinas, SP</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>CNPJ:</Text>
          <Text style={styles.info}>12.345.678/0001-90</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.info}>contato@bobbiegoods.com</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef1f6',
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ec37a0',
    textAlign: 'center',
  },
  infoBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  info: {
    fontSize: 16,
    color: '#555',
  },
});