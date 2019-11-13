image_version=`date +%Y%m%d%H%M`;
echo $image_version;
# cd woah-h5
git pull --rebase origin master;
sudo docker stop woah-h5;
sudo docker rm woah-h5;
sudo docker build -t woah-h5:$image_version .;
sudo docker images;
sudo docker run -p 10002:80 -d --name woah-h5 woah-h5:$image_version;
# -v ~/docker-data/house-web/appsettings.json:/app/appsettings.json -v ~/docker-data/house-web/NLogFile/:/app/NLogFile   --restart=always
sudo docker logs woah-h5;
#删除build过程中产生的镜像    #docker image prune -a -f
sudo docker rmi $(docker images -f "dangling=true" -q)