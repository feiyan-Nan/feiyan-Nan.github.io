---
title: "IO 模式"
category: "golang"
order: 26
---

IO模型
IO两个阶段
IO过程分两阶段：
1、数据准备阶段。从设备读取数据到内核空间的缓冲区（淘米，把米放饭锅里煮饭）
2、内核空间复制回用户空间进程缓冲区阶段（盛饭，从内核这个饭锅里面把饭装到碗里来）
系统调用——read函数、recv函数等

同步阻塞IO

进程等待（阻塞），直到读写完成。（全程等待）

同步非阻塞IO


---

进程调用recvfrom操作，如果IO设备没有准备好，立即返回ERROR，进程不阻塞。用户可以再次发起系
统调用（可以轮询），如果内核已经准备好，就阻塞，然后复制数据到用户空间。虽然不阻塞，但是不
断轮询，CPU处于忙等。
淘米、蒸饭我不阻塞等，反复来询问，一直没有拿到饭。盛饭过程我等着你装好饭，但是要等到盛好饭
才算完事，这是同步的，结果就是盛好饭。

IO多路复用
也称Event-driven IO。
所谓IO多路复用，就是利用操作系统提供的多路选择器（select/poll/epoll等）同时监控多个IO，称为多
路IO，哪怕只有一路准备好了，就不需要等了就可以开始处理这一路的数据。这种方式提高了同时处理
IO的能力。

select几乎所有操作系统平台都支持，poll是对的select的升级。
epoll，Linux系统内核2.5+开始支持，对select和poll的增强，在监视的基础上，减少数据在用户态和内
核态之间的反复复制，增加回调机制。Epoll与select相比，解决了select监听fd的限制和O(n)遍历位图效
率问题，提供回调机制等，效率更高。BSD、Mac平台有kqueue，Windows有iocp。
以select为例，将关注的IO操作告诉select函数并调用，进程阻塞，内核“监视”select关注的文件描述符
fd，被关注的任何一个fd对应的IO准备好了数据，select返回。再使用read将数据复制到用户进程。

实战：实现WEB服务器——IO多路复用版
IO多路复用高级标准库selectors
注意selectors库对Windows系统只实现了select，效率不高，请在Linux、Unix系统运行
selectors库内部抹平了IO多路复用不同技术调用差异，使用统一的类和方法，非常方便
1

import selectors

2

import socket

3

from selectors import EVENT_READ

4
5

html = """\

6

<!DOCTYPE html>

7

<html lang="en">

8

<head>


---

9
10

<meta charset="UTF-8">
<title>magedu</title>

11

</head>

12

<body>

13

<h1>马哥教育www.magedu.com -- Multiplexing</h1>

14

</body>

15

</html>\

16

""".encode()

17
18

response = """\

19

HTTP/1.1 200 OK

20

Date: Mon, 24 Oct 2022 20:04:23 GMT

21

Content-Type: text/html

22

Content-Length: {}

23

Connection: keep-alive

24

Server: wayne.magedu.com

25
26

""".format(len(html)).replace('\n', '\r\n').encode() + html

27
28

selector = selectors.DefaultSelector()

29

print(selector)

# Linux Epoll

30
31

def accept(server):

32

conn, raddr = server.accept()

33

conn.setblocking(False)

34

selector.register(conn, EVENT_READ, recv)

# 要非阻塞

35
36
37

def recv(conn:socket.socket):
try:

38

data = conn.recv(1024)

39

if not data:

40

print(conn.getpeername(), "bye~~~")

41

conn.send(response)

42

except Exception as e:

43

print(e, "!!!!!!")

44

finally:

45

selector.unregister(conn)

46

conn.close()

47
48

if __name__ == '__main__':

49

server = socket.socket()

50

server.setblocking(False)

51

laddr = ('0.0.0.0', 9999)

52

server.bind(laddr)

53

server.listen(1024)

# 要非阻塞

54
55

selector.register(server, EVENT_READ, accept)

56
57
58
59

while True:
for key, event in selector.select(): # 阻塞到有事件
key.data(key.fileobj)

数数上例有几个线程？


---


---
