# rainbow-unicorn-backend 🌈 🦄

📡 Live @ http://rainbowunicornapi-env.eba-2hn3den4.ap-southeast-1.elasticbeanstalk.com/  
(But APIs can't be used on its own need JWTs.)

## Stack
😂 .Net Entity Framework Core 6  
🔢 postgresql

## Deployment Pipeline
(Let's see if we can automate this)

Run the following commands in the project directory (---/backend) to package our code for deployment.
``` sh
dotnet publish -c Release -o deploy
cd deploy
zip -r ../deploy_bundle.zip *
```
Go to Elastic Beanstalk in the AWS Management Console. On the left navbar and click on the following:
Environments > rainbow-unicorn-api-prod-env > Upload and deploy > Choose File > Select the deploy_bundle.zip you just created.

Version label will be automatically generated, no need to change. Then click ```Deploy```.

Deployment takes around 1-3 mins. After deployment is completed, ensure that Health Status is ```Ok```. You may click the ```Go to Environment``` on the left navbar to access the landing page of our api.
