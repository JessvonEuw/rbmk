import React, { useState } from "react"
import { Button, Slider, FormattedTime } from "react-player-controls"
import playerStyles from "./player.module.css"

import playImg from "../images/play.svg"
import pauseImg from "../images/pause.svg"
import songFilename from "../media/current_song.mp3"

const MediaPlayer = ({ isEnabled }) => {
  const [seekValue, setSeekValue] = useState(0)
  const [songDuration, setSongDuration] = useState()
  const [songCurrentTime, setSongCurrentTime] = useState(0)
  const [buttonImg, setButtonImg] = useState(playImg)

  // Setting up the song variables
  const currentSong = {
    title: '"Doom Days" Cover',
    filename: songFilename,
  }

  let song = new Audio()
  song.src = currentSong.filename

  // Nothing needs to happen when the seeking starts
  const seekStart = () => {}

  // Move the slider while dragging
  const seekChange = changeValue => {
    setSeekValue(changeValue)
  }

  // Move the slider while dragging
  const seekEnd = endValue => {
    //song.pause()
    song.currentTime = endValue * songDuration
    //song.play()
  }

  // Plays or pauses the chosen song
  const onPlaybackChange = () => {
    //console.log("Playback change")
    //console.log(song.paused)
    //console.log(song)

    if (song.paused) {
      //console.log("Playing...")
      song.play()
      //console.log(song.paused)
      setButtonImg(pauseImg)
    } else {
      //console.log("Paused.")
      song.pause()
      //console.log(song.paused)
      setButtonImg(playImg)
    }
  }

  // Fires when the song's metadata is loaded (i.e. when the page loads)
  song.addEventListener("loadedmetadata", function() {
    setSongDuration(song.duration)
  })

  // Fires whenever the current time changes on the audio file (i.e. while it's playing)
  song.addEventListener("timeupdate", function() {
    setSongCurrentTime(song.currentTime)
    console.log(song.currentTime)

    // While the song is playing, increment the seek bar position
    if (song.currentTime < songDuration) {
      setSeekValue(song.currentTime / songDuration)
    }

    // At the end of the song, put the seek bar back at the beginning and set the song
    // time back to zero
    else {
      setSeekValue(0)
      song.currentTime = 0
      setButtonImg(playImg)
    }
    console.log()
  })

  return (
    <div className={playerStyles.player}>
      <div>
        <Button className={playerStyles.button} onClick={onPlaybackChange}>
          <img src={buttonImg} alt="Play/Pause" />
        </Button>
      </div>
      <div className={playerStyles.songContainer}>
        <div className={playerStyles.songTitle}>{currentSong.title}</div>
        <Slider
          isEnabled={isEnabled}
          onChangeStart={seekStart}
          onChange={seekChange}
          onChangeEnd={seekEnd}
          className={playerStyles.seekBar}
        >
          <div
            className={playerStyles.seekBarFill}
            style={Object.assign({
              width: `${seekValue * 100}%`,
            })}
          ></div>
          <div
            className={playerStyles.seekBarHandle}
            style={Object.assign({
              left: `${seekValue * 100}%`,
            })}
          ></div>
        </Slider>
        <div className={playerStyles.seekBarTimingContainer}>
          <div className={playerStyles.seekBarCurrent}>
            <FormattedTime numSeconds={songCurrentTime} />
          </div>
          <div className={playerStyles.seekBarDuration}>
            <FormattedTime numSeconds={songDuration} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaPlayer
