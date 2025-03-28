import { View, Text, FlatList } from 'react-native';
import PaymentItem, { Payment } from '../../components/PaymentItem';
import { useColorScheme } from '../../hooks/useColorScheme';
import { Colors } from '../../constants/Colors';

export default function PaymentsScreen() {
  const colorScheme = useColorScheme();

  // TODO: Replace with actual data fetching
  const payments: Payment[] = [
    { id: '1', tenant: 'John Doe', amount: 1200, date: '2023-05-15', status: 'paid' },
    { id: '2', tenant: 'Jane Smith', amount: 1500, date: '2023-05-10', status: 'paid' },
    { id: '3', tenant: 'John Doe', amount: 1200, date: '2023-06-15', status: 'pending' }
  ];

  return (
    <View style={{ flex: 1, backgroundColor: Colors[colorScheme ?? 'light'].background }}>
      <FlatList
        data={payments}
        renderItem={({ item }) => <PaymentItem payment={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}