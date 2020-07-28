const parentDiv = document.querySelector("body")

const startBtn = document.createElement('button')
startBtn.textContent = 'Start'
startBtn.classList.add('start')
parentDiv.append(startBtn)

const stopBtn = document.createElement('button')
stopBtn.classList.add('stop')
stopBtn.textContent = 'Stop'
parentDiv.append(stopBtn)