import React from 'react'
import GroupPost from '../components/GroupPost'
import styles from './GroupFeed.css'

export default ({ group }) => {
    console.log(group   )
    return (
        <div className={styles.container}>
            {group.feed.map(post => 
                <GroupPost key={post.id} post={post} />
            )}
        </div>
    )
}