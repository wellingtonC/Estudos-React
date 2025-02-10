
import styles from './Avatar.module.css';
import { IAvatarProps } from './IAvatarProps';

export function Avatar({ hasBorder = true, ...props }: IAvatarProps) {
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}
        />
    );
}