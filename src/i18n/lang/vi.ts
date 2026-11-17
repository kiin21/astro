import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Trang chủ",
    posts: "Bài viết",
    tags: "Thẻ",
    about: "Giới thiệu",
    archives: "Lưu trữ",
    search: "Tìm kiếm",
  },
  post: {
    publishedAt: "Đăng ngày",
    updatedAt: "Cập nhật",
    sharePostIntro: "Chia sẻ bài viết:",
    sharePostOn: "Chia sẻ bài viết lên {{platform}}",
    sharePostViaEmail: "Chia sẻ bài viết qua email",
    tagLabel: "Thẻ",
    backToTop: "Lên đầu trang",
    tableOfContents: "Mục lục",
    goBack: "Quay lại",
    editPage: "Sửa trang",
    previousPost: "Bài trước",
    nextPost: "Bài sau",
  },
  pagination: {
    prev: "Trước",
    next: "Sau",
    page: "Trang",
  },
  home: {
    socialLinks: "Liên kết",
    featured: "Nổi bật",
    recentPosts: "Bài mới",
    allPosts: "Tất cả bài viết",
  },
  footer: {
    copyright: "Bản quyền",
    allRightsReserved: "Giữ mọi quyền.",
  },
  pages: {
    tagTitle: "Thẻ",
    tagDesc: "Các bài viết gắn thẻ",

    tagsTitle: "Thẻ",
    tagsDesc: "Tất cả thẻ dùng trong bài viết.",

    postsTitle: "Bài viết",
    postsDesc: "Tất cả bài đã đăng.",

    archivesTitle: "Lưu trữ",
    archivesDesc: "Bài viết xếp theo thời gian.",

    searchTitle: "Tìm kiếm",
    searchDesc: "Tìm bài viết ...",
  },
  a11y: {
    skipToContent: "Đến nội dung chính",
    skipTableOfContents: "Bỏ qua mục lục",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
    toggleTheme: "Đổi giao diện sáng/tối",
    searchPlaceholder: "Tìm bài viết...",
    noResults: "Không tìm thấy kết quả",
    goToPreviousPage: "Về trang trước",
    goToNextPage: "Sang trang sau",
  },
  notFound: {
    title: "404",
    message: "Không tìm thấy trang",
    goHome: "Về trang chủ",
  },
} satisfies UIStrings;
