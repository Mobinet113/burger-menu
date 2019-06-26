pipeline {
  agent any

  tools {
    nodejs 'Nodejs'
  }

  environment {
    CI = 'true'
  }

  stages {
    stage('Startup') {
      steps {
        script {
          sh 'npm install'
        }
      }
    }
    stage('Test') {
      steps {
        script {
          sh 'npm run test -- --ci --coverageDirectory=jest/coverage'
        }
      }
      post {
        always {
          step([$class: 'CoberturaPublisher', coberturaReportFile: 'jest/coverage/cobertura-coverage.xml'])
        }
      }
    }
    stage('Test and Build') {
      parallel {
        stage('Run Tests') {
          steps {
            sh 'npm run test'
          }
        }
        post {
            always {
              step([$class: 'CoberturaPublisher', coberturaReportFile: 'jest/coverage/cobertura-coverage.xml'])
            }
        }
        stage('Create Build Artifacts') {
          steps {
            sh 'npm run build'
          }
        }
      }
}

  }
}

