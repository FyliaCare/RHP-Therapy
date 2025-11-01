import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'immune-support' },
      update: {},
      create: {
        name: 'Immune Support',
        slug: 'immune-support',
        description: 'Natural remedies to strengthen your immune system',
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'digestive-health' },
      update: {},
      create: {
        name: 'Digestive Health',
        slug: 'digestive-health',
        description: 'Herbal solutions for optimal digestion',
        image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'anti-inflammatory' },
      update: {},
      create: {
        name: 'Anti-Inflammatory',
        slug: 'anti-inflammatory',
        description: 'Natural anti-inflammatory remedies',
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'energy-vitality' },
      update: {},
      create: {
        name: 'Energy & Vitality',
        slug: 'energy-vitality',
        description: 'Boost your energy and vitality naturally',
        image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=500',
      },
    }),
  ])

  console.log(`Created ${categories.length} categories`)

  // Create products
  const products = await Promise.all([
    prisma.product.upsert({
      where: { slug: 'maeforx-immune-booster' },
      update: {},
      create: {
        name: 'MAEFORX Immune Booster',
        slug: 'maeforx-immune-booster',
        description: 'Premium natural immune system support formula with powerful herbal ingredients. Our flagship product combines the wisdom of traditional phytotherapy with modern scientific research.',
        benefits: [
          'Strengthens immune system naturally',
          'Rich in antioxidants',
          'Supports overall wellness',
          'Enhanced bioavailability',
          'No artificial additives',
        ],
        ingredients: [
          'Echinacea Extract (400mg)',
          'Elderberry (300mg)',
          'Vitamin C (500mg)',
          'Zinc (15mg)',
          'Ginger Root (200mg)',
        ],
        usage: 'Take 2 capsules daily with meals or as directed by your healthcare professional.',
        price: 49.99,
        comparePrice: 69.99,
        images: [
          'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800',
          'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800',
        ],
        stock: 50,
        featured: true,
        categoryId: categories[0].id,
      },
    }),
    prisma.product.upsert({
      where: { slug: 'ginger-root-extract' },
      update: {},
      create: {
        name: 'Ginger Root Extract',
        slug: 'ginger-root-extract',
        description: 'Powerful anti-inflammatory and digestive support from pure ginger. Known for centuries as a healing spice, ginger offers numerous health benefits.',
        benefits: [
          'Supports healthy digestion',
          'Natural anti-inflammatory',
          'Reduces nausea',
          'Supports joint health',
          'Promotes circulation',
        ],
        ingredients: [
          'Organic Ginger Root Extract (500mg)',
          'Ginger Essential Oil (50mg)',
          'Black Pepper Extract (5mg)',
        ],
        usage: 'Take 1-2 capsules daily with water, preferably with food.',
        price: 34.99,
        comparePrice: null,
        images: [
          'https://images.unsplash.com/photo-1615485500181-4908c2d28999?w=800',
        ],
        stock: 35,
        featured: false,
        categoryId: categories[1].id,
      },
    }),
    prisma.product.upsert({
      where: { slug: 'turmeric-supreme' },
      update: {},
      create: {
        name: 'Turmeric Supreme',
        slug: 'turmeric-supreme',
        description: 'High-potency turmeric with enhanced absorption for inflammation support. Our premium formula includes BioPerine for maximum bioavailability.',
        benefits: [
          'Powerful anti-inflammatory',
          'Supports joint health',
          'Promotes brain function',
          'Rich in curcumin',
          'Enhanced with BioPerine',
        ],
        ingredients: [
          'Turmeric Root Extract (95% Curcuminoids) (500mg)',
          'BioPerine Black Pepper Extract (10mg)',
          'Ginger Root (100mg)',
        ],
        usage: 'Take 1 capsule twice daily with meals.',
        price: 44.99,
        comparePrice: null,
        images: [
          'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800',
        ],
        stock: 28,
        featured: true,
        categoryId: categories[2].id,
      },
    }),
    prisma.product.upsert({
      where: { slug: 'herbal-wellness-blend' },
      update: {},
      create: {
        name: 'Herbal Wellness Blend',
        slug: 'herbal-wellness-blend',
        description: 'Complete holistic wellness support formula for daily vitality. A synergistic blend of adaptogenic herbs and nutrients.',
        benefits: [
          'Supports energy levels',
          'Promotes mental clarity',
          'Adaptogenic properties',
          'Stress management',
          'Overall vitality',
        ],
        ingredients: [
          'Ashwagandha Root (300mg)',
          'Rhodiola Rosea (200mg)',
          'Holy Basil (150mg)',
          'Maca Root (200mg)',
          'Schisandra Berry (100mg)',
        ],
        usage: 'Take 2 capsules in the morning with breakfast.',
        price: 39.99,
        comparePrice: 54.99,
        images: [
          'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800',
        ],
        stock: 42,
        featured: true,
        categoryId: categories[3].id,
      },
    }),
    prisma.product.upsert({
      where: { slug: 'echinacea-defense' },
      update: {},
      create: {
        name: 'Echinacea Defense',
        slug: 'echinacea-defense',
        description: 'Natural immune system fortification with premium echinacea. Supports your body\'s natural defenses throughout the year.',
        benefits: [
          'Immune system support',
          'Seasonal wellness',
          'Antioxidant rich',
          'Traditional remedy',
          'Fast-acting formula',
        ],
        ingredients: [
          'Echinacea Purpurea Extract (400mg)',
          'Echinacea Angustifolia (200mg)',
          'Vitamin C (100mg)',
        ],
        usage: 'Take 1 capsule 2-3 times daily at first sign of need.',
        price: 32.99,
        comparePrice: null,
        images: [
          'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800',
        ],
        stock: 60,
        featured: false,
        categoryId: categories[0].id,
      },
    }),
    prisma.product.upsert({
      where: { slug: 'chamomile-calm' },
      update: {},
      create: {
        name: 'Chamomile Calm',
        slug: 'chamomile-calm',
        description: 'Soothing chamomile blend for relaxation and stress relief. Perfect for promoting restful sleep and peaceful moments.',
        benefits: [
          'Promotes relaxation',
          'Supports restful sleep',
          'Calms nervous system',
          'Digestive comfort',
          'Gentle and effective',
        ],
        ingredients: [
          'Chamomile Flower Extract (300mg)',
          'Passionflower (150mg)',
          'Lemon Balm (100mg)',
          'Valerian Root (50mg)',
        ],
        usage: 'Take 1-2 capsules 30-60 minutes before bedtime.',
        price: 29.99,
        comparePrice: 39.99,
        images: [
          'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800',
        ],
        stock: 45,
        featured: false,
        categoryId: categories[3].id,
      },
    }),
  ])

  console.log(`Created ${products.length} products`)

  // Create articles
  const articles = await Promise.all([
    prisma.article.upsert({
      where: { slug: 'ginger-natures-powerful-healer' },
      update: {},
      create: {
        title: 'Ginger: Nature\'s Powerful Healer',
        slug: 'ginger-natures-powerful-healer',
        excerpt: 'Ginger (Zingiber officinale) is one of the most widely used medicinal plants in the world. Known for its warm, spicy flavor and powerful healing properties.',
        content: `Ginger has been used for thousands of years as both a culinary spice and a medicinal herb. This remarkable root offers numerous health benefits...

## Health Benefits of Ginger

1. **Digestive Support**: Ginger is renowned for its ability to ease digestive discomfort
2. **Anti-Inflammatory Properties**: Contains powerful compounds called gingerols
3. **Nausea Relief**: Particularly effective for morning sickness and motion sickness
4. **Pain Management**: May help reduce muscle pain and soreness

## How to Use Ginger

Ginger can be consumed in various forms: fresh, dried, powdered, or as a supplement. For optimal benefits, consider incorporating ginger into your daily routine through teas, smoothies, or supplements.`,
        image: 'https://images.unsplash.com/photo-1615485500181-4908c2d28999?w=800',
        author: 'Dr. Sarah Johnson',
        published: true,
        publishedAt: new Date('2025-09-16'),
      },
    }),
    prisma.article.upsert({
      where: { slug: 'benefits-of-phyto-healing' },
      update: {},
      create: {
        title: 'The Benefits of Phyto Healing',
        slug: 'benefits-of-phyto-healing',
        excerpt: 'Phytotherapy, also known as plant-based healing, is one of the world\'s oldest forms of medicine — and today, it is experiencing a remarkable renaissance.',
        content: `Phytotherapy represents a holistic approach to health and wellness, using plants and plant extracts to prevent and treat various health conditions...

## Why Choose Phytotherapy?

1. **Natural Approach**: Works with your body's natural healing processes
2. **Fewer Side Effects**: Generally gentler than synthetic medications
3. **Holistic Benefits**: Addresses root causes, not just symptoms
4. **Sustainable**: Environmentally friendly and renewable

## Getting Started

Begin your phytotherapy journey by consulting with qualified practitioners and choosing high-quality herbal products from trusted sources.`,
        image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800',
        author: 'Jane Smith',
        published: true,
        publishedAt: new Date('2025-08-28'),
      },
    }),
  ])

  console.log(`Created ${articles.length} articles`)

  console.log('Database seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
