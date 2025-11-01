#!/usr/bin/env node

/**
 * Post-build script for Render deployment
 * Runs Prisma migrations after the build
 */

const { execSync } = require('child_process');

console.log('🚀 Running post-build tasks...');

try {
  // Generate Prisma Client
  console.log('📦 Generating Prisma Client...');
  execSync('npx prisma generate', { stdio: 'inherit' });

  // Run database migrations (only in production)
  if (process.env.NODE_ENV === 'production' && process.env.DATABASE_URL) {
    console.log('🔄 Running database migrations...');
    execSync('npx prisma migrate deploy', { stdio: 'inherit' });
    
    console.log('✅ Database migrations completed successfully!');
  } else {
    console.log('⚠️  Skipping migrations (not in production or DATABASE_URL not set)');
  }

  console.log('✅ Post-build tasks completed!');
} catch (error) {
  console.error('❌ Post-build failed:', error.message);
  process.exit(1);
}
