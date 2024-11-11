import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../utils/styles';

function LoadingOverlay() {
  return (
    <ActivityIndicator
      size='large'
      color='white'
      style={styles.container}
    />
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
