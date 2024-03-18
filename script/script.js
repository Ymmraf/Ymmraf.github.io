function displaySection(section) {
    setAllDisplayToNone()
    document.getElementById(section).style.display = 'block'

    const buttonId = `${section}Button`
    clearStyleFromButton()

    document.getElementById(buttonId).className = 'a-selected'
}

function setAllDisplayToNone() {
    document.getElementById('about').style.display = 'none'
    document.getElementById('experience').style.display = 'none'
    document.getElementById('projects').style.display = 'none'
}

function clearStyleFromButton() {
    document.getElementById('aboutButton').className = ''
    document.getElementById('experienceButton').className = ''
    document.getElementById('projectsButton').className = ''
}