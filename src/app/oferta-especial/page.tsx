import { SpecialOfferHeader } from '@/components/landing/special-offer-header';
import { SpecialOffer } from '@/components/landing/special-offer';
import { Footer } from '@/components/landing/footer';

export default function SpecialOfferPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SpecialOfferHeader />
      <main className="flex-1">
        <SpecialOffer />
      </main>
      <Footer />
    </div>
  );
}
