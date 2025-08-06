# Mentr – Instant Expert Guidance Platform

Mentr is a React-based mentorship web application that allows users to search, book, and connect with expert mentors. The project is structured using modular components with responsive UI powered by TailwindCSS. Core features include a dynamic search interface, live mentor status, booking modals, and a simulated payment gateway. Emphasis was placed on component reusability, clean code separation, and user-focused experience design.

## Approach

* Built with React + Vite for fast development and modular codebase.
* Structured components into feature-based folders: shared, home, mentor, etc.
* Used React Router for dynamic routing with query support.
* Implemented interactive UI like glitch animations, mentor cards, and booking modals.
* Integrated mock payment simulation and routing to Jitsi call room for video chat.

## Limitations & Assumptions

* No real backend/API: mentor data is static from a mock file.
* Payment is simulated; no real transaction processing is implemented.
* Time and date validation rely on client’s local timezone.
* User authentication, reviews, and mentor availability are not integrated.
* Video calling uses a static Jitsi room link (no room generation or security).


