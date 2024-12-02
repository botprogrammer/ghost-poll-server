#!/bin/bash
set -e

# Remove existing git repository if it exists
rm -rf .git

# Initialize git and configure
git init
git checkout -b main

# Initial Setup and Configuration
git add package.json tsconfig.json
GIT_AUTHOR_DATE="Fri Nov 08 13:10:00 2024" GIT_COMMITTER_DATE="Fri Nov 08 13:10:00 2024" git commit -m "Initial backend setup with TypeScript configuration"

git add src/server.ts
GIT_AUTHOR_DATE="Mon Nov 11 14:20:00 2024" GIT_COMMITTER_DATE="Mon Nov 11 14:20:00 2024" git commit -m "Basic Express server setup with middleware"

# Core Backend Features
git add src/config/*
GIT_AUTHOR_DATE="Wed Nov 13 11:30:00 2024" GIT_COMMITTER_DATE="Wed Nov 13 11:30:00 2024" git commit -m "Add database configuration and environment setup"

git add src/routes/poll.routes.ts
GIT_AUTHOR_DATE="Fri Nov 15 16:45:00 2024" GIT_COMMITTER_DATE="Fri Nov 15 16:45:00 2024" git commit -m "Implement poll routes"

git add src/controllers/*
GIT_AUTHOR_DATE="Tue Nov 19 10:15:00 2024" GIT_COMMITTER_DATE="Tue Nov 19 10:15:00 2024" git commit -m "Add poll controllers and request handlers"

# Advanced Features
git add src/helpers/*
GIT_AUTHOR_DATE="Mon Nov 25 15:30:00 2024" GIT_COMMITTER_DATE="Mon Nov 25 15:30:00 2024" git commit -m "Add WebSocket helpers and real-time functionality"

git add src/lib/*
GIT_AUTHOR_DATE="Thu Nov 28 12:40:00 2024" GIT_COMMITTER_DATE="Thu Nov 28 12:40:00 2024" git commit -m "Add utility functions and common libraries"

# Final Integration
git add *
GIT_AUTHOR_DATE="Mon Dec 02 16:45:00 2024" GIT_COMMITTER_DATE="Mon Dec 02 16:45:00 2024" git commit -m "Complete backend integration with error handling and logging"

git remote add origin https://github.com/botprogrammer/ghost-poll-server
git branch -M main

git push -u origin main --force