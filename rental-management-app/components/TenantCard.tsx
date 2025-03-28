import { View, Text, StyleSheet } from 'react-native';
import { useColorScheme } from '../hooks/useColorScheme';
import { Colors } from '../constants/Colors';

export type Tenant = {
  id: string;
  name: string;
  property: string;
  rentDue: number;
};

type TenantCardProps = {
  tenant: Tenant;
};

export default function TenantCard({ tenant }: TenantCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <Text style={[styles.name, { color: colors.text }]}>{tenant.name}</Text>
      <View style={styles.details}>
        <Text style={{ color: colors.textSecondary }}>{tenant.property}</Text>
        <Text style={{ color: colors.textSecondary }}>
          ${tenant.rentDue}/month
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
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});