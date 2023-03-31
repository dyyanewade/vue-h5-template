PRO_NAME="vue-h5-template"
if [! -f "/usr/local/nginx/conf/$PRO_NAME.conf"];then
   echo "第一次需要新建配置文件，nginx 发布"
   mv /data/jenkins-data/workspace/$PRO_NAME/$PRO_NAME.conf /usr/local/nginx/conf
   mv /data/jenkins-data/workspace/$PRO_NAME/dist /usr/local/nginx/html/$PRO_NAME
   /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/$PRO_NAME.conf
else
 echo "更新应用"
   mv /data/jenkins-data/workspace/$PRO_NAME/dist /data/jenkins-data/workspace/$PRO_NAME/$PRO_NAME
   cp -rf /data/jenkins-data/workspace/$PRO_NAME/$PRO_NAME /usr/local/nginx/html
   rm -rf /data/jenkins-data/workspace/$PRO_NAME/$PRO_NAME
fi
