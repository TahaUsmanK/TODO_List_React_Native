import {Button, FlatList, Text, TextInput, View} from 'react-native';
import FloatingActionButton from '../../component/floating_action_button/floating_action_button';
import HomeStyle from '../../style/home_style/home_style';
import TextStyle from '../../style/text_style/text_style';
import React, {useState} from 'react';
import FlatListtStyle from '../../style/flatList_style/flatList_style';
import TextInputStyle from '../../style/textInputStyle/textInputStyle';

const HomeScreen = () => {
  const [inputData, setInputData] = useState('');
  const [listData, setListData] = useState<string[]>([]);

  const handleDelete = (itemToDelete: string) => {
    setListData((prevData) => prevData.filter((item) => item !== itemToDelete));
  };
  const handleButtonPress = () => {
    setListData([...listData, inputData]);
    setInputData('');
  };

  return (
    <View style={HomeStyle.main}>
      <TextInput style={TextInputStyle.textInput} value={inputData} onChangeText={setInputData} placeholder='Enter Text'></TextInput>
      <FlatList
        data={listData}
        renderItem={({item}) => <View style={TextStyle.flatListText}><Text style={TextStyle.flatListText}>{item}</Text> 
        <Button title="Delete" onPress={() => {handleDelete(item)}}/>
        </View>}
        keyExtractor={(index) => index.toString()}
        style={FlatListtStyle.FlatList}
      />
      <FloatingActionButton
        onPress={() => {
          handleButtonPress();
        }}
      />
     
    </View>
  );
};

export default HomeScreen;
