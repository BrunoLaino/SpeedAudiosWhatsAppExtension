const interval = setInterval(() => {
  const header = document.querySelector('._3auIg')

  if (header) {
    console.log(header)
    clearInterval(interval)

    const button = document.createElement('button')
    button.innerHTML = '2x'
    button.classList.add('twoTimesButtonOff')
    header.appendChild(button)

    document.addEventListener('mousemove', () => {
      if (button.classList.contains('twoTimesButtonOn')) {
        twoTimesSpeed()
      } else {
        oneTimeSpeed()
      }
    })

    button.addEventListener('click', () => {
      button.classList.toggle('twoTimesButtonOn') // troca a classe(fixa) para essa que passei e vice versa
      if (button.classList.contains('twoTimesButtonOff')) {
        twoTimesSpeed()
      } else {
        oneTimeSpeed()
      }
    })

    function twoTimesSpeed () {
      audios = document.querySelectorAll('audio')
      console.log(audios)
      audios.forEach((audio) => {
        console.log(audio)
        audio.playbackRate = 2
      })
    }

    function oneTimeSpeed () {
      audios = document.querySelectorAll('audio')
      console.log(audios)
      audios.forEach((audio) => {
        console.log(audio)
        audio.playbackRate = 1
      })
    }
  }
}, 1000)
