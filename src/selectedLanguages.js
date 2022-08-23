import { memo } from 'react';

const SelectedLanguages =
	/*memo(*/
	(props) => {
		const languages = ['All', 'JavaScript', 'CSS', 'Python', 'Java', 'Ruby'];

		return (
			<ul className='languages'>
				{languages.map((lang, index) => (
					<li
						key={index}
						style={lang === props.selectedLanguage ? { color: '#d0021b' } : {}}
						onClick={
							!props.isDisabled
								? () => props.selectedLanguageHandler(lang)
								: null
						}
					>
						{lang}
					</li>
				))}
			</ul>
		);
	};
/*(prevProps, nextProps) => {
		return prevProps.selectedLanguage === nextProps.selectedLanguage;
	}
);
*/
export default SelectedLanguages;
