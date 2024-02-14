"use client";

import { useRouter } from "next/navigation";

export default function Create() {
    const dbURL = process.env.NEXT_PUBLIC_DB_URL;
    const router = useRouter();

    return(        
        <form onSubmit={
            (e)=>{
                e.preventDefault();
                const title = e.target.title.value;
                const body = e.target.body.value;
                const option = {
                    method: "POST",
                    Headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({title,body})
                }
                fetch(dbURL+"recipe",option)
                .then(resp=>resp.json())
                .then((result)=>{
                    router.push("/");
                    router.refresh();
                });
            }
        }>
            <p>
                레시피 이름: <input type="text" name="title" placeholder="레시피 이름"></input>
            </p>
            <p>
                레시피 설명: <textarea name="body" placeholder="레시피 설명"></textarea>
            </p>
            <p>
                <input type="submit" value="등록"></input>
            </p>           
        </form>
    )
}