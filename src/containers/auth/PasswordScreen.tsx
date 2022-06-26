import { Component, ReactElement } from 'react';
import { inject, observer } from 'mobx-react';
import { DefaultProps } from 'src/@types/ferdium-components.types';
import Password from '../../components/auth/Password';

class PasswordScreen extends Component<DefaultProps> {
  render(): ReactElement {
    const { actions, stores } = this.props;

    return (
      <Password
        onSubmit={actions.user.retrievePassword}
        isSubmitting={stores.user.passwordRequest.isExecuting}
        signupRoute={stores.user.signupRoute}
        loginRoute={stores.user.loginRoute}
        status={stores.user.actionStatus}
      />
    );
  }
}

export default inject('stores', 'actions')(observer(PasswordScreen));
