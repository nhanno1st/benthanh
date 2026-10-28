import Skeleton from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <div className="container-page space-y-4 pb-16 pt-40" role="status" aria-label="Đang tải">
      <Skeleton className="h-12 w-1/3" />
      <Skeleton className="h-64 w-full" />
      <Skeleton className="h-6 w-2/3" />
    </div>
  );
}
