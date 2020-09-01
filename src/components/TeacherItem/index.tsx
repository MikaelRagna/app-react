import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem(){
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar}
                source={{uri: 'https://avatars1.githubusercontent.com/u/67614074?s=460&u=76da27d70e601a8addce1d2fe03b988bb564c074&v=4'}} />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Mikael Previtera</Text>
                    <Text style={styles.subject}> Quimica </Text>
                </View>
            </View>

            <Text style={styles.bio}>
            Desenvolver Web e Mobile
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {' '}
                </Text>
                <Text style={styles.priceValue}>R$ 200,00</Text>
                <View style={styles.buttonContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/*<Image source={heartOutLineIcon} />*/}
                        <Image source={unfavoriteIcon} />
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;