import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';

export default function Produtos() {
    const navigation = useNavigation();
    const [quantidade, setQuantidade] = useState(1);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
            >
                <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>
                    <View style={styles.card}>
                        <Text style={styles.nomeProduto}>Perfume Floral</Text>
                        <Text>Preço: R$ 120,00</Text>
                        <Text style={styles.precoPix}>PIX: R$ 100,00</Text>

                        <View style={styles.logo}>
                            <Image
                                source={require('../../../assets/bobbie.jpg')}
                                style={styles.logo}
                            />
                        </View>
                        <View>
                            <Pressable
                                style={styles.button}
                                onPress={() => alert(`Produto adicionado ao carrinho\nQuantidade: ${quantidade}`)}
                            >
                                <Text style={{ color: 'white' }}>Adicionar ao carrinho</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.nomeProduto}>Hidratante Corporal</Text>
                        <Text>Preço: R$ 80,00</Text>
                        <Text style={styles.precoPix}>PIX: R$ 70,00</Text>

                        <View style={styles.logo}>
                            <Image
                                source={require('../../../assets/bobbie.jpg')}
                                style={styles.logo}
                            />
                        </View>
                        <Pressable
                            style={styles.button}
                            onPress={() => alert(`Produto adicionado ao carrinho\nQuantidade: ${quantidade}`)}
                        >
                            <Text style={{ color: 'white' }}>Adicionar ao carrinho</Text>
                        </Pressable>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.nomeProduto}>Base Líquida</Text>
                        <Text>Preço: R$ 95,00</Text>
                        <Text style={styles.precoPix}>PIX: R$ 85,00</Text>

                        <View style={styles.logo}>
                            <Image
                                source={require('../../../assets/bobbie.jpg')}
                                style={styles.logo}
                            />
                        </View>
                        <Pressable
                            style={styles.button}
                            onPress={() => alert(`Produto adicionado ao carrinho\nQuantidade: ${quantidade}`)}
                        >
                            <Text style={{ color: 'white' }}>Adicionar ao carrinho</Text>
                        </Pressable>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.nomeProduto}>Batom Matte</Text>
                        <Text>Preço: R$ 45,00</Text>
                        <Text style={styles.precoPix}>PIX: R$ 40,00</Text>

                        <View style={styles.logo}>
                            <Image
                                source={require('../../../assets/bobbie.jpg')}
                                style={styles.logo}
                            />
                        </View>
                        <Pressable
                            style={styles.button}
                            onPress={() => alert(`Produto adicionado ao carrinho\nQuantidade: ${quantidade}`)}
                        >
                            <Text style={{ color: 'white' }}>Adicionar ao carrinho</Text>
                        </Pressable>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.nomeProduto}>Máscara de Cílios</Text>
                        <Text>Preço: R$ 60,00</Text>
                        <Text style={styles.precoPix}>PIX: R$ 50,00</Text>

                        <View style={styles.logo}>
                            <Image
                                source={require('../../../assets/bobbie.jpg')}
                                style={styles.logo}
                            />
                        </View>
                        <Pressable
                            style={styles.button}
                            onPress={() => alert(`Produto adicionado ao carrinho\nQuantidade: ${quantidade}`)}
                        >
                            <Text style={{ color: 'white' }}>Adicionar ao carrinho</Text>
                        </Pressable>
                    </View>

                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ fontWeight: 'bold' }}>Quantidade:</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <TouchableOpacity
                                onPress={() => quantidade > 1 && setQuantidade(quantidade - 1)}
                                style={{
                                    backgroundColor: '#ff42b6',
                                    padding: 10,
                                    borderRadius: 10
                                }}
                            >
                                <Text style={{ color: 'white', fontSize: 18 }}>-</Text>
                            </TouchableOpacity>

                            <Text style={{ marginHorizontal: 20, fontSize: 18 }}>
                                {quantidade}
                            </Text>

                            <TouchableOpacity
                                onPress={() => setQuantidade(quantidade + 1)}
                                style={{
                                    backgroundColor: '#ff42b6',
                                    padding: 10,
                                    borderRadius: 10
                                }}
                            >
                                <Text style={{ color: 'white', fontSize: 18 }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.alinharEmLinha}>
                        <TouchableOpacity style={styles.socialMedia}>
                            <FontAwesome name='instagram' size={32} color='pink'></FontAwesome>
                            <Text style={styles.socialMediaText}>Instagram</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#d0d7de',
        backgroundColor: '#fafafa',
        borderRadius: 10,
        padding: 10,
        width: '95%',
        marginTop: 10
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff42b6',
        marginTop: 25,
        borderRadius: 10,
        height: 48,
        width: '95%'
    },
    alinharEmLinha: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10
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
    },

    card: {
        width: '95%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 15,
        marginTop: 20,
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 30,
        marginTop: 10,
        justifyContent: 'center',
    },
    nomeProduto: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        justifyContent: 'center'
    },
    precoPix: {
        color: 'green',
        marginBottom: 10
    }
})