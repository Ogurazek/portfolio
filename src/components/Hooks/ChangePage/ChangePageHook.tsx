import { useState } from "react"

export default function ChangePageHook() {
    const [stateAboutMe, setStateAboutMe] = useState(true)
    const [stateProyectos, setStateProyectos] = useState(false)
    const [stateSkills, setStateSkills] = useState(false)

    const handleAboutMe = () => {
        setStateAboutMe(true)
        stateProyectos ? setStateProyectos(false) : null
        stateSkills ? setStateSkills(false) : null
    }
    const handleProyectos = () => {
        setStateProyectos(true)
        stateAboutMe ? setStateAboutMe(false) : null
        stateSkills ? setStateSkills(false) : null
    }
    const handleSkills = () => {
        setStateSkills(true)
        stateProyectos ? setStateProyectos(false) : null
        stateAboutMe ? setStateAboutMe(false) : null
    }

    return {
        stateAboutMe,
        handleAboutMe,
        handleSkills,
        handleProyectos,
        stateSkills,
        stateProyectos
    }
}