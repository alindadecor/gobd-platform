#!/bin/bash

echo "📦 Creating deployment package..."

# Create deployment directory
mkdir -p deployment
cd deployment

# Export everything
echo "  Exporting database..."
docker exec gobd-postgres pg_dump -U gobd gobd_production > database-backup.sql

echo "  Creating docker-compose.yml..."
cat > docker-compose.yml << 'COMPOSE'
version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    container_name: gobd-postgres
    environment:
      POSTGRES_DB: gobd_production
      POSTGRES_USER: gobd
      POSTGRES_PASSWORD: gobd_secure_2026
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    restart: always

  redis:
    image: redis:7-alpine
    container_name: gobd-redis
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    restart: always

  invoice-service:
    build: ./invoice-service
    container_name: gobd-invoice
    ports:
      - "8000:8000"
    depends_on:
      - postgres
      - redis
    restart: always

  api:
    build: ./nodejs-api
    container_name: gobd-api
    ports:
      - "3000:3000"
    depends_on:
      - postgres
      - redis
    restart: always

  frontend:
    image: nginx:alpine
    container_name: gobd-frontend
    volumes:
      - ./frontend:/usr/share/nginx/html:ro
    ports:
      - "8080:80"
    restart: always

volumes:
  postgres_data:
  redis_data:
COMPOSE

echo "  Copying source files..."
cp -r ../invoice-service .
cp -r ../nodejs-api .
cp -r ../frontend .
cp -r ../scripts .

echo "  Creating README..."
cat > DEPLOY.md << 'DEPLOY'
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
DEPLOY

cd ..
tar -czf deployment.tar.gz deployment/

echo "✅ Deployment package created: deployment.tar.gz"
ls -lh deployment.tar.gz
