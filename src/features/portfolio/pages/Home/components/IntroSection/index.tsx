import { useState, useRef, useEffect } from 'react'
import * as S from './styles'

export const IntroSection = () => {
	const canRunEffectRef = useRef(true)
	const [text2, setText] = useState('')
	const text = 'Me Chamo João Fernandes, e sou um desenvolvedor Front-End'
	
	useEffect(() => {
		if (canRunEffectRef.current) {
			Array.from(text).forEach((letter, index) => {
				setTimeout(() => {
					setText((prevState) => prevState + letter)
				}, (index + 8) * 100)
			})
		}
		
		return () => {
			canRunEffectRef.current = false
		}
	}, [])
	
	return (
		<S.IntroSection>
			<span> Hello world...</span>
			<p>{text2}</p>
		</S.IntroSection>
	)
}