node ace migration:rollback
docker-compose down
docker-compose up -d
node ace migration:run
