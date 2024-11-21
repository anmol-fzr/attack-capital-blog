# Setup Instructions

Try to run following commands in a POSIX compliant shell

Step 1. Clonning Source Code 

`git clone https://github.com/anmol-fzr/attack-capital-blog`
`cd attack-capital-blog`

Step 2. Docker Setup

Start Docker According to your setup 
`mkdir mongo-temp`
`docker compose up -d`



# Changes
## Routing 

i moved auth routes `/login` and `/signup` to `/auth/login` and `/auth/signup` for the sake of modularity and readability
