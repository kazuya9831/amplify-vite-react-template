import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Amplify } from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';
import "@aws-amplify/ui-react-storage/styles.css";
import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import { signInWithRedirect } from "aws-amplify/auth"

Amplify.configure(outputs);

const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

signInWithRedirect({
  provider: { custom: "MicrosoftEntraIDSAML" }
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <StorageBrowser />
  </React.StrictMode>
);
