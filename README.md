#  Stopwatch (React)
A sleek, functional stopwatch application built with **React**, styled with modern CSS, and bundled using **Vite**. Learn the fundamentals of React's state management, hooks, and component design with this simple yet effective time-tracking tool.

## Screenshot
![Screenshot](https://raw.githubusercontent.com/Deepak-Kumar-Saini/Stopwatch-react/refs/heads/main/public/Stopwatch-screenshot.PNG)

---

##  Built With

- **React** — Component-driven UI library
- **CSS** — for layout and appearance
- **Vite** — Fast development server and bundler  

---

##  Features (Typical for a React stopwatch)
- **Start** — Begin timing
- **Pause** — Halt the timer
- **Reset** — Zero out the elapsed time
- Display of elapsed time — usually in minutes, seconds, and perhaps milliseconds

---

##  Getting Started
To run the project locally:
```bash
git clone https://github.com/Deepak-Kumar-Saini/Stopwatch-react.git
cd Stopwatch-react
npm install
npm run dev
```
## How It Works
**State Management**
Uses useState to track elapsed time and whether the stopwatch is running.
**Timing Mechanism**
Utilizes useEffect and setInterval to increment the timer at consistent intervals. Cleanup occurs to avoid memory leaks.
**Time Formatting**
Converts elapsed uptime (in milliseconds) into a readable format like MM:SS:MS.
**Controls Handling**
Buttons or UI elements invoke functions to start, pause, or reset the stopwatch.

