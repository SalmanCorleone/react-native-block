# react-native-block
A simple and customizable wrapper component for React Native View.
## Usage
 Instead of writing this : 
```js
<View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
  //Other components
</View>
```
You can just do this :

```js
<Block flex={2} center middle mt={20}>
  // Your components
</Block>
```
For TouchableOpacity :
```js
<TouchableBlock onPress={handler} center middle>
  // Your components
</TouchableBlock>
```
