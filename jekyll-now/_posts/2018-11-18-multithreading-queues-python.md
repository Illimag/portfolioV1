---
test: posttest
title: Multithreading Queues Python
tags: [Multithreading, Queues, Python]
description: How to implement a queue with multithreads in python.
author: Jaemin Kim
--- 

    from Queue import Queue
    from threading import Thread

    def do_stuff(q):
        while True:
            print q.get()
            q.task_done()

    q = Queue(maxsize=0)
    num_threads = 10

    for i in range(num_threads):
        worker = Thread(target=do_stuff, args=(q,))
        worker.setDaemon(True)
        worker.start()

    for y in range (10):
        for x in range(100):
            q.put(x + y * 100)
        q.join()
        print "Batch " + str(y) + "Done"

[Back Home](https://jaemnkm.github.io/jekyll-now/)