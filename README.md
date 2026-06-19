<div align="center">
  <img src="https://img.shields.io/badge/Model_Context_Protocol-050505?style=for-the-badge&logo=anthropic&logoColor=white" />
  <img src="https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  
  <br />
  <br />

  <h1>🚀 MCP-Dock</h1>
  <p><b>Advanced Web Testbench & Agentic Playground for the Model Context Protocol (MCP)</b></p>
  
  <p>
    <i>Bilingual Documentation (English & Español)</i>
  </p>
</div>

---

## 🌍 Overview / Descripción General

**(EN)** **MCP-Dock** is an open-source, enterprise-grade developer tool (DevTool) designed to inspect, debug, and play with Model Context Protocol (MCP) servers visually. Built on the bleeding edge using Next.js 15, React 19, and Tailwind v4, it bridges local `stdio` MCP processes with a stunning glassmorphism web interface via an Express WebSocket/HTTP proxy.

**(ES)** **MCP-Dock** es una herramienta para desarrolladores (DevTool) open-source de nivel empresarial diseñada para inspeccionar, depurar e interactuar visualmente con servidores del Model Context Protocol (MCP). Construido a la vanguardia con Next.js 15, React 19 y Tailwind v4, conecta procesos locales `stdio` de MCP con una interfaz web impresionante estilo *glassmorphism* mediante un proxy Express HTTP/WebSocket.

---

## ✨ Features / Características

- 🔍 **Real-time Inspector:** Browse connected MCP servers, inspect tool JSON schemas, and discover resources seamlessly.
- 💬 **Agentic Playground:** An interactive LLM chat simulation that natively hooks into your tools, showing the exact execution trace of function calls.
- 🌉 **Stdio-to-Web Proxy:** Native backend bridge built in Node.js/TypeScript that exposes local secure MCP servers to a browser environment.
- 🎨 **Premium UI/UX:** Material You-inspired design language with deep dark mode, fluid transitions, and frosted glass panels (Glassmorphism).

---

## 🛠 Tech Stack / Tecnologías

| Component | Technology | Description |
|-----------|------------|-------------|
| **Frontend** | Next.js 15, React 19 | High-performance Server Components & App Router |
| **Styling** | Tailwind CSS v4 | New generation CSS utility engine with native variables |
| **Icons & Anim** | Lucide React, Framer Motion | Fluid micro-animations & premium vector icons |
| **Backend** | Express, Node.js, TS | Stdio process bridging to HTTP/SSE for the browser |
| **Protocol** | `@modelcontextprotocol/sdk` | Official Anthropic SDK integration |

---

## 🏗 System Architecture / Arquitectura del Sistema

\`\`\`mermaid
graph TD
    A[Browser / Next.js Client] -->|HTTP / SSE| B(Node.js Express Proxy)
    B <-->|stdio| C{Local MCP Server}
    A <-->|State Management| D[Zustand Store]
    C -->|JSON Schema| B
\`\`\`

---

## 🚀 Quick Start / Instalación

```bash
# 1. Clone the repository
git clone https://github.com/Juan23456788977/mcp-dock.git

# 2. Install dependencies
cd mcp-dock
npm install

# 3. Start the MCP Proxy Server (Backend)
npx ts-node server/proxy.ts

# 4. Start the Next.js Frontend
npm run dev
```

---

<div align="center">
  <p><i>Developed with passion for bleeding-edge architecture by <a href="https://github.com/Juan23456788977">Juan Alberto Cortez Urrea</a></i></p>
</div>
