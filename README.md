# Blog

Blog cá nhân dựng bằng Astro 7 trên theme [AstroPaper](https://github.com/satnaing/astro-paper) (giấy phép MIT, xem `LICENSE`).

## Viết bài mới

1. Sao chép `src/content/posts/hello-world.mdx` và đổi tên. Tên file là đường dẫn của bài: `build-kv-db-p1.mdx` thành `/posts/build-kv-db-p1/`.
2. Sửa frontmatter và nội dung.
3. Đặt ảnh vào `src/assets/images/` và gọi bằng alias: `![mô tả](@/assets/images/ten-bai/anh.png)`.
4. Chạy `pnpm dev` rồi mở `http://localhost:4321/astro`.

Thư mục con trong `src/content/posts/` trở thành một phần của đường dẫn. File hoặc thư mục bắt đầu bằng `_` bị bỏ qua.

## Frontmatter

Schema khai báo trong `src/content.config.ts`. Sai hoặc thiếu trường bắt buộc thì build báo lỗi.

| Trường | Bắt buộc | Ghi chú |
| :-- | :-- | :-- |
| `title` | có | |
| `description` | có | hiện ở danh sách bài và thẻ meta |
| `pubDatetime` | có | ví dụ `2026-11-16T09:00:00+07:00`, không đặt trong ngoặc kép |
| `modDatetime` | không | ngày cập nhật |
| `tags` | không | mặc định `others` |
| `featured` | không | `true` thì hiện ở mục Nổi bật trên trang chủ |
| `draft` | không | `true` thì bài không được hiển thị |
| `ogImage` | không | ảnh xem trước khi chia sẻ; bỏ trống thì tự sinh |
| `hideToc` | không | ẩn mục lục của bài |

Bài có `pubDatetime` ở tương lai không xuất hiện trong bản build cho tới ngày đó.

## Cú pháp hỗ trợ

- Toán (KaTeX): `$...$` trong dòng; công thức đứng riêng đặt giữa hai dòng `$$`.
- Code block: thêm `file=ten-file.rs` để hiện tên file, `// [!code highlight]` để tô sáng dòng.
- Callout kiểu GitHub: `> [!NOTE]`, `> [!TIP]`, `> [!WARNING]`.
- MDX: khai báo hoặc `import` component rồi dùng trong bài.

## Cấu hình

- `astro-paper.config.ts`: tên site, mô tả, tác giả, mạng xã hội, bật tắt tính năng.
- `src/content/pages/about.md`: trang Giới thiệu.
- `src/i18n/lang/vi.ts`: chữ trên giao diện.
- `src/styles/theme.css`: màu sắc.

## Lệnh

| Lệnh | Tác dụng |
| :-- | :-- |
| `pnpm install` | Cài dependencies |
| `pnpm dev` | Chạy dev server tại `localhost:4321/astro` |
| `pnpm build` | Kiểm tra kiểu, build ra `./dist/` và tạo chỉ mục tìm kiếm |
| `pnpm preview` | Xem thử bản build |

Ô tìm kiếm chỉ có kết quả sau khi đã chạy `pnpm build` ít nhất một lần.

## Deploy

Push lên nhánh `master` thì workflow `.github/workflows/deploy.yml` tự build và đưa site lên GitHub Pages tại `https://kiin21.github.io/astro/`. Đường dẫn gốc `/astro` khai báo ở `base` trong `astro.config.ts`.
