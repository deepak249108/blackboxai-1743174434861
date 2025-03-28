import { View, Text, FlatList } from 'react-native';
import TenantCard from '../../components/TenantCard';
import { useColorScheme } from '../../hooks/useColorScheme';
import { Colors } from '../../constants/Colors';

export default function TenantsScreen() {
  const colorScheme = useColorScheme();

  // TODO: Replace with actual data fetching
  const tenants = [
    { id: '1', name: 'John Doe', property: '123 Main St', rentDue: 1200 },
    { id: '2', name: 'Jane Smith', property: '456 Oak Ave', rentDue: 1500 }
  ];

  return (
    <View style={{ flex: 1, backgroundColor: Colors[colorScheme ?? 'light'].background }}>
      <FlatList
        data={tenants}
        renderItem={({ item }) => <TenantCard tenant={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}