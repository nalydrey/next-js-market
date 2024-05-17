import "./ui/globals.css";
import { RootClientLayout } from "./ui/components/Layouts/RootLayout/RootClientLayout";
import { getTreeCategories } from "./lib/api/categoriesApi";




export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   const categoryTree = await getTreeCategories()

  return (
    <html lang="en">
      <body>
        <RootClientLayout
          categories={categoryTree}
        >
          {children}
        </RootClientLayout>
      </body>
    </html>
  );
}
