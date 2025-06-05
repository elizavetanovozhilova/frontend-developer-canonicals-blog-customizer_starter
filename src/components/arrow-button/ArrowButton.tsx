import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

export type OnClick = () => void;

interface PropsArrowButton {
	toggleOpenFn: OnClick;
	openState: boolean;
}

export const ArrowButton = ({ toggleOpenFn, openState }: PropsArrowButton) => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onClick={toggleOpenFn}
			className={clsx({
				[styles.container]: true,
				[styles.container_open]: openState,
			})}>
			<img
				src={arrow}
				alt='иконка стрелки'
				className={clsx({
					[styles.arrow]: true,
					[styles.arrow_open]: openState,
				})}
			/>
		</div>
	);
};