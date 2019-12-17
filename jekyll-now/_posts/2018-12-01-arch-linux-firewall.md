---
test: posttest
title: Arch Linux Firewall
tags: [Arch, Linux, Firewall]
description: Firewall for Arch Linux
author: Jaemin Kim
--- 

# Arch Linux Firewall

With ufw:

Install ufw:

	pacman -S ufw

Enable service:

	ufw enable

Check status:

	sudo ufw status verbos

Enable autostart:

	sudo systemctl enable ufw.service

with iptables

[Back Home](https://jaemnkm.github.io/jekyll-now/)