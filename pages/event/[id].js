/* @format */
import Link from 'next/link'
import Head from 'next/head'
import { client } from 'libs/client.js'
import dayjs from 'dayjs'
import styles from 'styles/Event.module.scss'

export default function Event({ event }) {
    return (
        <>
            <Head>
                <title>{event.title} | BRANZコンシェルジュ</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="container stack-lg">
                <div className={`${styles.eventBox} stack`}>
                    {event.date && <p className={styles.eventDate}>{dayjs(event.date).format('M月DD日(ddd)')}</p>}
                    {event.monthly && <p className={styles.eventDate}>{event.monthly}</p>}
                    <h1 className={styles.eventName}>{event.title}</h1>
                    {event.categories && event.categories.length > 0 && (
                        <p className={styles.categories}>
                            {event.categories.map((cat, index) => (
                                <span key={index}>{cat.name}</span>
                            ))}
                        </p>
                    )}
                    {event.description && (
                        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: event.description }}></div>
                    )}

                    {event.summary && <h2 className={styles.summaryTitle}>開催概要</h2>}
                    {event.summary && (
                        <div className={styles.table} dangerouslySetInnerHTML={{ __html: event.summary }}></div>
                    )}
                </div>
                <Link href="/" className={styles.backBtn}>
                    戻る
                </Link>
            </main>
        </>
    )
}

export async function getStaticPaths() {
    const data = await client.get({ endpoint: 'event' })
    const paths = data.contents.map((content) => ({
        params: { id: content.id },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const data = await client.get({ endpoint: 'event', contentId: params.id })

    return {
        props: {
            event: data,
        },
    }
}
