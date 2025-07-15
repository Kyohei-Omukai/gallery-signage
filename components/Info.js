/* @format */
import Image from 'next/image'
import styles from 'styles/Info.module.scss'

export default function Info({ detail }) {
    const formattedHoliday = '定休日：' + detail.holiday.replace(/\n/g, '<br>')
    const formattedHour = '営業時間：' + detail.hours.replace(/\n/g, '<br>')

    return (
        <div className={styles.basicInfo}>
            <div className="stack">
                <h2 className={styles.title}>{detail.galleryName}</h2>
                <p className={styles.address}>
                    〒{detail.zip}
                    <br />
                    {detail.address}
                </p>
            </div>
            <div className="stack">
                <p className={styles.tel}>
                    <Image src="/tel-img.svg" alt="" width="41" height="33" />
                    {detail.tel}
                </p>
                <ul className="stack-min">
                    <li className="note" dangerouslySetInnerHTML={{ __html: formattedHoliday }}></li>
                    <li className="note" dangerouslySetInnerHTML={{ __html: formattedHour }}></li>
                </ul>
            </div>
        </div>
    )
}
