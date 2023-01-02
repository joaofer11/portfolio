import * as S from './styles'
import { useEffect, useRef, useContext } from 'react'
import { TypewriterEffectCtx } from '../../../../contexts/TypewriterEffectCtx'

export const IntroSection = () => {
	const currentTextState = useContext(TypewriterEffectCtx)
	
	return (
		<S.IntroSection>
			<span> Hello world...</span>
			<p>{currentTextState}</p>
		</S.IntroSection>
	)
}