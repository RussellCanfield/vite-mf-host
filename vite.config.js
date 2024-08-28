import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { withZephyr } from "vite-plugin-zephyr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		withZephyr(),
		federation({
			name: "host-app",
			remotes: {
				remote_app: "http://localhost:4173/assets/remoteEntry.js",
			},
			shared: ["react", "react-dom"],
		}),
	],
	build: {
		modulePreload: false,
		target: "esnext",
		minify: false,
		cssCodeSplit: false,
	},
});
