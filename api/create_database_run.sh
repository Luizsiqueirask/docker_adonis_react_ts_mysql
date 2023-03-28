node ace migration:rollback
docker-compose down
sudo rm -r ./database/.docker
docker-compose up -d
node ace migration:run
