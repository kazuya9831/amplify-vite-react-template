import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      saml: {
        name: 'MicrosoftEntraIDSAML',
        metadata: {
          metadataContent: 'https://login.microsoftonline.com/f15ccb0f-0c58-4690-b731-c3f4cb40e997/federationmetadata/2007-06/federationmetadata.xml?appid=e5204c4d-9dff-4057-947d-b5faeb459ebb', // or content of the metadata file
          metadataType: 'URL', // or 'FILE'
        },
        attributeMapping: {
          email: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",
        },
      },
      logoutUrls: ['http://localhost:5173/'],
      callbackUrls: ['http://localhost:5173/'],
    },
  },
});
