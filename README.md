# 👾 Retro Full Stack Portfolio

A modern, responsive developer portfolio with a unique **Retro / Pixel Art** aesthetic, built with a robust Full Stack architecture and DevOps best practices.

![Tech Stack](https://img.shields.io/badge/Frontend-React_Vite-61DAFB?style=for-the-badge&logo=react)
![Tech Stack](https://img.shields.io/badge/Backend-Spring_Boot-6DB33F?style=for-the-badge&logo=spring)
![Tech Stack](https://img.shields.io/badge/Database-PostgreSQL-336791?style=for-the-badge&logo=postgresql)
![Tech Stack](https://img.shields.io/badge/DevOps-Docker-2496ED?style=for-the-badge&logo=docker)

## ✨ Features

*   **🎨 Retro Aesthetic:** Pixel art fonts ("Press Start 2P"), neon pastel colors, and CRT scanline effects.
*   **🍱 Bento Grid Layout:** A responsive, modular grid design that adapts perfectly to Mobile, Tablet, and Desktop.
*   **🔢 Visitor Counter:** Real-time visitor tracking stored in a PostgreSQL database.
*   **📬 Contact Form:** Functional form that saves messages directly to the database.
*   **🐳 Dockerized:** Fully containerized environment (Frontend + Backend + DB) for consistent development and deployment.
*   **🚀 CI/CD:** Automated GitHub Actions pipeline to build Docker images on every push.

## 🛠️ Tech Stack

### Frontend
*   **React (Vite):** Fast, modern UI library.
*   **CSS3:** Custom variables, Flexbox/Grid, and Animations (no heavy frameworks).
*   **Pixelarticons:** Retro iconography.

### Backend
*   **Java 17 + Spring Boot:** Robust REST API.
*   **Spring Data JPA:** Secure database interactions (SQL Injection proof).
*   **PostgreSQL:** Reliable relational database.

### DevOps & Deployment
*   **Docker & Docker Compose:** Container orchestration.
*   **Nginx:** Production-grade web server for the frontend.
*   **GitHub Actions:** Continuous Integration.
*   **Render:** Backend & Database hosting.
*   **Vercel:** Frontend hosting.

## 🚀 Getting Started (Local Development)

You can run the entire stack locally with a single command using Docker.

### Prerequisites
*   Docker & Docker Compose installed.
*   Git.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/UlisesDevs/landingulises.git
    cd landingulises
    ```

2.  **Run with Docker Compose:**
    ```bash
    docker-compose up --build
    ```

3.  **Access the App:**
    *   **Frontend:** `http://localhost:5173` (or port 80 depending on config)
    *   **Backend API:** `http://localhost:8080`
    *   **Database:** `localhost:5432`

## ☁️ Deployment

This project is deployed using a Hybrid approach for maximum performance and free tier optimization.

*   **Frontend:** Deployed on **Vercel** (Global CDN).
*   **Backend & DB:** Deployed on **Render** (Docker Container + Managed Postgres).

👉 **[Read the Full Deployment Guide](DEPLOYMENT.md)** for step-by-step instructions on how to deploy your own instance.

## 🛡️ Security

*   **SQL Injection Protection:** Uses Spring Data JPA parameterized queries.
*   **XSS Protection:** React auto-escaping.
*   **CORS:** Configured to only allow requests from the production frontend.

---
*Built with 💜 by [UlisesDevs](https://github.com/UlisesDevs)*
