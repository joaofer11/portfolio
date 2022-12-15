import { useState, useRef, useEffect } from 'react'

export const Intro = () => {
	const canRunEffectRef = useRef(true)
	const [text2, setText] = useState('')
	const text = 'Me Chamo João Fernandes, e sou um desenvolvedor Front-End'
	console.log([...text].reduce((acc, _, index) => index + 8, 0))
	
	useEffect(() => {
		if (canRunEffectRef.current) {
			Array.from(text).forEach((letter, index) => {
				setTimeout(() => {
					setText((prevState) => prevState + letter)
				}, (index + 8) * 100)
			})
		}
		
		return () => canRunEffectRef.current = false
	}, [])
	
	return (
		<>
			<span> Hello world...</span>
			<p>{text2}</p>
		</>
	)
}