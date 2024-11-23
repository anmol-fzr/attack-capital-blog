#!/bin/sh

LOGFILE="setup.log"

log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOGFILE"
}

onerr() {
    echo "Go Back to Step $1 in README.md" 
}

log "Cloning the repository..."

if git clone https://github.com/anmol-fzr/attack-capital-blog; then
    log "Repository cloned successfully."
else
    log "Error: Failed to clone the repository."
    onerr 1
    exit 1
fi

cd attack-capital-blog || { log "Error: Failed to change directory to attack-capital-blog."; exit 1; }

log "Starting Docker Compose..."
if docker compose up -d; then
    log "Docker Compose started successfully."
else
    onerr 2
    log "Error: Failed to start Docker Compose."
    exit 1
fi

cd app || { log "Error: Failed to change directory to app."; onerr 3; exit 1; }

log "Installing npm packages..."
if npm install; then
    log "Npm packages installed successfully."
else
    onerr 3b
    log "Error: Failed to install npm packages."
    exit 1
fi

log "Running the development server..."
if npm run dev; then
    log "Development server is running."
else
    onerr 3c
    log "Error: Failed to run the development server."
    exit 1
fi
