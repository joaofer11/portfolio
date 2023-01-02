import { useState, useEffect, useRef, createContext, ReactNode } from 'react'

interface ITypewriterEffectCtxProviderProps { 
	children: ReactNode;
}

export const TypewriterEffectCtx = createContext('')

export const TypewriterEffectCtxProvider = ({ 
	children
}: ITypewriterEffectCtxProviderProps) => {
	const finalTextState = 'Me Chamo João Fernandes, e sou um desenvolvedor Front-End'
	
	const canRunEffectRef = useRef(true)
	const finalTextStateAsArr = useRef([...finalTextState])
	const [currentTextState, setCurrentTextState] = useState('')
	
	useEffect(() => {
		if (canRunEffectRef.current) {
			finalTextStateAsArr.current.forEach((letter, index) =>
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
		<TypewriterEffectCtx.Provider 
			value={currentTextState}
		>
			{children}
		</TypewriterEffectCtx.Provider>
	)
}