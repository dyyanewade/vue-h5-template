pipeline{
  agent any
  tools {
    nodejs 'NodeJS_16.15.0'
  }
  stages{
    stage("pull"){
      steps {
        sh 'sudo rm -rf public'
        sh 'sudo rm -rf logs'
        git branch: 'master', credentialsId: '4f3803e0-ab8d-416c-9850-5b3800128697', url: 'git@github.com:dyyanewade/vue-h5-template.git'
      }
    }
    stage("project build"){
      steps {
        sh 'npm install'
        sh 'npm run build'
        sh 'sudo rm -rf node_modules'
      }
    }
    stage("docker build"){
      steps {
        sh 'docker build -t xxx:v${BUILD_NUMBER} . '
      }
    }
    stage("docker run"){
      steps {
        sh 'docker stop $(docker ps -a -q)'
        sh 'docker run -p 80:80 --name xxx_v${BUILD_NUMBER} -d xxx:v${BUILD_NUMBER}'
      }
    }
  }
}
