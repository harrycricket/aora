import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{backgroundColor: '#ecfeff'}}>
      <Text className="text-xl">Harry is coming!</Text>
      <Link
        href={'/profile'}
        className='text-red-500'
      >
        Go to profile
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
