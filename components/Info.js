/* @format */
import Image from 'next/image'
import styles from 'styles/Info.module.scss'

export default function Info({ detail }) {
    return (
        <div className={`${styles.basicInfo} stack`}>
            <h2 className={styles.title}>{detail.galleryName}</h2>
            <ul className="stack-min">
                <li className="note">定休日：{detail.holiday}</li>
                <li className="note">営業時間：{detail.hours}</li>
                <li className={styles.address}>
                    〒{detail.zip}
                    <br />
                    {detail.address}
                </li>
            </ul>
            <p className={styles.tel}>
                <Image src="/tel-img.svg" alt="" width="41" height="33" />
                {detail.tel}
            </p>
        </div>
    )
}
