import React from 'react';
import { View, ScrollView } from  'react-native';
import styles from './styles';
import PagerHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';


function Favorites(){
    return (
        <View style={styles.container}>
        <PagerHeader title="Meus proffys favoritos"/>
        <ScrollView
         style={styles.favorite}
         contentContainerStyle={{
             paddingHorizontal: 16,
             paddingBottom: 16,
         }}
         >
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
        </ScrollView>
    </View>
    )
}

export default Favorites;