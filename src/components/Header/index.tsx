import { View, Image, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '~/theme/globalStyles'; // logo style bạn đang dùng
import { styles } from './index.style';

const Header = () => {
  return (
    <SafeAreaView edges={['top']}>
      <StatusBar barStyle="dark-content"/>
      <View style={styles.inner}>
        <Image
          source={require('~/assets/images/logo.png')}
          style={globalStyles.logo}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};


export default Header;
