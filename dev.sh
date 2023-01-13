#!/bin/bash

echo "Starting..."

sleep 1 

docker run --rm -d --name mongodb --mount source=mongo_data,target=/data -p 27017:27017 mongo:latest

sleep 1

echo "Waiting for the mongodb container to start..."

while [ "$(docker inspect -f '{{.State.Running}}' mongodb)" != "true" ]; do
    sleep 1
done

echo "Mongodb container started!"

folders=($(find . -type d -name backend))

gnome-terminal -e "bash -c 'cd ./client && yarn dev; exec bash'" &

for folder in "${folders[@]}"
do
  for subfolder in "$folder"/*/
  do
    (cd "$subfolder" && yarn dev) &
  done
done

echo "Done running"
