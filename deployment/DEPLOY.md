# Deployment Instructions

## 1. Upload to Instance

bash scp -i your-key.pem deployment.tar.gz opc@<instance-ip>:~

## 2. On Instance

bash tar -xzf deployment.tar.gz cd deployment docker-compose up -d

## 3. Restore Database

bash docker exec -i gobd-postgres psql -U gobd gobd_production < database-backup.sql

## 4. Access
- Dashboard: http://<instance-ip>:8080
- API: http://<instance-ip>:3000
- Invoice Service: http://<instance-ip>:8000
