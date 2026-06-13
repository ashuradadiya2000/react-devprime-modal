# react-devprime-modal

🚀 A lightweight, customizable, and modern React modal component with TypeScript support, animations, and zero unnecessary dependencies.

Built with ❤️ by Devprime.

---

# ✨ Features

- ✅ TypeScript support
- ✅ Smooth animations (fade, slide, zoom)
- ✅ ESC key close
- ✅ Overlay click close
- ✅ Custom width
- ✅ Custom overlay color
- ✅ Lightweight
- ✅ Easy to use
- ✅ React 16.8+

---

# 📦 Installation

```bash
npm install react-devprime-modal
```

or

```bash
yarn add react-devprime-modal
```

---

# 📥 Import

```tsx
import { Modal } from "react-devprime-modal";
import "react-devprime-modal/dist/index.css";
```

---

# 🚀 Basic Usage

```tsx
import React, { useState } from "react";
import { Modal } from "react-devprime-modal";
import "react-devprime-modal/dist/index.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h2>Hello Devprime Modal 🚀</h2>

        <button onClick={() => setOpen(false)}>Close</button>
      </Modal>
    </>
  );
}

export default App;
```

---

# ⚙️ Props

| Prop                | Type      | Default         | Description            |
| ------------------- | --------- | --------------- | ---------------------- | ---- | --------------- |
| open                | boolean   | required        | Show / hide modal      |
| onClose             | function  | required        | Close handler          |
| children            | ReactNode | required        | Modal content          |
| center              | boolean   | true            | Center modal           |
| closeOnOverlayClick | boolean   | true            | Close on overlay click |
| showCloseIcon       | boolean   | true            | Show close button      |
| animation           | fade      | slide           | zoom                   | zoom | Modal animation |
| width               | string    | 500px           | Modal width            |
| overlayColor        | string    | rgba(0,0,0,0.5) | Overlay color          |

---

# 🎬 Animation Example

```tsx
<Modal open={open} onClose={() => setOpen(false)} animation="slide">
  Content
</Modal>
```

---

# 📐 Custom Width Example

```tsx
<Modal open={open} onClose={() => setOpen(false)} width="700px">
  Content
</Modal>
```

---

# 🎨 Custom Overlay Example

```tsx
<Modal
  open={open}
  onClose={() => setOpen(false)}
  overlayColor="rgba(0,0,0,0.8)"
>
  Content
</Modal>
```

---

# ⌨️ Keyboard Support

ESC key closes modal automatically.

---

# 🧠 TypeScript Support

Fully typed.

No extra types needed.

---

# 📁 Package Size

Very small and optimized.

---

# 🌍 Browser Support

All modern browsers supported.

Chrome
Firefox
Edge
Safari

---

# 📌 Requirements

React 16.8+

---

# 🛠 Development

Clone repo:

```bash
git clone https://github.com/yourusername/react-devprime-modal
```

Build:

```bash
npm run build
```

---

# 📄 License

MIT

---

# 👨‍💻 Author

Devprime Ashish

---

# ⭐ Support

If you like this package, please give a ⭐ on GitHub.

---

# 🔥 Version

1.0.0

---

# 🚀 More features coming soon

- Confirm dialog
- Drawer modal
- Stack modal
- Focus trap
- Scroll lock

---
