import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Button,
} from '@react-email/components';

interface QuoteAcceptedEmailProps {
  projectTitle: string;
  customerName: string;
  projectDescription: string | null;
  total: number | null;
}

export default function QuoteAcceptedEmail({
  projectTitle,
  customerName,
  projectDescription,
  total,
}: QuoteAcceptedEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Quote Accepted: {projectTitle}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Quote Accepted! 🎉</Heading>

          <Text style={text}>Great news!</Text>

          <Text style={text}>
            <strong>{customerName}</strong> has accepted your quote for{' '}
            <strong>{projectTitle}</strong>.
          </Text>

          {projectDescription && (
            <Section style={detailsSection}>
              <Text style={detailsLabel}>Project Details:</Text>
              <Text style={detailsText}>{projectDescription}</Text>
            </Section>
          )}

          {total !== null && (
            <Section style={totalSection}>
              <Text style={totalLabel}>Quote Total:</Text>
              <Text style={totalAmount}>${total.toFixed(2)}</Text>
            </Section>
          )}

          <Section style={nextStepsSection}>
            <Text style={h2}>Next Steps:</Text>
            <Text style={text}>
              • Review the project details and timeline
              <br />
              • Contact the customer to confirm start date
              <br />
              • Send a payment invoice if required
              <br />• Begin work once payment is received
            </Text>
          </Section>

          <Text style={text}>
            Log in to your dashboard to view full project details and manage
            this order.
          </Text>

          <Button
            href={`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/dashboard`}
            style={button}
          >
            View Dashboard
          </Button>

          <Text style={footer}>
            This is an automated notification from your quote management system.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0 40px',
};

const h2 = {
  color: '#333',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '20px 0 10px',
};

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
  padding: '0 40px',
};

const detailsSection = {
  padding: '0 40px',
  marginTop: '20px',
};

const detailsLabel = {
  color: '#666',
  fontSize: '14px',
  fontWeight: 'bold',
  marginBottom: '8px',
};

const detailsText = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0',
};

const totalSection = {
  backgroundColor: '#f0f9ff',
  padding: '20px 40px',
  marginTop: '20px',
  textAlign: 'center' as const,
};

const totalLabel = {
  color: '#666',
  fontSize: '14px',
  marginBottom: '8px',
};

const totalAmount = {
  color: '#059669',
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '0',
};

const nextStepsSection = {
  padding: '0 40px',
  marginTop: '30px',
};

const button = {
  backgroundColor: '#2563eb',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '200px',
  padding: '14px 20px',
  margin: '20px auto',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  padding: '0 40px',
  marginTop: '40px',
};
