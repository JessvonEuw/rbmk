import React, { useState, useEffect } from "react"
import { Button, Slider, FormattedTime } from "react-player-controls"
import playerStyles from "./player.module.scss"

import playImg from "../images/play.svg"
import pauseImg from "../images/pause.svg"
import songFilename from "../media/current_song.mp3"

// The audio hook
const useAudio = songSrc => {
  const [audio] = useState(new Audio(songSrc))
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState()
  const [seekValue, setSeekValue] = useState(0)

  // Toggle the song between playing and paused
  const toggle = () => setPlaying(!playing)

  // Set a new song current time
  const setSongTime = songTime => {
    audio.currentTime = songTime
  }

  // Toggle the song playing
  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [audio, playing])

  // Fires when the song has ended
  useEffect(() => {
    audio.addEventListener("loadedmetadata", () => setDuration(audio.duration))
    return () => {
      audio.removeEventListener("loadedmetadata", () =>
        setDuration(audio.duration)
      )
    }
  }, [audio, setDuration])

  // Fires whenever the current time changes on the audio file (i.e. while it's playing)
  useEffect(() => {
    audio.addEventListener("timeupdate", function() {
      // While the song is playing, increment the seek bar position
      setCurrentTime(audio.currentTime)
      setSeekValue(audio.currentTime / duration)
    })
  }, [audio, setCurrentTime, duration, setSeekValue])

  // Fires when the song has ended
  useEffect(() => {
    audio.addEventListener("ended", () => {
      setPlaying(false)
      setCurrentTime(0)
      setSeekValue(0)
    })
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false))
    }
  }, [audio, setPlaying])

  return {
    playing,
    toggle,
    setSongTime,
    currentTime,
    setCurrentTime,
    duration,
    seekValue,
    setSeekValue,
  }
}

// The media player component
const MediaPlayer = ({ isEnabled }) => {
  const [buttonImg, setButtonImg] = useState(playImg)

  // Setting up the song variables
  const currentSong = {
    title: "The Storm",
    filename: songFilename,
  }

  const {
    playing,
    toggle,
    setSongTime,
    currentTime,
    setCurrentTime,
    duration,
    seekValue,
    setSeekValue,
  } = useAudio(songFilename)

  // Nothing needs to happen when the seeking starts
  const seekStart = () => {}

  // Move the slider while dragging
  const seekChange = changeValue => {
    setSeekValue(changeValue)
    setCurrentTime(changeValue * duration)
  }

  // Called when the seek slider is released (seeking ends)
  const seekEnd = endValue => {
    setSongTime(endValue * duration)
  }

  // Plays or pauses the chosen song
  const onPlaybackChange = () => {
    if (playing) {
      toggle()
      setButtonImg(playImg)
    } else {
      toggle()
      setButtonImg(pauseImg)
    }
  }

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
            <FormattedTime numSeconds={currentTime} />
          </div>
          <div className={playerStyles.seekBarDuration}>
            <FormattedTime numSeconds={duration} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaPlayer
