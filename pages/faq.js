import { useEffect, useState } from 'react';
import Link from '../src/components/Link';
import Head from 'next/head';
export async function getStaticProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faqResponse = await fetch(FAQ_API_URL);
    const faq = await faqResponse.json();
    return {
        props: { faqs: faq }
    }
}
export default function FAQPage({ faqs }) {

    return (
        <div>
            <Head>
                <title>Alura Cases - Páginas de Perguntas FAQ</title>
                <meta name="description" content="Alura Cases" />
            </Head>
            <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
            <Link href="/">
                Ir para a home
            </Link>
            <ul>
                {faqs.map(({ answer, question }) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}