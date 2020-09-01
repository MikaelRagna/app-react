import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from  'react-native';
import styles from './styles';
import PagerHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {Feather } from '@expo/vector-icons'
import api from '../../services/api';

function TeacherList(){
    const [isFiltersVisile, setIsFiltersVisible] = useState(false);
    const [techears, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    function handleToggleFiltersVisible(){
        setIsFiltersVisible(!isFiltersVisile);
    }
    async function handlerFiltersSubmit(){
        const response = await api.get('classes',{
            params:{
            subject,
            week_day,
            time
            }
        });

        setTeachers(response.data);
    }
    return <View style={styles.container}>
        <PagerHeader title="Proffys disponíveis" 
        headerRight={(
            <BorderlessButton onPress={handleToggleFiltersVisible}>
                <Feather name="filter" size={20} color="#FFF" />
            </BorderlessButton>
        )}>
        { isFiltersVisile &&(
            <View style={styles.searchForm}>
                <Text style={styles.label}>Matéria</Text>
                <TextInput 
                style={styles.input}
                value={subject}
                onChangeText={text => setSubject(text)}
                placeholder="Qual a matéria?"
                placeholderTextColor="#c1bccc"
                />

                <View style={styles.inputGroup}>
                    <View style={styles.inputBlock}>
                    <Text style={styles.label}>Dia da semana</Text>
                <TextInput 
                style={styles.input}
                value={week_day}
                onChangeText={text => setWeekDay(text)}
                placeholder="Qual o dia?"
                placeholderTextColor="#c1bccc"
                />
                    </View>

                    <View style={styles.inputBlock}>
                    <Text style={styles.label}>Horário</Text>
                <TextInput 
                style={styles.input}
                value={time}
                onChangeText={text => setTime(text)}
                placeholder="Qual  horário?"
                placeholderTextColor="#c1bccc"
                />
                    </View>
                </View>
                <RectButton onPress={handlerFiltersSubmit} style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Filtrar</Text>
                </RectButton>
            </View>
        )}
        </PagerHeader>
        <ScrollView
         style={styles.teacherList}
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
}

export default TeacherList;