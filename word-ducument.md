# vite[#](https://sunniejs.github.io/vue-h5-template/guide/vue3/vite.html#vite)

基于原生 ES 模块提供了丰富的内建功能，如速度快到惊人的模块热更新（HMR），使用 Rollup 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。更多关于[vite](https://cn.vitejs.dev/guide/)

模版集成了如下的 vite 插件

- unplugin-auto-import（按需加载，自动引入）
- unplugin-vue-components（按需加载，自动引入组件）
- vite-plugin-compression（开启.gz 压缩）
- vite-plugin-eruda（控制台，方便移动端调试）
- vite-plugin-imagemin（图片压缩）
- vite-plugin-mock（引入 mockjs，本地模拟接口）
- vite-plugin-pages（动态生成路由）
- vite-plugin-progress（构建显示进度条）
- vite-plugin-restart（监听配置文件修改自动重启 Vite）
- vite-plugin-style-import（按需引入样式文件）
- vite-plugin-svg-icons（加载 SVG 文件，自动引入）

# "vite-plugin-imagemin": "^0.6.1" 下载有问题


pipeline {

    //agent 表示要执行的节点，any表示任意节点

   agent any

   //stages表示任务执行时的所有步骤集合

   stages {

         //stage就表示一个步骤，括号里是步骤名称

         stage('拉取项目源码'){

               //每一个stage都可以定义自己执行的节点，如果没定义，则用最上方的

     agent {

                // label 后跟的是节点的标签名称

                label 'mall-server'

       }

            steps {

                echo '这是拉取代码这一步'

                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL} ${env.JOB_NAME}"

                echo "${currentBuild.result} sdsdd"

                sh 'pwd'

                //如果当前节点是windows，我想执行windows下的命令

                //bat 'dir'

             }



         }



        stage('静态代码扫描'){

            steps {

                echo '这是静态代码扫描'

            }





        }



        stage('单元测试'){

            steps {

                echo '执行jacoco单元测试'

            }

        }



        stage('打包依赖服务'){

            steps {

                echo '打包依赖服务'

            }

        }



        stage('打包当前服务'){

            steps {

                echo '打包当前服务'

            }

        }



        stage('部署环境'){

            steps {

                echo '部署环境'

            }

        }



        stage('接口自动化测试'){

            agent {

                label 'auto_test'



            }

            steps {

                echo '接口自动化测试'

            }

        }

        stage('ui自动化'){

            steps {

                echo 'ui自动化'

            }



        }

    }

}
