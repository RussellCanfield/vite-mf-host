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
			name: "remote",
			filename: "remoteEntry.js",
			// Modules to expose
			exposes: {
				"./Button": "./src/Button.jsx",
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
