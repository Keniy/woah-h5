image_version=`date +%Y%m%d%H%M`;
echo $image_version;
# cd woah-h5
git pull --rebase origin master;
# docker stop woah-h5;
# docker rm woah-h5;
docker build -t woah-h5:$image_version .;
echo '---------build end-----------------'
docker images;
docker run -p 10002:80 -d --name woah-h5 woah-h5:$image_version;
# -v ~/docker-data/house-web/appsettings.json:/app/appsettings.json -v ~/docker-data/house-web/NLogFile/:/app/NLogFile   --restart=always
docker logs woah-h5;
#删除build过程中产生的镜像    #docker image prune -a -f
docker rmi $(docker images -f "dangling=true" -q)