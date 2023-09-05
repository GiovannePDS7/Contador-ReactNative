import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import Logo from './assets/trucoFundo.png'
export default function App() {
  const [valor, setValor] = useState(0);
  const [valor2, setValor2] = useState(0);
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.subcontainer}>
        <Text style={styles.texto}>Contador</Text>
        <View style={styles.conteudo}>
          <View style={styles.Vleft}>
            <Text style={styles.time}>TIME 1</Text>
            <Text style={styles.Txt}>{valor}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => {
              setValor(valor + 1);
              if (valor >= 9999) {
                setValor(0);
              }
            }}>
              <Text style={styles.txtbtn}>+1</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.linha2} />
          <View style={styles.Vright}>
            <Text style={styles.time}>TIME 2</Text>
            <Text style={styles.Txt}>{valor2}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => {
              setValor2(valor2 + 1);
              if (valor2 >= 9999) {
                setValor2(0);
              }

            }}>
              <Text style={styles.txtbtn}>+1</Text>
            </TouchableOpacity>
          </View>

        </View>
        <TouchableOpacity style={styles.reiniciar} onPress={() => {
          setValor(0);
          setValor2(0);
        }}>
          <Text style={styles.txtbtn}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  reiniciar: {
    color: '#f00',
    width: '30%',
    height: '8%',
    backgroundColor: '#000',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 7,
  },
  Txt: {
    fontSize: 90
  },
  txtbtn: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24
  },
  btn: {
    marginTop: 40,
    backgroundColor: '#000',
    width: 70,
    height: 70,
    justifyContent: 'center',
    borderRadius: 10,
  },
  conteudo: {
    width: '100%',
    height: '50%',
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: 'center',
    marginTop: 50
  },

  linha2: {
    width: '1%',
    height: '90%',
    backgroundColor: '#000',
  },
  texto: {
    width: '100%',
    fontSize: 70,
    textAlign: 'center',
    marginTop: 50,
    color: '#000'
  },
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer: {
    backgroundColor: '#cececece',
    height: '80%',
    width: '92%',
    alignItems: 'center',
    borderRadius: 6
  },
  Vright: {
    width: '49%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Vleft: {
    width: '49%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    fontSize: 30
  },

});
