# Prerequisites

To run the setup commands and use this project effectively, you'll need the following software installed on your system:

* **Git:** A version control system used for managing code. Download it from https://git-scm.com/
* **Docker:** A containerization platform for packaging applications. Download it from https://www.docker.com/
* **Node.js and npm (Node Package Manager):** Node.js is a JavaScript runtime environment, and npm is its package manager. Download Node.js (which includes npm) from https://nodejs.org/

**Additional Notes:**

* You'll be using a POSIX-compliant shell environment, which is commonly found on Linux and macOS systems.

# Setup Instructions

> [!NOTE]
> use a POSIX-compliant shell environment.

Step 1. Clonning Source Code 

```
git clone https://github.com/anmol-fzr/attack-capital-blog
```
```
cd attack-capital-blog
```

Step 2. Docker Setup

Start Docker According to your setup 
```
mkdir mongo-temp
```

```
docker compose up -d && cd app && npm i && npm run dev
```

Step 3. Start the Application
```
cd app && npm i && npm run dev
```
