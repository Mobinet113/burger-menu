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
    stage('Build') {
      steps {
        script {
          sh 'npm run build'
        }
      }
    }
  }
}

