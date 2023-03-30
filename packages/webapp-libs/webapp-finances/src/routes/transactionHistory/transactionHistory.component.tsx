import { BackButton } from '@sb/webapp-core/components/buttons';
import { FormattedMessage } from 'react-intl';

import { TransactionHistory as TransactionHistoryList } from '../../components/stripe/transactionHistory';
import { Container, Header } from './transactionHistory.styles';

export const TransactionHistory = () => {
  return (
    <Container>
      <BackButton />
      <Header>
        <FormattedMessage defaultMessage="Transaction history" id="Stripe / Transaction History / Header" />
      </Header>

      <TransactionHistoryList />
    </Container>
  );
};