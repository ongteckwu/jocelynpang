# Jocelyn Pang - Personal Brand Website

A warm minimalist personal brand website for a digital commerce strategist-operator specializing in Southeast Asia.

## Adding Images

Place your images in the `public/images/` folder:

```
public/
  images/
    portrait.jpg      # Primary portrait (Hero section)
    speaking.jpg      # Speaking photo (Speaking section, optional)
    work-1.jpg        # Selected Work image 1
    work-2.jpg        # Selected Work image 2
    work-3.jpg        # Selected Work image 3
```

### Image Specifications

| Image | Recommended Size | Aspect Ratio | Usage |
|-------|------------------|--------------|-------|
| `portrait.jpg` | 800x1000px | 4:5 (mobile) / 1:1 (desktop) | Hero section |
| `speaking.jpg` | 1200x675px | 16:9 | Speaking section |
| `work-1.jpg` | 800x600px | 4:3 | Selected Work card 1 |
| `work-2.jpg` | 800x600px | 4:3 | Selected Work card 2 |
| `work-3.jpg` | 800x600px | 4:3 | Selected Work card 3 |

### Image Guidelines

- Use warm, clean, confident imagery (not stock photography)
- Prefer natural lighting and warm tones to match the site palette
- Portrait should be professional but approachable
- Work images can be abstract/illustrative or real project visuals

### Enabling Images

After adding images, update the components:

**Hero** (`components/sections/Hero.tsx`):
```tsx
import Image from "next/image";
// Replace placeholder div with:
<Image src="/images/portrait.jpg" alt="Jocelyn Pang" fill className="object-cover rounded-[20px]" />
```

**Speaking** (`components/sections/Speaking.tsx`):
```tsx
import Image from "next/image";
// Replace placeholder div with:
<Image src="/images/speaking.jpg" alt="Jocelyn speaking" fill className="object-cover rounded-xl" />
```

**Selected Work** (`components/sections/SelectedWork.tsx`):
```tsx
import Image from "next/image";
// Replace placeholder div with:
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
  <Image src={`/images/work-${index + 1}.jpg`} alt={work.title} fill className="object-cover" />
</div>
```

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
