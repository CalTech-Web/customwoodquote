import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

interface User {
  businessName: string | null;
  logo: string | null;
  name: string | null;
  email: string;
  phone: string | null;
  address: string | null;
}

interface LineItem {
  id: string;
  category: string;
  name: string;
  description: string | null;
  quantity: number;
  unit: string;
  unitCost: number;
  totalCost: number;
  sortOrder: number;
}

interface Project {
  id: string;
  title: string;
  description: string | null;
  style: string | null;
  lengthIn: number | null;
  widthIn: number | null;
  heightIn: number | null;
  photoUrls: string | null;
  subtotal: number | null;
  tax: number | null;
  total: number | null;
  paymentTerms: string | null;
  estimatedTimeline: string | null;
  notes: string | null;
  lineItems: LineItem[];
  user: User;
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottom: 2,
    borderBottomColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 100,
    height: 50,
    marginBottom: 10,
  },
  businessName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 10,
    color: '#333333',
    marginBottom: 2,
  },
  quoteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  projectTitle: {
    fontSize: 10,
    color: '#333333',
    textAlign: 'right',
    marginTop: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  projectPhoto: {
    width: 300,
    height: 225,
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  detailLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  table: {
    width: '100%',
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    paddingBottom: 5,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingVertical: 5,
  },
  colItem: {
    width: '40%',
  },
  colQty: {
    width: '10%',
    textAlign: 'right',
  },
  colUnit: {
    width: '15%',
    textAlign: 'right',
  },
  colRate: {
    width: '17.5%',
    textAlign: 'right',
  },
  colTotal: {
    width: '17.5%',
    textAlign: 'right',
  },
  itemName: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  itemDescription: {
    fontSize: 9,
    color: '#555555',
  },
  categorySummaryRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingVertical: 5,
  },
  categoryName: {
    width: '60%',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  categoryTotal: {
    width: '40%',
    textAlign: 'right',
  },
  totalsSection: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: '#000000',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  totalLabel: {
    fontWeight: 'bold',
  },
  grandTotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 14,
    fontWeight: 'bold',
  },
  notes: {
    fontSize: 10,
    color: '#333333',
    lineHeight: 1.4,
  },
});

interface QuotePDFProps {
  project: Project;
  showDetailedBreakdown?: boolean;
  resolvedPhotoUrl?: string | null;
}

export default function QuotePDF({
  project,
  showDetailedBreakdown = true,
  resolvedPhotoUrl,
}: QuotePDFProps) {
  const firstPhoto = resolvedPhotoUrl || null;

  // Group line items by category for summary view
  const categoryTotals = project.lineItems.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = 0;
      }
      acc[item.category] += item.totalCost;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            {project.user.logo && (
              <Image src={project.user.logo} style={styles.logo} />
            )}
            <Text style={styles.businessName}>
              {project.user.businessName || project.user.name}
            </Text>
            {project.user.address && (
              <Text style={styles.contactInfo}>{project.user.address}</Text>
            )}
            {project.user.phone && (
              <Text style={styles.contactInfo}>{project.user.phone}</Text>
            )}
            <Text style={styles.contactInfo}>{project.user.email}</Text>
          </View>
          <View>
            <Text style={styles.quoteTitle}>Quote</Text>
            <Text style={styles.projectTitle}>Project: {project.title}</Text>
          </View>
        </View>

        {/* Project Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Project Details</Text>

          {firstPhoto && (
            <Image src={firstPhoto} style={styles.projectPhoto} />
          )}

          {project.description && (
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Description:</Text>
              <Text>{project.description}</Text>
            </View>
          )}

          {project.style && (
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Style:</Text>
              <Text>{project.style}</Text>
            </View>
          )}

          {project.lengthIn && project.widthIn && project.heightIn && (
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Dimensions:</Text>
              <Text>
                {project.lengthIn}&quot; L × {project.widthIn}&quot; W ×{' '}
                {project.heightIn}&quot; H
              </Text>
            </View>
          )}
        </View>

        {/* Cost Breakdown */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cost Breakdown</Text>

          {showDetailedBreakdown ? (
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={styles.colItem}>Item</Text>
                <Text style={styles.colQty}>Qty</Text>
                <Text style={styles.colUnit}>Unit</Text>
                <Text style={styles.colRate}>Rate</Text>
                <Text style={styles.colTotal}>Total</Text>
              </View>
              {project.lineItems.map((item) => (
                <View key={item.id} style={styles.tableRow}>
                  <View style={styles.colItem}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    {item.description && (
                      <Text style={styles.itemDescription}>
                        {item.description}
                      </Text>
                    )}
                  </View>
                  <Text style={styles.colQty}>{item.quantity}</Text>
                  <Text style={styles.colUnit}>{item.unit}</Text>
                  <Text style={styles.colRate}>${item.unitCost.toFixed(2)}</Text>
                  <Text style={styles.colTotal}>
                    ${item.totalCost.toFixed(2)}
                  </Text>
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={styles.categoryName}>Category</Text>
                <Text style={styles.categoryTotal}>Subtotal</Text>
              </View>
              {Object.entries(categoryTotals).map(([category, total]) => (
                <View key={category} style={styles.categorySummaryRow}>
                  <Text style={styles.categoryName}>{category}</Text>
                  <Text style={styles.categoryTotal}>${total.toFixed(2)}</Text>
                </View>
              ))}
            </View>
          )}

          {/* Totals */}
          <View style={styles.totalsSection}>
            {project.subtotal !== null && (
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Subtotal:</Text>
                <Text>${project.subtotal.toFixed(2)}</Text>
              </View>
            )}
            {project.tax !== null && project.tax > 0 && (
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Tax:</Text>
                <Text>${project.tax.toFixed(2)}</Text>
              </View>
            )}
            {project.total !== null && (
              <View style={styles.grandTotalRow}>
                <Text>Total:</Text>
                <Text>${project.total.toFixed(2)}</Text>
              </View>
            )}
          </View>
        </View>

        {/* Payment Terms & Timeline */}
        {(project.paymentTerms || project.estimatedTimeline) && (
          <View style={styles.section}>
            {project.paymentTerms && (
              <View>
                <Text style={styles.sectionTitle}>Payment Terms</Text>
                <Text style={styles.notes}>{project.paymentTerms}</Text>
              </View>
            )}
            {project.estimatedTimeline && (
              <View>
                <Text style={styles.sectionTitle}>Estimated Timeline</Text>
                <Text style={styles.notes}>{project.estimatedTimeline}</Text>
              </View>
            )}
          </View>
        )}

        {/* Notes */}
        {project.notes && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Notes</Text>
            <Text style={styles.notes}>{project.notes}</Text>
          </View>
        )}
      </Page>
    </Document>
  );
}
