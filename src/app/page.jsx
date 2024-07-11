'use client';

import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return <div>
        <button type="button" onClick={() => router.push('/about')}>about</button>
        <button type="button" onClick={() => router.push('/newpage')}>newpage</button>
        <button type="button" onClick={() => router.push('/(auth)/login')}>login</button>
        <button type="button" onClick={() => router.push('/(auth)/register')}>register</button>
    </div>
}