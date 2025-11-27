# Deployment Guide: Vercel (Frontend) + Render (Backend & DB)

This guide explains how to deploy your full-stack portfolio for free using the "Hybrid" approach for best performance.

## Part 1: Backend & Database (Render)

1.  **Create an Account:** Go to [render.com](https://render.com) and sign up/login.
2.  **Create Database:**
    *   Click **New +** -> **PostgreSQL**.
    *   Name: `portfolio-db`.
    *   Region: Choose the one closest to you (e.g., Ohio, Frankfurt).
    *   Plan: **Free**.
    *   Click **Create Database**.
    *   **Keep this tab open.** You will need the *Internal Connection Details* (Hostname, Port, Database, Username, Password).

3.  **Create Backend Service:**
    *   Click **New +** -> **Web Service**.
    *   Connect your GitHub repository (`landingulises`).
    *   **Runtime:** Docker.
    *   **Region:** Same as your database.
    *   **Branch:** main.
    *   **Root Directory:** `backend` (IMPORTANT: This tells Render to build the Java app, not the frontend).
    *   **Plan:** Free.
    *   **Environment Variables:** Scroll down and add these keys/values using the info from your Database:
        *   `SPRING_DATASOURCE_USERNAME`: (Copy from DB details)
        *   `SPRING_DATASOURCE_PASSWORD`: (Copy from DB details)
        *   `SPRING_DATASOURCE_URL`: `jdbc:postgresql://HOSTNAME:PORT/DATABASE`
            *   *Replace HOSTNAME, PORT, DATABASE with the values from your Render DB details.*
            *   *Example:* `jdbc:postgresql://dpg-cn87654321-a:5432/portfolio_db`
        *   `cors.allowed-origins`: `*` (For now, to test. We will secure it later).
    *   Click **Create Web Service**.
    *   Wait for the build to finish. Copy your **Backend URL** (e.g., `https://portfolio-backend.onrender.com`).

## Part 2: Frontend (Vercel)

1.  **Create an Account:** Go to [vercel.com](https://vercel.com) and sign up with GitHub.
2.  **Import Project:**
    *   Click **Add New...** -> **Project**.
    *   Select your `landingulises` repository.
3.  **Configure Project:**
    *   **Framework Preset:** Vite.
    *   **Environment Variables:**
        *   Key: `VITE_API_URL`
        *   Value: Your Render Backend URL (e.g., `https://portfolio-backend.onrender.com`). **IMPORTANT: No trailing slash `/` at the end.**
4.  **Deploy:** Click **Deploy**.

## Part 3: Final Security Polish

1.  Once Vercel finishes, copy your new website URL (e.g., `https://landingulises.vercel.app`).
2.  Go back to **Render** -> **Web Service** -> **Environment**.
3.  Edit `cors.allowed-origins` and change `*` to your Vercel URL.
4.  Save changes. Render will redeploy automatically.

## Done! 🚀
Your full-stack portfolio is now live!
