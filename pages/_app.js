import '../styles/globals.css'
import { MsalProvider } from '@azure/msal-react'
import { PublicClientApplication } from '@azure/msal-browser'
import { msalConfig } from '../config/authConfig'
import { SignInButton } from '../src/component/SigninButton'
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from '@azure/msal-react'
import { PageLayout } from '../src/component/PageLayout'

function MyApp({ Component, pageProps }) {
  const msalInstance = new PublicClientApplication(msalConfig)

  return (
    <MsalProvider instance={msalInstance}>
      <PageLayout>
        <AuthenticatedTemplate>
          <Component {...pageProps} />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <SignInButton />
        </UnauthenticatedTemplate>
      </PageLayout>
    </MsalProvider>
  )
}

export default MyApp
