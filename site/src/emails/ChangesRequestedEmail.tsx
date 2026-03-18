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

interface ChangesRequestedEmailProps {
  projectTitle: string;
  customerName: string;
  message: string;
  quoteLink: string;
}

export default function ChangesRequestedEmail({
  projectTitle,
  customerName,
  message,
  quoteLink,
}: ChangesRequestedEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Changes Requested: {projectTitle}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Changes Requested</Heading>

          <Text style={text}>
            <strong>{customerName}</strong> has requested changes to the quote
            for <strong>{projectTitle}</strong>.
          </Text>

          <Section style={messageSection}>
            <Text style={messageLabel}>Customer Message:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Text style={text}>
            Please review the requested changes and update the quote
            accordingly. You can view the original quote and make modifications
            in your dashboard.
          </Text>

          <Button href={quoteLink} style={button}>
            View Quote
          </Button>

          <Section style={tipsSection}>
            <Text style={h2}>Suggested Next Steps:</Text>
            <Text style={text}>
              • Review the customer&apos;s feedback carefully
              <br />
              • Update the quote with requested changes
              <br />
              • Contact the customer if clarification is needed
              <br />• Send the updated quote for review
            </Text>
          </Section>

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

const messageSection = {
  backgroundColor: '#fef3c7',
  padding: '20px 40px',
  marginTop: '20px',
  borderLeft: '4px solid #f59e0b',
};

const messageLabel = {
  color: '#92400e',
  fontSize: '14px',
  fontWeight: 'bold',
  marginBottom: '8px',
};

const messageText = {
  color: '#78350f',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
};

const tipsSection = {
  padding: '0 40px',
  marginTop: '30px',
};

const button = {
  backgroundColor: '#f59e0b',
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
