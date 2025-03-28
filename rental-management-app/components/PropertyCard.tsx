import { View, Text, StyleSheet } from 'react-native';
import { useColorScheme } from '../hooks/useColorScheme';
import { Colors } from '../constants/Colors';

export type Property = { // Exporting Property type
  id: string;
  address: string;
  rent: number;
  status: 'occupied' | 'vacant' | 'maintenance';
};

type PropertyCardProps = {
  property: Property;
};

export default function PropertyCard({ property }: PropertyCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const statusColor = {
    occupied: colors.success,
    vacant: colors.warning,
    maintenance: colors.error
  };

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <Text style={[styles.address, { color: colors.text }]}>{property.address}</Text>
      <View style={styles.details}>
        <Text style={{ color: colors.textSecondary }}>${property.rent}/month</Text>
        <Text style={{ color: statusColor[property.status] }}>
          {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  address: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});