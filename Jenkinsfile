pipeline {
  agent any

  tools {
    nodejs 'Nodejs'
  }

  environment {
    CI = 'true'
  }

  stages {
    stage('Install') {
      steps {
        script {
          sh 'npm install'
        }
      }
    }

    stage('Test and Build') {
      parallel {
        stage('Run Tests') {
          steps {
            sh 'npm run test --coverage'
          }
          post {
                always {
                  step([$class: 'CoberturaPublisher', coberturaReportFile: 'coverage/jest/cobertura-coverage.xml'])
                }
            }
        }
        stage('Create Build Artifacts') {
          steps {
            sh 'npm run build'
          }
        }
      }
    }

    stage('Deploy'){
        steps{
            script{
                withAWS(region:'eu-west-2',credentials:'AWS') {
                    s3Delete(bucket: 'burger-menu.broffe.com', path:'**/*')
                    s3Upload(bucket: 'burger-menu.broffe.com', workingDir:'build', includePathPattern:'**/*');
                }
            }
        }
    }
  }
}

