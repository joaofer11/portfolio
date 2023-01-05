import * as S from './styles';
import { useContext } from 'react';
import { Banner } from '../../../../../../styles/svg-components/Banner';
import { TypewriterEffectCtx } from '../../../../contexts/TypewriterEffectCtx';

export const IntroSection = () => {
	const currentTextState = useContext(TypewriterEffectCtx);

	return (
		<S.IntroSection>
			<S.Wrapper>
				<span> Hello world...</span>
				<p>{currentTextState}</p>
			</S.Wrapper>
			<Banner />
		</S.IntroSection>
	);
};
