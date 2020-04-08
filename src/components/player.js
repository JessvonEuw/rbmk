import React, { useState } from "react"
import { Slider, FormattedTime } from "react-player-controls"
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

  // Value
  const seekStart = () => {}

  // Move the slider while dragging
  const seekChange = changeValue => {
    setSeekValue(changeValue)
  }

  // Move the slider while dragging
  const seekEnd = endValue => {
    song.pause()
    song.currentTime = endValue * songDuration
    song.play()
  }

  // Plays or pauses the chosen song
  const onPlaybackChange = () => {
    console.log("Playback change")
    console.log(song.paused)
    console.log(song)

    if (song.paused) {
      console.log("Playing...")
      song.play()
      setButtonImg(pauseImg)
    } else {
      console.log("Paused.")
      song.pause()
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

  // A colored bar that will represent the current value
  const SliderBar = () => (
    <div
      style={Object.assign(
        {},
        {
          position: "absolute",
          background: "#5d59b7",
          borderRadius: 4,
        },
        {
          top: 0,
          bottom: 0,
          left: 0,
          width: `${seekValue * 100}%`,
        }
      )}
      id="seekBar"
    />
  )

  // A handle to indicate the current value
  const SliderHandle = ({ style }) => (
    <div
      style={Object.assign(
        {},
        {
          position: "absolute",
          width: 16,
          height: 16,
          background: "#5d59b7",
          borderRadius: "100%",
          transform: "scale(1)",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.3)",
          },
        },
        {
          top: 0,
          left: `${seekValue * 100}%`,
          marginTop: -4,
          marginLeft: -8,
        },
        style
      )}
      id="seekBarHandle"
    />
  )

  return (
    <div className={playerStyles.player}>
      <div>
        <button
          className={playerStyles.button}
          onClick={() => onPlaybackChange()}
        >
          <img src={buttonImg} alt="Play/Pause" />
        </button>
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
          <SliderBar className={playerStyles.seekBarFill} />
          <SliderHandle className={playerStyles.seekBarHandle} />
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
