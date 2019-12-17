---
test: posttest
title: VIM set nocompatible
tags: [VIM, set, nocompatible]
description: Changing vim config to allow for arrow key use
author: Jaemin Kim
--- 

# VIM set nocompatible

To setup Vim or usually vi as well to allow you to navigate in a file with arrow keys.

	vi ~/.vimrc

Add in line at top:

	set nocompatible

With other distro seems like this works for vi and vim.

For Arch Linux only fixes vim.

Also need to install vim.

	pacman -S vim

[Back Home](https://jaemnkm.github.io/jekyll-now/)