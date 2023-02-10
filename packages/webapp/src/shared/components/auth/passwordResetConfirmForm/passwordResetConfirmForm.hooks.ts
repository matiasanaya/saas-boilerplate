import { useMutation } from '@apollo/client';
import { useIntl } from 'react-intl';

import { useNavigate } from 'react-router';
import { useGenerateLocalePath } from '../../../hooks/localePaths';
import { RoutesConfig } from '../../../../app/config/routes';
import { useApiForm } from '../../../hooks/useApiForm';
import { useSnackbar } from '../../../../modules/snackbar';
import { authRequestPasswordResetConfirmMutation } from './passwordResetConfirmForm.graphql';
import { ResetPasswordFormFields } from './passwordResetConfirmForm.types';

export const usePasswordResetConfirmForm = (user: string, token: string) => {
  const snackbar = useSnackbar();
  const navigate = useNavigate();
  const generateLocalePath = useGenerateLocalePath();
  const intl = useIntl();

  const [commitPasswordResetConfirm, { loading }] = useMutation(authRequestPasswordResetConfirmMutation, {
    onCompleted: () => {
      navigate(generateLocalePath(RoutesConfig.login));
      snackbar.showMessage(
        intl.formatMessage({
          defaultMessage: '🎉 Password reset successfully!',
          id: 'Auth / Reset password confirm / Success message',
        })
      );
    },
    onError: (error) => {
      setApolloGraphQLResponseErrors(error.graphQLErrors);
    },
  });

  const form = useApiForm<ResetPasswordFormFields>({
    errorMessages: {
      nonFieldErrors: {
        invalid_token: intl.formatMessage({
          defaultMessage: 'Malformed password reset token',
          id: 'Auth / Reset password confirm / invalid token',
        }),
      },
      newPassword: {
        password_too_common: intl.formatMessage({
          defaultMessage: 'The password is too common.',
          id: 'Auth / Reset password confirm / password too common',
        }),
        password_entirely_numeric: intl.formatMessage({
          defaultMessage: "The password can't be entirely numeric.",
          id: 'Auth / Reset password confirm / password entirely numeric',
        }),
      },
    },
  });
  const { handleSubmit, setApolloGraphQLResponseErrors } = form;
  const handlePasswordResetConfirm = handleSubmit((data: ResetPasswordFormFields) => {
    commitPasswordResetConfirm({
      variables: {
        input: {
          newPassword: data.newPassword,
          user,
          token,
        },
      },
    });
  });

  return { ...form, loading, handlePasswordResetConfirm };
};