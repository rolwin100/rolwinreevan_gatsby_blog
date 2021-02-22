---
title: Why and how you should dockerize your development environment (with VS Code 💙)
tags: [ dev, dataengineer, vscode ]
date: 2021-01-18T05:25:44.226Z
path: blog/devcontainer-vscode
cover: ./cover.jpeg
excerpt: Devcontainer in VS Code 
---

# Why and how you should dockerize your development environment (with VS Code 💙)

![](https://cdn-images-1.medium.com/max/880/1*1t0AmEiZMt0L3cvym1JB7Q.jpeg)

In this blog post, I will cover a few elements that should **motivate you to
dockerize your development environment** and give you a repo example on **how
you can smoothly achieve this with VS Code**. The idea here goes further than
just *"I have my application dockerized that I can test locally,"* and creates a
**complete development experience entirely (or almost?) in docker**. I will also
share** my general experience,** and limits I have encountered while having all
my development environment dockerized for the past few months.

## So… Why?

### It uses the same runtime environment as your application

* A good practice nowadays is to provide a Dockerfile for either the target
deployment runtime (e.g K8s, AWS Fargate, GCP Cloud Run, etc…) or local testing.
It's relatively easy to extend this existing image for development purposes.
* Managing multiple versions of multiple frameworks/languages is easier. Even if
there are tools to help to solve this (for example python version and `pyenv`)
it's easier if it's just a variable to change in your Dockerfile, and no
conflicts guarantee.
* No more "it works on my machine". It will work on your machine, and everywhere
docker is too. (*)

(*) Actually, you may have little glitches between Windows and Unix host (for
path references for example).

### Standardize development tools

Every developer has their own flavors of IDE/extensions/terminal and I'm not
fighting against that. But because docker provides you with a base layer, you
can also add all the classic things a developer may need along the way and share
best practices for the sake of productivity. Plus, when using VS Code, you can
configure **extensions** to be installed for that environment.

Aside from this, any developer can still override these base settings with their
custom choices.

### Get Ready for Cloud IDE

There are a couple of initiatives for some years now to provide a Cloud IDE
experience (Cloud9, Codeanywhere, etc), and to be honest, I've tried them
regularly but wasn’t really satisfied with the whole experience. They were
lacking a lot of what I had on my laptop at the end.

But with the recent announcement of Github's
[Codespaces](https://github.com/features/codespaces) (Visual Studio Online),
this shows that it gets more mature and bring the experience to another level:

* Instead of providing a completely different IDE, they *just* enable an existing
desktop IDE as a web app. This is a different strategy from the one used by the
*old *Cloud* *IDE initiatives. Therefore it’s not like you have to give up your
favorite desktop IDE, your** Cloud IDE is just another option for your
development**: same extensions, same shortcuts, same flavors.
* Having it on Github closes the gap of having yet another service to care to host
your development experience, and it's quite affordable (see the pricing
[here](https://docs.github.com/en/free-pro-team@latest/github/developing-online-with-codespaces/about-billing-for-codespaces)).
* It makes open-source projects even more willing to contribute. Sometimes it can
be a pain to set up the development environment but what if it's 'just a click
away from launching your containerized environment?

## Excited now? Let's get it started!

> Setup (dockerfiles, scripts, etc.) is mostly taken from an official repo from
> Microsoft
[here](https://github.com/microsoft/vscode-dev-containers/tree/master/containers)
that contains a set of development container configuration files.

You can clone the full repository example (Simple python 3.8 API)
[here](https://github.com/mehd-io/devcontainer-demo) to follow along.

### Introduction

You’ll need :

* Docker (yes, really)
* VS Code
* [Remote-containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
VS Code extension

What do we need in our repo? Here's a good practice example :

    ├── .devcontainer
    │ └── devcontainer.json
    └── docker
     ├── app.Dockerfile
     ├── dev.Dockerfile
     └── library-scripts

### devcontainer.json

The **devcontainer.json** will contain all *metadata *for your development
environment meaning:

* Path to Dockerfile to be used
* VS Code extensions to be installed
* All defaults settings from VS Code you want to set up (e.g default linter,
testing framework)
* All extra docker parameters: what ports to forward, what volume to mount, etc.

The file will look like this :

<span class="figcaption_hack">devcontainer.json example</span>

You can find the official documentation
[here](https://code.visualstudio.com/docs/remote/devcontainerjson-reference) if
you need more information.

Note that an extension name is a unique name provided in the extensions store.
To add these, the easiest way is to go to your extensions panel in VS Code,
click on the setting button, and “Add to devcontainer.json”.

![](https://cdn-images-1.medium.com/max/880/1*Cd87a1ko4HbqRNZbxHRUZg.png)

The most interesting part here is the `mount`. By default, the current working
directory (where your code is) will be mounted to `/workspace` but you can
override this with `workspaceMount`. So `mount` refers to extra things you want
to mount. Here, we mount what's needed for :

* git (if you use ssh keys, `.ssh`)

Some other things you may also want to mount are :

* cloud credentials (`.aws` for AWS or `.config` for GCP)
* docker registry `.docker`
* Run dockers command inside the docker container (it connects to your OS
docker-engine) `/var/run/docker.sock` . You can have a look at the repo example
[here](https://github.com/microsoft/vscode-dev-containers/tree/master/containers/docker-from-docker).
However, this increases the size of your image and you can always open a
terminal locally with VS Code using `terminal:Create New integrated Terminal
(local)` or using your favorite terminal.

There are also examples in the official Microsoft repo to not run as root inside
the container
[here](https://github.com/microsoft/vscode-dev-containers/blob/master/containers/python-3/.devcontainer/devcontainer.json#L44).

Keep this file under the** .devcontainer folder** as VS Code will scan for it at
launch time. If it’s there, VS Code will notify you and suggest to reopen VS
Code in that docker environment. Or you can use the Command pallet (Shift+Cmd+P)
and pick: `Remote-Containers:Reopen in Container` or `Remote-Containers-Rebuild
and Reopen in Container` if you want to force a rebuild of your image.

The `postCreateCommand` is quite useful to keep your docker image light and
independent from your application package's requirements. Here we used it to
install `py` packages through `poetry` after the build of the image. Note that
we deactivated the virtualenv and just installed it through the system python as
this one doesn’t really bring much value because our process is already isolated
in the container.

### dev.Dockerfile

The **dev.Dockerfile **will be your docker definition for your development
environment.

Here we can install everything we need for development. This example includes:

* zsh and ohmyzsh
* Standard py tools (pytest/black/isort/…)
* etc

You may want also to install :

* IaC frameworks (pulumi/terraform)
* Cloud CLI (aws, gcp)

Sometimes you will have installation scripts ( `docker/library-scripts` in the
repo example) that are going to be used by both your `app.Dockerfile` and
`dev.Dockerfile`, so it’s good to have them outside your Dockerfile to avoid
duplicate code. On top of that, it’s always good practice not to keep your
Dockerfile too big.

### app.Dockerfile

The **app.Dockerfile** will be the definition for your application. You could
also have a 3rd docker image called for example base.Dockerfile which serves as
a base layer for both app.Dockerfile and dev.Dockerfile. Here, we’ll just
simplify and assume you are using the same source image (FROM : xxx) in both
Dockerfiles.

## How does it work in Github codespace? (VS Code in the cloud)

[Github Codespace](https://github.com/features/codespaces)s is still in closed
beta but the same `.devcontainer.json` configuration will roughly(*) work
out-of-the-box! On your Github profile, click on the `Code` button, then `open
with Codespaces`in the drop down menu, and VS Code will load as a web app, fully
containerized!

(*)Some fields aren’t (yet) available on Codespaces, limitations are listed in
the official documentation.

![](https://cdn-images-1.medium.com/max/880/1*ZK--xEVkt-IKciAjDRqG6w.png)

## Conclusion

You’ve now seen the basics and added value, go play around with the demo project
[here](https://github.com/mehd-io/devcontainer-demo). Why not containerize your
next project from the start?

If you encounter some limitations/bugs feel free to share in the comments!