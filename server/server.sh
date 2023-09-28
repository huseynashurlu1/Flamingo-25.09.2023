docker rm -f server-flamingo
docker run -d --name server-flamingo -p 5080:5000 salehhajiyev/server-flamingo
