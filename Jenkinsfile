pipeline {
    agent any

    environment {
        IMAGE_NAME = 'pawadeshivani/heyhari'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'c6502360-f744-4d13-834f-ad3e42bdf37b',
                    url: 'https://github.com/ShivaniPawade/heyhari.git',
                    branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:${BUILD_NUMBER}")
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                withDockerRegistry([credentialsId: '0bb99875-0531-4404-8f53-79da55bacc44', url: '']) {
                    script {
                        docker.image("${IMAGE_NAME}:${BUILD_NUMBER}").push()
                    }
                }
            }
        }

        stage('Clean Up Docker Images') {
            steps {
                sh "docker rmi ${IMAGE_NAME}:${BUILD_NUMBER} || true"
            }
        }

        stage('Run Docker Container') {
            steps {
                sh "docker stop heyhari || true"
                sh "docker rm heyhari || true"
                sh "docker run -d -p 80:80 --name heyhari ${IMAGE_NAME}:${BUILD_NUMBER}"
            }
        }
    }
}

