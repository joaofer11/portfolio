import * as S from './styles'
import { useState, useEffect, useRef } from 'react'

export const IntroSection = () => {
	const canRunEffectRef = useRef(true)
	const [currentTextState, setCurrentTextState] = useState('')
	const finalTextState = 'Me Chamo João Fernandes, e sou um desenvolvedor Front-End'
	
	useEffect(() => {
		if (canRunEffectRef.current) {
			Array.from(finalTextState).forEach((letter, index) =>
				setTimeout(
					() => setCurrentTextState((prevState) => prevState + letter), 
					(index + 8) * 100
				)
			)
		}
		
		return () => {
			canRunEffectRef.current = false
		}
	}, [])
	
	return (
		<S.IntroSection>
			<span> Hello world...</span>
			<p>{currentTextState}</p>
		</S.IntroSection>
	)
}