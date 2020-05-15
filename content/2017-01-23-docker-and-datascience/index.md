---
title: Docker and data science; friends but not (yet) best friends
tags: [ docker, datascience, spark, bigdata ]
date: 2017-01-23T05:25:44.226Z
path: blog/docker-and-datascience
cover: ./cover.jpeg
excerpt: Let's talk about promises in javascript. What exactly is a promise in javascript and how to handle promises. This article will talk about the different methods to resolve promises.  
---

I've been using Docker for web app side projects and now quite often on my data science job. As always, there are pros and cons and I wanted to share my list of use cases in data science context, so here we go!

Last year, Docker released the Mac/Windows version making good friends with industry standard (and Microsoft addicted companies) and bringing in a way, Docker to any workstation.

You want to try out some R scripts?

Run Rstudio with a single docker run command from https://hub.docker.com/r/rocker/rstudio/

Test jupyter notebook with Spark stand alone cluster ?

A single docker run command from https://hub.docker.com/r/jupyter/all-spark-notebook/ . Jupyter has several version of their docker images, see : https://github.com/jupyter/docker-stacks

Running a whole stand alone hadoop cluster w/ Spark,Hive,Hbase,etc ?

Cloudera has a great docker quickstart image : https://hub.docker.com/r/cloudera/quickstart/

# Swiss Army Knife Database

Sometimes there are db skeletons in the closet, or just legacy dump database that you need to analyze. Or another situation can be that you don't want to deal with access and security issue against a PROD database that you may not need at the end (because you're just in a situation of "data exploration"), so you just have to deal with a DB dump.

Thus, it often implies that you run a SQL or NoSQL database before loading them into an hadoop cluster.

By any, I mean, mysql, postgres, mongodb, cassandra and yeah, since last december 2016, even Microsoft join the venture : https://github.com/Microsoft/mssql-docker

## Multi node hadoop cluster

There are some docker projects trying to "handle" multi node hadoop cluster, here is a quick list of projects that are still "up to date / maintain / on going":

 https://github.com/randerzander/docker-hdp (Hortonworks)
https://github.com/weiqingy/caochong (Native)
https://github.com/cloudera/clusterdock (by Cloudera)
So it's clear that having a cluster vs a standing alone cluster is better for prototyping as it comes closer to a real prod environment. However Hadoop was designed to be install on bare metal hardware and Docker has its own storage framework. So the two of them were just designed initially for different purposes and after testing some of the above projects I was faced with some issues :

data persistance : mounted volume on hdfs is not (yet) handled
port handling : need to think on every port you may need to expose before you start (or recreate the docker, but as the data persistance is a problem, you may not want to do that...)
Handling w/ different version of docker (Win/Mac). Docker on desktop is still pretty new and sometimes behaviour on Mac and Win are slightly different.
Finally it's not yet ready for prod, so behaviour of your prototype in a docker cluster environment can be different from your prod cluster installation.

I give a thumbs up for the project above, but it's still for me R&D stuff. At the end, I've ended up running hadoop cluster on LXC (for dev environment) which is a good compromise between docker and standard heavy VM.

## Testing
Meanly in Python, managing different python versions, different package versions can be hell. Pip and pyenv helps but doesn't solve everything. With docker you can have different python version with different package versions running at the same time and test the same scripts across the different dockers.

## Hands-on experience
As docker gains more and more popularity there are often docker image ready in docker hub to test a new framework/database or what's so ever. And deleting a docker is also quick as hell ! So no need to go to a full installation if you're not sure you're gonna keep this new stuff and just wants an hands-on!

## Versatile IDE
As state above, you can run python, scala, and so on without having to install it directly on your machine and having to handle upgrade/versioning problems. So the next step is, what about the IDE ? And YES, there are some interesting cloud IDE running also on docker !

Eclipse che (released in september 2016) : http://www.eclipse.org/che/
Cloud9 https://hub.docker.com/r/kdelfour/supervisor-docker/
So that's mean you can deploy a full dev environment faster than ever just by running some dockers!

## Conclusions
Cons(-) :

You manipulate black boxes and sometimes those black boxes are really "heavy"/"complex" and you don't learn what service needs to be running for your use case (vs installing yourself from scratch). And if something is not working, quite hard to debug that black box.
If you're not running your use case with Docker in Prod, as the framework handles differently storage and network than standard VM, you may have different behaviour.
Multi-node hadoop cluster on docker is painful
Pro(+) :

Super fast set up
Good for training, easy set up with an image hosted (bye bye heavy VM)
Great for prototype and hands on
Easy core language (e.g python 2.7 vs python 3.x) management and testing
Flexible dev environment


Have a good docker day !