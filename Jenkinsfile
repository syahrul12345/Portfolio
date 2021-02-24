properties([pipelineTriggers([githubPush()])])
pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
            //   when { tag "release-*" }
              withEnv(["PATH=$PATH:~/.local/bin"]){
                sh "make up"
              }
            }
        }
        
    }
    post {
       always {
           deleteDir()
       }
    }
}