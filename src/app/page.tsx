import { Hero } from '@/components/landing/hero';
import { StickerGallery } from '@/components/landing/sticker-gallery';
import { VSL } from '@/components/landing/vsl';
import { HowItWorks } from '@/components/landing/how-it-works';
import { SocialProof } from '@/components/landing/social-proof';
import { Bonuses } from '@/components/landing/bonuses';
import { Pricing } from '@/components/landing/pricing';
import { FAQ } from '@/components/landing/faq';
import { Footer } from '@/components/landing/footer';
import { Stickers3D } from '@/components/landing/stickers-3d';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <VSL />
        <StickerGallery />
        <Stickers3D />
        <HowItWorks />
        <SocialProof />
        <Bonuses />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
