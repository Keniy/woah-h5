image_version=`date +%Y%m%d%H%M`;
echo v1.0;
# cd woah-h5
git pull --rebase origin master;
docker stop woah-h5;
docker rm woah-h5;
docker build -t woah-h5:v1.0 .;
echo '---------build end-----------------'
# docker tag woah-h5:v1.0 49.233.192.53:5000/woah-h5:v1.0;
echo '-----------docker tag end------------'
# docker push 49.233.192.53:5000/woah-h5:v1.0;
echo '-----------docker push end------------'
docker images;
docker run -p 1010:8888 -d --name woah-h5 woah-h5:v1.0;
# -v ~/docker-data/house-web/appsettings.json:/app/appsettings.json -v ~/docker-data/house-web/NLogFile/:/app/NLogFile   --restart=always
docker logs woah-h5;
#删除build过程中产生的镜像    #docker image prune -a -f
docker rmi $(docker images -f "dangling=true" -q)