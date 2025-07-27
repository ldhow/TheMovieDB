import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './index.style';

type Props = {
  message: string;
};

const ErrorBadge: React.FC<Props> = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};


export default ErrorBadge;
