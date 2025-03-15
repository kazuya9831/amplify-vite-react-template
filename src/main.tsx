import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Amplify } from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react'; // Authenticatorをインポート
import AuthWithSAML from './components/AuthWithSAML';
import SignOut from './components/SignOut';
import outputs from "../amplify_outputs.json";
import "@aws-amplify/ui-react-storage/styles.css";
import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';

Amplify.configure(outputs);

export const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <Authenticator.Provider>
        <AuthWithSAML>
          <StorageBrowser />
          <SignOut />
        </AuthWithSAML>
      </Authenticator.Provider>
  </React.StrictMode>
);
