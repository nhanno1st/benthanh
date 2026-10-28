'use client';

import { ErrorScreen } from '@/components/ui/StateScreens';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return <ErrorScreen onRetry={reset} />;
}
