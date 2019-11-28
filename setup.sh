image_version=`date +%Y%m%d%H%M`;
echo v1.0;
# cd woah-h5
git pull --rebase origin master;
docker images;
echo '-----------docker images --------------'
docker stop woah-h5;
docker rm woah-h5;
docker build -t woah-h5 .;
echo '---------build end-----------------'
docker run -p 8088:80 -d --name woah-h5 -v /home/jenkins_01/workspace/woah-h5/dist:/usr/share/nginx/html -v /home/jenkins_01/workspace/woah-h5/nginx/nginx.conf:/etc/nginx/nginx.conf woah-h5
# -v ~/docker-data/house-web/appsettings.json:/app/appsettings.json -v ~/docker-data/house-web/NLogFile/:/app/NLogFile   --restart=always
docker logs woah-h5;
#删除build过程中产生的镜像    #docker image prune -a -f
docker rmi $(docker images -f "dangling=true" -q)