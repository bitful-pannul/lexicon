import { loadEnv, defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { urbitPlugin } from "@urbit/vite-plugin-urbit";

// https://vitejs.dev/config/
export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()));
  const SHIP_URL = "http://127.0.0.1:8080";
  console.log(SHIP_URL);

  return defineConfig({
    server: {
      port: 3000,
    },
    plugins: [
      urbitPlugin({ base: "lexicon", target: SHIP_URL, secure: true }),
      reactRefresh(),
    ],
  });
};
