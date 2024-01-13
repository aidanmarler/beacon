import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.beacon.app',
  appName: 'beacon',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
