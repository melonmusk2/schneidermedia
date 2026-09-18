import { createClient } from 'contentful';

const token = import.meta.env.VITE_REACT_APP_CONTENTFUL_ACCESS_TOKEN || import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const spaceId = import.meta.env.VITE_REACT_APP_CONTENTFUL_SPACE_ID || import.meta.env.VITE_CONTENTFUL_SPACE_ID;

export const client = createClient({
  // Fallback-Strings verhindern den harten React-Absturz (TypeError),
  // damit wir in Ruhe in die Konsole schauen können.
    accessToken: token || 'FEHLT_IN_VITE',
  space: spaceId || 'FEHLT_IN_VITE',
});