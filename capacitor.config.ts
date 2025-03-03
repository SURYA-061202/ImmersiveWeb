import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.netlify.indian-infra",
  appName: "Indian Infra",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
  plugins: {
    "cordova-plugin-ionic-webview": {
      ANDROID_BACKBUTTON_EXIT_APP: "false",
    },
  },
};

export default config;
