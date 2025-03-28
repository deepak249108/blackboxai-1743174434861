import { View, Text, StyleSheet } from 'react-native';
import { useColorScheme } from '../hooks/useColorScheme';
import { Colors } from '../constants/Colors';

export type Payment = {
  id: string;
  tenant: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending' | 'overdue';
};

type PaymentItemProps = {
  payment: Payment;
};

export default function PaymentItem({ payment }: PaymentItemProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const statusColor = {
    paid: colors.success,
    pending: colors.warning,
    overdue: colors.error
  };

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <View style={styles.header}>
        <Text style={[styles.tenant, { color: colors.text }]}>{payment.tenant}</Text>
        <Text style={{ color: statusColor[payment.status] }}>
          {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
        </Text>
      </View>
      <View style={styles.details}>
        <Text style={{ color: colors.textSecondary }}>${payment.amount}</Text>
        <Text style={{ color: colors.textSecondary }}>{payment.date}</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  tenant: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});