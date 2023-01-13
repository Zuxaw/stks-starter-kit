# stks-starter-kit
Official starter kit for STKS Team .

This template is very usefull to launch any kind of webapp in microservices with kubernetes. To do this we propose an application template where a user can connect and make posts 

## Architecture:
![image](https://user-images.githubusercontent.com/82362374/212193602-8084fc25-3236-49b0-9285-bfc739daacd9.png)

## Clouds

For the cloud we are using GCP

To init the cloud env you need to setup first your cluster kubernetes on gcp then 

`gcloud init` to setup gcloud on your local computer and don't forger to connect your google cloud kubernetes to your local one with :

```
gcloud container clusters get-credentials staging
gcloud container clusters get-credentials production
```

Once it's setup you can easly switch between 

## Environements

3 environments are available:
- prod
- staging
- local

To run the local env you need no to `yarn install` in each micro services, once it's done you can launch the `dev` script at the root of the repo.

To trigger the pipeline of the staging env you can use `skaffold run -p staging`

To trigger the pipeline of the prod env you can use `skaffold run -p prod`

## Tech

- For the front it's react + vite + tailwind + daisyui + apollo
- For the back it's nodeJS + mongoDB + graphQL

Eslint and prettier are setup for each microservice, to format document you need to do `cmd + s` or `ctrl + s`
There is also config to setup your vscode in `./vscode`
