# 🧮 Non-Restoring Division Visualizer

An interactive visual tool built with **React**, **Framer Motion**, and **Tailwind CSS** that demonstrates the step-by-step execution of the **Non-Restoring Division Algorithm** in binary.

![screenshot](https://via.placeholder.com/1000x300?text=Insert+your+project+screenshot+here)

---

## ✨ Features

* 🔢 **Binary Division**: Input any two integers and see how non-restoring division works internally.
* 📊 **Step-by-Step Table**: View each stage of the algorithm in a clean tabular format.
* 🎞 **Animated Registers**: Watch how A, Q, and M registers evolve in real-time.
* 🧠 **Final Output**: Displays the final quotient and remainder in decimal form.

---

## 🚀 Live Demo

> [🔗 Click here to try the app](#)
> *(Replace with your deployment URL, e.g., Vercel, Netlify)*

---

## 📷 Preview

![preview](https://via.placeholder.com/1000x600?text=Live+Preview+GIF+or+Screenshot)

---

## 📦 Tech Stack

* ⚛️ **React** – Core frontend framework
* 🎨 **Tailwind CSS** – Utility-first styling
* 🎞 **Framer Motion** – Smooth animations and transitions
* 🧮 **Custom Algorithm** – Implementation of the Non-Restoring Division logic

---

## 🛠️ How It Works

The non-restoring division algorithm is used for binary division of signed numbers. It uses subtraction and conditional addition depending on the sign of the accumulator.

### Registers Involved:

* **A** – Accumulator
* **Q** – Quotient Register
* **M** – Divisor Register

### Operations Tracked:

* Shift left operations
* Conditional add/subtract
* Setting quotient bits
* Restoration steps if needed

Each step is animated to help students and engineers understand what’s going on under the hood.

---

## 📂 File Structure

```
├── app/
│   ├── page.tsx         # Main component
│   └── utils/
│       └── nonRestoringAlgo.js  # Core algorithm logic
├── public/
│   └── assets/          # Screenshots, GIFs, etc.
├── styles/
│   └── globals.css
```

---

## 🧪 Usage

### 🖥 Local Setup

```bash
# Clone the repo
git clone https://github.com/your-username/non-restoring-division.git

# Navigate into the project folder
cd non-restoring-division

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then go to `http://localhost:3000`.

---

## 🧠 Educational Value

This tool is perfect for:

* 📘 CS students learning binary arithmetic
* 🧑‍🏫 Teachers demonstrating CPU division algorithms
* 🔍 Curious developers wanting to see binary math in action

---

## 🙌 Contributing

PRs and suggestions are welcome! Feel free to open an issue for feature requests or bugs.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**Your Name**
🔗 [GitHub](https://github.com/your-username)
🔗 [LinkedIn](https://linkedin.com/in/your-profile)


