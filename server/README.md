# Setup Instructions

Try to run following commands in a POSIX compliant shell

Step 1. Clonning Source Code 

`git clone https://github.com/anmol-fzr/attck-blog-server.git`
`git clone https://github.com/anmol-fzr/attck-blog-app.git`
`cp attck-blog-server/docker-compose.yml ../`

Step 2. Docker Setup

Start Docker According to your setup 



# Changes
## Routing 

i moved auth routes `/login` and `/signup` to `/auth/login` and `/auth/signup` for the sake of modularity and readability
