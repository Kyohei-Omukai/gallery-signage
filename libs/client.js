/* @format */

// libs/client.js
import { createClient } from 'microcms-js-sdk'

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}

if (!process.env.MICROCMS_API_KEY) {
    throw new Error('MICROCMS_API_KEY is required')
}

// Client SDKの初期化を行う
export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
})

//すべての記事データを取得する関数
export async function getAllEvents(limit = 100) {
    try {
        const posts = await client.get({
            endpoint: 'event',
            queries: { fields: 'id,title,date,categories', orders: '-publishDate', limit: limit },
        })

        return posts.contents
    } catch (err) {
        console.log('-- getAllEvents --')
        console.log(err)
    }
}
