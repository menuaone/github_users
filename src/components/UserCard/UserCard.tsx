import UserInfo from 'components/UserInfo/UserInfo';
import styles from './UserCard.module.scss';
import UserStat from 'components/UserStat/UserStat';
import UserTitle from 'components/UserTitle/UserTitle';
import { LocalGitHubUser } from 'types';

export interface UserCardProps extends LocalGitHubUser {}

const UserCard = (props: UserCardProps) => {
    return (
        <div className={styles.userCard}>
            <img
                src={props.avatar}
                alt={props.name}
                className={styles.avatar}
            />

            <UserTitle
                name={props.name}
                login={props.login}
                created={props.created}
            />

            <p className={`${styles.bio}${props.bio ? '' : `${styles.empty}`}`}>
                {props.bio || 'This profile has no bio'}
            </p>

            <UserStat
                repos={props.repos}
                followers={props.followers}
                following={props.following}
            />

            <UserInfo
                blog={props.blog}
                company={props.company}
                location={props.location}
                twitter={props.twitter}
            />
        </div>
    );
};

export default UserCard;
