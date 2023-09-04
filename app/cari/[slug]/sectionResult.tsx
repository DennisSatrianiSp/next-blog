import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

interface Props {
    query: string
}

export default function SectionResult({ query }: Props) {
    const { data, error } = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher)
    const loading = !data && !error

    return (
        <div>
            <p>Hasil Pencarian : {query}</p>
            <div>
                {loading && "Sedang Loading....Harap Bersabar"}
                {data && data.items.map((user:any, index:number) => {
                    return <ul key={index}>
                        <li><img src={user.avatar_url} style={{width:"100px"}} alt="" /></li>
                        <li>{user.login}</li>
                        <li><Link href={user.repos_url}>{user.html_url}</Link></li>
                    </ul>
})}
            </div>
        </div>
    )
}
