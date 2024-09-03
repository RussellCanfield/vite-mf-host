import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { withZephyr } from "vite-plugin-zephyr";

const mfConfig = {
	name: "host",
	remotes: {
		remote: "http://localhost:4173/assets/remoteEntry.js",
	},
	shared: ["react", "react-dom"],
};

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		federation(mfConfig),
		withZephyr({
			mfConfig,
		}),
	],
	build: {
		modulePreload: false,
		target: "esnext",
		minify: false,
		cssCodeSplit: false,
	},
});
