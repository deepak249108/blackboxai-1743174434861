import { View, Text, FlatList } from 'react-native';
import PropertyCard, { Property } from '../../components/PropertyCard';
import { useColorScheme } from '../../hooks/useColorScheme';
import { Colors } from '../../constants/Colors';

export default function PropertiesScreen() {
  const colorScheme = useColorScheme();

  // TODO: Replace with actual data fetching
  const properties: Property[] = [
    { id: '1', address: '123 Main St', rent: 1200, status: 'occupied' as const },
    { id: '2', address: '456 Oak Ave', rent: 1500, status: 'vacant' as const }
  ];

  return (
    <View style={{ flex: 1, backgroundColor: Colors[colorScheme ?? 'light'].background }}>
      <FlatList
        data={properties}
        renderItem={({ item }) => <PropertyCard property={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}