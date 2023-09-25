docker rm -f client-flamingo
docker build -t salehhajiyev/client-flamingo .
docker run -d --name client-flamingo -p 3080:3000 salehhajiyev/client-flamingo
