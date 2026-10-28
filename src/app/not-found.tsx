import { ErrorScreen } from '@/components/ui/StateScreens';

export default function NotFound() {
  return <ErrorScreen title="Không tìm thấy trang" message="Đường dẫn bạn truy cập không tồn tại hoặc đã được chuyển." />;
}
