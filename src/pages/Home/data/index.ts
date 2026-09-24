import { BadgeInfo, BadgeType, DEFAULT_COLOR, Projects, ProjectType } from '../types'

export const BADGE_INFO = (): BadgeInfo => ({
  [BadgeType.GITHUB]: {
    src: (color: string) =>
      `https://img.shields.io/badge/GitHub-100000?color=%23${color}&style=for-the-badge&logo=github&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${color}`,
    href: 'https://github.com/Guilospanck',
    color: DEFAULT_COLOR,
    title: 'GitHub'
  },
  [BadgeType.TWITTER]: {
    src: (color: string) =>
      `https://img.shields.io/badge/Twitter-1DA1F2?color=%23${color}&style=for-the-badge&logo=x&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${color}`,
    href: 'https://twitter.com/Guilospanck',
    color: DEFAULT_COLOR,
    title: 'Twitter'
  },
  [BadgeType.LINKEDIN]: {
    src: (color: string) =>
      `https://img.shields.io/badge/LinkedIn-0077B5?color=%23${color}&style=for-the-badge&logo=linkedin&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${color}`,
    href: 'https://www.linkedin.com/in/guilhermerpereira/',
    color: DEFAULT_COLOR,
    title: 'LinkedIn'
  },
  [BadgeType.MEDIUM]: {
    src: (color: string) =>
      `https://img.shields.io/badge/Medium-12100E?color=%23${color}&style=for-the-badge&logo=medium&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${color}`,
    href: 'https://medium.com/@guilospanck',
    color: DEFAULT_COLOR,
    title: 'Medium'
  }
})

export const PROJECTS = (): Projects[] => [
  {
    title: 'FlashCards',
    type: ProjectType.APP,
    content: 'A simple and effective Flash Cards application.',
    url: 'https://flashcards.guilospanck.com/'
  },
  {
    title: 'Chronos',
    type: ProjectType.APP,
    content: 'Your friendly chronogram app.',
    url: 'https://chronos.guilospanck.com/'
  },
  {
    title: 'modelgen',
    type: ProjectType.AI,
    content: 'Generate 3D models by describing them to your AI agent. Exports GLB and USDZ from plain YAML models.',
    url: 'https://github.com/Guilospanck/modelgen'
  },
  {
    title: 'vm-claude',
    type: ProjectType.TOOL,
    content: 'Run Claude Code inside a microVM that only sees the current project.',
    url: 'https://github.com/Guilospanck/vm-claude'
  },
  {
    title: 'AI Usage Bar',
    type: ProjectType.APP,
    content: 'Native macOS menu-bar app showing your Claude and ChatGPT subscription usage side by side.',
    url: 'https://github.com/Guilospanck/ai-usage-bar'
  },
  {
    title: 'MCP Odin',
    type: ProjectType.AI,
    content: 'Hand-crafted Model Context Protocol (2026-07-28) implementation in Odin.',
    url: 'https://github.com/Guilospanck/mcp-odin'
  },
  {
    title: 'Odin Minecraft Clone',
    type: ProjectType.APP,
    content: 'Voxel sandbox written in pure Odin with OpenGL 4.1 and GLFW. No engine.',
    url: 'https://github.com/Guilospanck/claude-minecraft-odin'
  },
  {
    title: 'Quotebook',
    type: ProjectType.WEBSITE,
    content: 'Turn a folder of markdown files into a minimal quotes website on GitHub Pages.',
    url: 'https://guilospanck.github.io/quotebook/'
  },
  {
    title: 'WebRTC Stats Analyzer',
    type: ProjectType.WEBSITE,
    content: 'Parse Chrome WebRTC stats exports and get a call quality diagnosis with charts.',
    url: 'https://guilospanck.github.io/webrtc-stats-analyzer/'
  },
  {
    title: 'Notion to Diagram',
    type: ProjectType.WEBSITE,
    content: 'Transform Notion pages into interactive diagrams.',
    url: 'https://guilospanck.github.io/notion-to-diagram/'
  },
  {
    title: 'Galaxy WebGPU',
    type: ProjectType.WEBSITE,
    content: 'Your own customisable galaxy in the browser, rendered with WebGPU and tweakable in real time.',
    url: 'https://guilospanck.github.io/galaxy-webgpu/'
  },
  {
    title: 'PQC Chat',
    type: ProjectType.APP,
    content: 'TUI websocket chat using Post-Quantum Cryptography. Written in Go.',
    url: 'https://github.com/Guilospanck/pqc'
  },
  {
    title: 'workj',
    type: ProjectType.TOOL,
    content: 'Git worktrees in Zellij. Written in Zig.',
    url: 'https://github.com/Guilospanck/workj'
  },
  {
    title: 'RAGit',
    type: ProjectType.AI,
    content: 'Talk to your GitHub and GitLab repositories using RAG.',
    url: 'https://github.com/Guilospanck/ragit'
  },
  {
    title: 'Area 25.5',
    type: ProjectType.APP,
    content: 'Roguelike survival game built with Rust and the Bevy engine for the PirateJAM 15.',
    url: 'https://guilospanck.itch.io/area25-5'
  },
  {
    title: 'NES Emulator Rust',
    type: ProjectType.APP,
    content: 'A NES emulator written in Rust.',
    url: 'https://github.com/Guilospanck/nes-emulator-rust'
  },
  {
    title: 'Nostr',
    type: ProjectType.BITCOIN,
    content: 'Nostr protocol written in Rust.',
    url: 'https://github.com/Guilospanck/nostr'
  },
  {
    title: 'murray-rs',
    type: ProjectType.BITCOIN,
    content: 'Rust library to quickly incorporate bitcoin data and interactions within your applications.',
    url: 'https://github.com/Guilospanck/murray-rs'
  },
  {
    title: 'cashu-rs',
    type: ProjectType.BITCOIN,
    content: 'Cashu ecash protocol (NUTs) implementation in Rust.',
    url: 'https://github.com/Guilospanck/cashu-rs'
  },
  {
    title: 'Rust Bitcoin',
    type: ProjectType.BITCOIN,
    content: 'Bitcoin protocol implementation in Rust.',
    url: 'https://github.com/Guilospanck/rust-bitcoin'
  },
  {
    title: 'Schnorr',
    type: ProjectType.BITCOIN,
    content: 'Example of how to sign and verify Schnorr signatures as of BIP340. Written in Rust.',
    url: 'https://github.com/Guilospanck/schnorr'
  },
  {
    title: 'Stripe Go Integration',
    type: ProjectType.APP,
    content: 'Straightforward Stripe integration using Go. Companion code for the Medium article.',
    url: 'https://github.com/Guilospanck/stripe-go-integration'
  },
  {
    title: 'Medium Observability Stack',
    type: ProjectType.APP,
    content: 'Telemetry with OpenTelemetry, Prometheus and Jaeger. Companion code for the Medium article.',
    url: 'https://github.com/Guilospanck/medium-observability-stack'
  },
  {
    title: 'ScyllaDB and Go',
    type: ProjectType.APP,
    content: 'Simple application showing how to work with ScyllaDB and Golang using gocqlx.',
    url: 'https://github.com/Guilospanck/scylladb-and-go'
  },
  {
    title: 'igocqlx',
    type: ProjectType.GOLANG_PKG,
    content: 'Gocqlx with interfaces.',
    url: 'https://github.com/Guilospanck/igocqlx'
  },
  {
    title: 'gocqlxmock',
    type: ProjectType.GOLANG_PKG,
    content: 'Simple mock for gocqlx.',
    url: 'https://github.com/Guilospanck/gocqlxmock'
  },
  {
    title: "Conway's Game of Life",
    type: ProjectType.WEBSITE,
    content: 'John Conway Game of Life React TypeScript implementation.',
    url: 'https://guilospanck.github.io/Conway-Game-Of-Life-React/'
  },
  {
    title: 'Discord Clone',
    type: ProjectType.WEBSITE,
    content: 'Frontend Discord Clone made with TypeScript and React.',
    url: 'https://guilospanck.github.io/discord-clone/'
  }
]
