(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{357:function(a,t,s){"use strict";s.r(t);var e=s(42),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"安装依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[a._v("#")]),a._v(" 安装依赖")]),a._v(" "),s("p",[a._v("安装以下依赖软件：")]),a._v(" "),s("ul",[s("li",[a._v("Redis 2.8或以上版本")]),a._v(" "),s("li",[a._v("MySQL 5.7或以上版本")]),a._v(" "),s("li",[a._v("Apollo配置中心 (可选)")]),a._v(" "),s("li",[a._v("Eureka服务注册中心")])]),a._v(" "),s("h3",{attrs:{id:"安装mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql"}},[a._v("#")]),a._v(" 安装MySQL")]),a._v(" "),s("ul",[s("li",[a._v("操作系统 CentOS 6.5")]),a._v(" "),s("li",[a._v("MySQL 5.7.30")])]),a._v(" "),s("ol",[s("li",[a._v("下载MySQL")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://downloads.mysql.com/archives/get/p/23/file/mysql-5.7.30-1.el6.x86_64.rpm-bundle.tar\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("解压")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xvf mysql-5.7.30-1.el6.x86_64.rpm-bundle.tar\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("安装")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" mysql-community-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("server,client,common,libs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("-*\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[a._v("启动")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" mysqld start\n")])])]),s("p",[a._v("启动成功会显示以下信息：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@localhost ~]# sudo service mysqld start\nInitializing MySQL database:                               [  OK  ]\nStarting mysqld:                                           [  OK  ]\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[a._v("初始密码")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo grep 'temporary password' /var/log/mysqld.log\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[a._v("使用初始密码登录")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysql -uroot -p\n")])])]),s("ol",{attrs:{start:"7"}},[s("li",[a._v("修改密码")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass4!';\n")])])]),s("ol",{attrs:{start:"8"}},[s("li",[a._v("退出登录")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("quit\n")])])]),s("h3",{attrs:{id:"安装redis-6-0-8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装redis-6-0-8"}},[a._v("#")]),a._v(" 安装Redis 6.0.8")]),a._v(" "),s("ol",[s("li",[a._v("下载解压并编译")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ wget http://download.redis.io/releases/redis-6.0.8.tar.gz\n$ tar xzf redis-6.0.8.tar.gz\n$ cd redis-6.0.8\n$ make\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("启动redis")])]),a._v(" "),s("p",[a._v("运行编译后的文件:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ src/redis-server\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("客户端连接")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('$ src/redis-cli\nredis> set foo bar\nOK\nredis> get foo\n"bar"\n')])])]),s("h3",{attrs:{id:"安装apollo配置中心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装apollo配置中心"}},[a._v("#")]),a._v(" 安装Apollo配置中心")]),a._v(" "),s("p",[a._v("说明： apollo是可选组件，如果不使用apollo可使用本地配置文件。")]),a._v(" "),s("p",[a._v("安装步骤详见apollo官方文档: "),s("a",{attrs:{href:"https://github.com/ctripcorp/apollo/wiki/Quick-Start",target:"_blank",rel:"noopener noreferrer"}},[s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"安装eureka服务注册中心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装eureka服务注册中心"}},[a._v("#")]),a._v(" 安装Eureka服务注册中心")]),a._v(" "),s("p",[a._v("环境要求：")]),a._v(" "),s("ul",[s("li",[a._v("JDK 1.8 或以上版本")]),a._v(" "),s("li",[a._v("Tomcat 6.0.10 或以上版本 （如使用spring cloud已内置）")])]),a._v(" "),s("ol",[s("li",[a._v("安装JDK 1.8")])]),a._v(" "),s("p",[a._v("1）下载JDK，如： jdk-8u192-linux-x64.tar.gz")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("tar -zxvf jdk-8u192-linux-x64.tar.gz\nmv jdk1.8.0_192 /usr/local/\n\n")])])]),s("p",[a._v("2）设置JDK环境变量，将下面内容追回到/etc/profile文件后面")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("JAVA_HOME=/usr/local/jdk/jdk1.8.0_192\nJRE_HOME=$JAVA_HOME/jre\nPATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin\nCLASSPATH=:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib/dt.jar\nexport JAVA_HOME JRE_HOME PATH CLASSPATH\n\n")])])]),s("p",[a._v("3）执行以下命令全环境变量生效：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("source /etc/profile\n\n")])])]),s("p",[a._v("4）查看是否安装成功")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("java -version\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("安装eureka")])]),a._v(" "),s("p",[a._v("1）使用IDE创建一个spring boot项目，如：sc-eureka-server")]),a._v(" "),s("p",[a._v("pom.xml:")]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.springframework.cloud"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("spring-cloud-starter-netflix-eureka-server"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("p",[a._v("在启动类上添加@EnableEurekaServer注解来启用Euerka注册中心功能:")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@SpringBootApplication")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@EnableEurekaServer")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScEurekaServerApplication")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SpringApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScEurekaServerApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("application.properties配置文件：")]),a._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring.application.name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("sc-eureka-server")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("server.port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("8761")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("eureka.instance.hostname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("localhost")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("eureka.client.registerWithEureka")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("false")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("eureka.client.fetchRegistry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("false")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("eureka.server.enableSelfPreservation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("false")]),a._v("\n")])])]),s("p",[a._v("2） maven构建并运行sc-eureka-server应用, 启动后访问地址http://localhost:8761/可以看到Eureka注册中心的界面")]),a._v(" "),s("p",[a._v("3）把target/sc-eureka-server-1.0.0.jar传到linux服务器上运行. (仅以单机部署为例)")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("nohub java -jar sc-eureka-server-1.0.0.jar "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v(" \n")])])]),s("p",[a._v("4）eureka客户端的注册地址为：http://localhost:8761/eureka/  (替换localhost为服务器的IP)")]),a._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("eureka.client.serviceUrl.defaultZone")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("http://localhost:8761/eureka/")]),a._v("\n")])])]),s("h2",{attrs:{id:"安装fizz"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装fizz"}},[a._v("#")]),a._v(" 安装Fizz")]),a._v(" "),s("h3",{attrs:{id:"管理后台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管理后台"}},[a._v("#")]),a._v(" 管理后台")]),a._v(" "),s("p",[a._v("从github的releases(https://github.com/wehotel/fizz-gateway-community/releases)下载 fizz-manager-professional 和 fizz-admin-professional 的安装包")]),a._v(" "),s("ul",[s("li",[a._v("管理后台服务端（fizz-manager-professional）")])]),a._v(" "),s("ol",[s("li",[a._v("首次安装执行"),s("code",[a._v("fizz-manager-professional-1.0.0-mysql.sql")]),a._v("数据库脚本")]),a._v(" "),s("li",[a._v("将"),s("code",[a._v("application-prod.yml")]),a._v("、"),s("code",[a._v("boot.sh")]),a._v("、"),s("code",[a._v("fizz-manager-professional-1.0.0.jar")]),a._v("拷贝到"),s("code",[a._v("/data/webapps/fizz-manager-professional")]),a._v("目录下")]),a._v(" "),s("li",[a._v("修改"),s("code",[a._v("application-prod.yml")]),a._v("文件，将相关配置修改成部署环境的配置")]),a._v(" "),s("li",[a._v("修改"),s("code",[a._v("boot.sh")]),a._v("文件，将"),s("code",[a._v("RUN_CMD")]),a._v("变量值修改成部署环境的JAVA实际路径")]),a._v(" "),s("li",[a._v("执行 "),s("code",[a._v("chmod +x boot.sh")]),a._v(" 命令给"),s("code",[a._v("boot.sh")]),a._v("增加执行权限")]),a._v(" "),s("li",[a._v("执行 "),s("code",[a._v("./boot.sh start")]),a._v(" 命令启动服务，支持 start/stop/restart/status命令")]),a._v(" "),s("li",[a._v("服务启动后访问 http://IP:8000/fizz-manager （将IP替换成服务部署机器IP地址），使用超级管理员账户"),s("code",[a._v("admin")]),a._v("密码"),s("code",[a._v("Aa123!")]),a._v("登录")])]),a._v(" "),s("ul",[s("li",[a._v("管理后台前端（fizz-admin-professional）")])]),a._v(" "),s("p",[a._v("zip资源包解压后，取文件夹【fizzAdmin】放置于服务器静态数据存放目录 如：/home/data/")]),a._v(" "),s("p",[a._v("nginx配置")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("server {\n  listen 9000;\n  server_name localhost:9000;\n  location / {\n    root /home/data/fizzAdmin;\n  }\n  location ^~ /api {\n    rewrite ^/api/(.*) /$1 break;\n    proxy_pass http://127.0.0.1:8000;\n  }\n}\n\n# 注：root中地址需与资源包存放目录路径一致\n# 注：http://127.0.0.1:8000 为管理后台(fizz-manager-professional)的访问地址\n")])])]),s("p",[a._v("访问地址")]),a._v(" "),s("p",[a._v("【资源部署服务器IP + 端口号】如：http://127.0.0.1:9000/")]),a._v(" "),s("p",[a._v("（端口号与nginx配置端口号一致）")]),a._v(" "),s("h3",{attrs:{id:"fizz-gateway-community社区版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fizz-gateway-community社区版"}},[a._v("#")]),a._v(" fizz-gateway-community社区版")]),a._v(" "),s("p",[a._v("说明：如果使用apollo配置中心，可把application.yml文件内容迁到配置中心（apollo上应用名为：fizz-gateway）；使用不使用apollo可去掉下面启动命令里的apollo参数。")]),a._v(" "),s("p",[a._v("脚本启动:")]),a._v(" "),s("ol",[s("li",[a._v("下载fizz-gateway-community的最新代码，修改application.yml配置文件里eureka、redis的配置，使用maven构建好并把构建好的fizz-gateway-community-1.0.0.jar和boot.sh放同一目录")]),a._v(" "),s("li",[a._v("修改boot.sh脚本的apollo连接，JVM内存配置，")]),a._v(" "),s("li",[a._v("执行 "),s("code",[a._v("./boot.sh start")]),a._v(" 命令启动服务，支持 start/stop/restart/status命令")])]),a._v(" "),s("p",[a._v("IDE启动:")]),a._v(" "),s("ol",[s("li",[a._v("本地clone仓库上的最新代码")]),a._v(" "),s("li",[a._v("将项目fizz-gateway导入IDE")]),a._v(" "),s("li",[a._v("导入完成后设置项目启动配置及修改application.yml配置文件里eureka、redis的配置，在VM选项中加入"),s("code",[a._v("-Denv=dev -Dapollo.meta=http://localhost:66")]),a._v("(Apollo配置中心地址)")])]),a._v(" "),s("p",[a._v("jar启动:")]),a._v(" "),s("ol",[s("li",[a._v("本地clone仓库上的最新代码，修改application.yml配置文件里eureka、redis的配置")]),a._v(" "),s("li",[a._v("在项目根目录fizz-gateway-community下执行Maven命令"),s("code",[a._v("mvn clean package -DskipTests=true")]),a._v("打包")]),a._v(" "),s("li",[a._v("进入target目录，使用命令"),s("code",[a._v("java -jar -Denv=DEV -Dapollo.meta=http://localhost:66 fizz-gateway-community-1.0.0.jar")]),a._v("启动服务")])]),a._v(" "),s("p",[a._v("网关访问地址格式：")]),a._v(" "),s("p",[a._v("http://127.0.0.1:8600/proxy/[服务名]/[API Path]")])])}),[],!1,null,null,null);t.default=r.exports}}]);