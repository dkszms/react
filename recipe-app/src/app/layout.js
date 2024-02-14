import Link from "next/link";
import "./globals.css";
import { Control } from "./Control";

export const metadata = {
  title: "Recipe App",
  description: "recipe 만드는 앱",
};
export default async function RootLayout({ children }) {
  const resp = await fetch(process.env.NEXT_PUBLIC_DB_URL+`recipe`,{ cache: "no-cache"});
  const recipes = await resp.json();
  

  return (
    <html>
      <body>
        <Link href={"/"}><h1>레시피 만들기</h1></Link>
        <ol>
          {recipes.map((recipe)=> {
            return(<li><Link href={`/read/${recipe.id}`}>{recipe.title}</Link></li>)
          })}
          
        </ol>
        {children}
        <Control/>
      </body>
    </html>
  );
}
