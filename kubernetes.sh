docker-compose config > docker-compose-resolved.yaml
kompose convert -f docker-compose-resolved.yaml
kubectl apply -f .
rm -rf docker-compose-resolved.yaml portfolio-deployment.yaml portfolio-service.yaml