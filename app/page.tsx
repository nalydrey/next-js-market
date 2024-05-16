import { Suspense } from 'react';
import { CategorySection } from './ui/components/CategorySection/CategorySection';
import { SkeletonCategorySection } from './ui/components/CategorySection/SkeletonCategorySection';

export default async function Home() {

  return (
    <Suspense fallback={<SkeletonCategorySection/>}>
      <CategorySection/>
    </Suspense>
  );
}
