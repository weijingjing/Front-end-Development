# Front-end-Development
Front-end Development


### H5周六笔记


列出所有tag

  git tag -l -n5
按标签的名称序号列出所有tag

  git tag -l -n5 -sort=v:refname
取出某一个tag的代码

例如: 取出tag v0.1.1的代码

  git checkout -b b0.1.1 v0.1.1
看到

  Switched to a new branch 'b0.1.1'
再输入

  git branch 
看到

 * b0.1.1   <-- * 表示当前分支
   master
这时候的代码就是tag v0.1.1的代码

常见问题

创建分支失败

分支已经存在

输入

  git checkout -b b0.1.1 v0.1.1
看到

  fatal: A branch named 'b0.1.1' already exists.
表示 b0.1.1 分支已经存在。可以直接切换到 b0.1.1分支

  git checkout b0.1.1 
有文件没有提交

输入

  git checkout -b b0.1.2 v0.1.2
看到

error: Your local changes to the following files would be overwritten by checkout:
	README.md
Please commit your changes or stash them before you switch branches.
Aborting
  
说明目录下有文件没有提交

解决一： 提交文件 解决二： 暂存文件

  git stash
再运行

  git checkout -b b0.1.2 v0.1.2
