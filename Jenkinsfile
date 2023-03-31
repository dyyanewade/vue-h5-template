pipeline{
	//agent 表示要执行的节点，any表示任意节点
  agent any
  tools {
    nodejs 'NodeJS_16.15.0'
  }
	 //stage就表示一个步骤，括号里是步骤名称
  stages{
		stage("环境检查"){
      steps {
				sh label: '',
				script: '''
					node -v
					pnpm -v
					git version
					pwd
				'''
      }
    }
    stage("pull"){
      steps {
        git branch: 'master', credentialsId: '4f3803e0-ab8d-416c-9850-5b3800128697', url: 'git@github.com:dyyanewade/vue-h5-template.git'
      }
    }
    stage("project build"){
      steps {
        sh 'pnpm install'
        sh 'pnpm run build'
        sh 'sudo rm -rf node_modules'
      }
    }
    stage("Deploy"){
      steps {
        script{
					def remote = [:]
					remote.name = 'feService'
					remote.host = '1.14.70.116'
					remote.user = 'root'
					remote.password = 'fate190.'
					remote.allowAnyHosts = true
					stage('Remote SSH') {
            sshScript remote: remote, script: "deploy.sh"
          }
				}
      }
    }
    stage("docker run"){
      steps {
        sh 'docker stop $(docker ps -a -q)'
        sh 'docker run -p 80:80 --name xxx_v${BUILD_NUMBER} -d xxx:v${BUILD_NUMBER}'
      }
    }
  }
	post {
    always {
      echo 'This will always run'
      wrap([$class: 'BuildUser']) {
        sh 'echo "${BUILD_USER}"'
        sh """curl 'https://oapi.dingtalk.com/robot/send?access_token=c0f9bc9ae48635ed88f7b8f7ab69d987539d869f79475443fe8fb8f93dcda16a'  -H 'Content-Type: application/json' -d '{"msgtype":"text","text":{"content": "Jenkins提醒。部署服务：${JOB_NAME} \n构建分支: ${BRANCH_NAME}\n构建ID: ${BUILD_ID}\n提交信息：${commit}构建状态：${currentBuild.currentResult}"}}'"""
      }
    }
    success {
      echo 'successful'
    }
    failure {
      echo 'failed'
    }
  }
}
