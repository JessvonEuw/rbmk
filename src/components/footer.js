import React from "react"

import playImg from "../images/Play.png"
import pauseImg from "../images/Pause.png"
import songFilename from "../media/current_song.mp3"

import footerStyles from "./footer.module.css"

const currentSong = {
  title: '"Doom Days" Cover',
  filename: songFilename,
}

const Footer = () => {
  let song = new Audio()

  song.src = currentSong.filename

  // Fires when the song's metadata is loaded (i.e. when the page loads)
  song.addEventListener("loadedmetadata", function() {
    let duration = convertCurrentTime(song.duration)
    let currentTime = convertCurrentTime(song.currentTime)

    document.getElementById("seekBarDuration").innerHTML = duration
    document.getElementById("seekBarCurrent").innerHTML = currentTime
  })

  //Fires whenever the current time changes on the audio file (i.e. while it's playing)
  song.addEventListener("timeupdate", function() {
    let position = song.currentTime / song.duration
    let seekBarFill = document.getElementById("seekBarFill")
    let currentTime = convertCurrentTime(song.currentTime)

    seekBarFill.style.width = position * 100 + "%"
    document.getElementById("seekBarCurrent").innerHTML = currentTime
  })

  // Plays or pauses the song and changes the button image accordingly
  function playOrPauseSong() {
    let imgElement = document.getElementById("buttonImg")

    if (song.paused) {
      song.play()
      imgElement.src = pauseImg
      return
    }
    song.pause()
    imgElement.src = playImg
    return
  }

  // Converts the current playback time format to minutes and seconds
  function convertCurrentTime(time) {
    let currentTime = Math.floor(time)
    let minutes = Math.floor(currentTime / 60)
    let seconds = currentTime - minutes * 60

    if (seconds < 10) {
      seconds = "0" + seconds
    }
    if (minutes < 10) {
      minutes = "0" + minutes
    }

    return minutes + ":" + seconds
  }

  return (
    <footer className={footerStyles.footer}>
      <div>
        <button
          className={footerStyles.button}
          onClick={() => playOrPauseSong()}
        >
          <img src={playImg} alt="Play" id="buttonImg" />
        </button>
      </div>
      <div className={footerStyles.songContainer}>
        <div className={footerStyles.songTitle}>{currentSong.title}</div>
        <div className={footerStyles.seekBar}>
          <div className={footerStyles.seekBarFill} id="seekBarFill"></div>
          <div className={footerStyles.seekBarHandle}></div>
        </div>
        <div className={footerStyles.seekBarTimingContainer}>
          <div
            className={footerStyles.seekBarCurrent}
            id="seekBarCurrent"
          ></div>
          <div
            className={footerStyles.seekBarDuration}
            id="seekBarDuration"
          ></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
