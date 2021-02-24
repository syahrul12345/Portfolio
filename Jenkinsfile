properties([pipelineTriggers([githubPush()])])
pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
            //   when { tag "release-*" }
              withEnv(["PATH=$PATH:~/.local/bin"]){
                sh "chmod +x ./build.sh"
                sh "./build.sh"
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