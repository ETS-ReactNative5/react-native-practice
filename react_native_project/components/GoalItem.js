import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <Pressable android_ripple={{color: '#dddddd'}} 
      onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem} key={props.id}>
        <Text style={{color: 'white'}}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#5e0acc',
    color: 'white'
  }
});