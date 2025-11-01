import Link from 'next/link'
import { Hero } from '@/components/home/Hero'
import { Features } from '@/components/home/Features'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { Mission } from '@/components/home/Mission'
import { Testimonials } from '@/components/home/Testimonials'
import { Newsletter } from '@/components/home/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedProducts />
      <Mission />
      <Testimonials />
      <Newsletter />
    </>
  )
}
