# Codespace Editor Web App

A lightweight browser-based code editor designed to run on **GitHub Pages** and develop seamlessly inside **GitHub Codespaces**.

This project provides a simple VS Code-style editing experience in the browser using modern web technologies, with no backend required.

## Features

* ✅ GitHub Pages compatible static web app
* ✅ GitHub Codespaces development support
* ✅ Browser-based code editor
* ✅ Syntax highlighting
* ✅ File tree interface
* ✅ Local file editing
* ✅ Download/export files
* ✅ Responsive UI
* ✅ Easy customization

## Tech Stack

* HTML5
* CSS3
* JavaScript
* Monaco Editor (VS Code editor engine)
* GitHub Pages
* GitHub Codespaces

## Project Structure

```text
codespace-editor/
│
├── .devcontainer/
│   └── devcontainer.json
│
├── index.html
├── style.css
├── app.js
├── README.md
│
└── assets/
    └── icons/
```

## Running in GitHub Codespaces

1. Open the repository on GitHub.
2. Select:

```
Code → Codespaces → Create codespace on main
```

3. Wait for the environment to load.
4. Start a local development server:

```bash
python3 -m http.server 8000
```

5. Open the forwarded port.

## GitHub Pages Deployment

1. Push the repository to GitHub.

2. Open:

```
Repository Settings
→ Pages
→ Build and deployment
```

3. Select:

```
Deploy from branch
```

4. Choose:

```
main branch
/
(root)
```

5. Save.

Your app will be available at:

```text
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/
```

## Example `.devcontainer/devcontainer.json`

```json
{
  "name": "Codespace Editor",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:20",

  "features": {
    "ghcr.io/devcontainers/features/git:1": {}
  },

  "forwardPorts": [
    8000
  ],

  "customizations": {
    "vscode": {
      "extensions": [
        "ritwickdey.liveserver",
        "ms-vscode.vscode-typescript-next"
      ]
    }
  }
}
```

## Example Usage

Open the editor:

```text
index.html
```

Edit code in the browser:

```html
<h1>Hello Codespace Editor</h1>
```

Save and preview instantly.

## Local Development

Clone:

```bash
git clone https://github.com/YOUR_USERNAME/codespace-editor.git

cd codespace-editor
```

Run:

```bash
python3 -m http.server 8000
```

Visit:

```text
http://localhost:8000
```

## Customization

You can extend the editor with:

* Multiple language support
* Git integration
* AI coding assistance
* Browser filesystem APIs
* Project templates
* Theme switching
* Plugin support

## License

MIT License

Use, modify, and distribute freely.
