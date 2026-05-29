#!/bin/bash

echo "📦 Exporting GoBD Platform..."

# Create export directory
mkdir -p export
cd export

# Export database
echo "  Exporting database..."
docker exec gobd-postgres pg_dump -U gobd gobd_production > gobd_database.sql

# Export docker images
echo "  Exporting Docker images..."
docker save gobd-postgres gobd-redis gobd-invoice gobd-api gobd-frontend > gobd-images.tar

# Copy source code
echo "  Copying source code..."
cd ..
tar -czf export/gobd-source.tar.gz \
  --exclude='export' \
  --exclude='*.pdf' \
  gobd-platform/

echo "✅ Export complete!"
echo "Files in export/:"
ls -lh export/
