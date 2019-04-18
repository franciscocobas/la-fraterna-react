import React from 'react'

import video from '../assets/La_Fraterna_Web.mp4'

import './HeaderFraterna.scss'

export default function HeaderFraterna(props) {
  return (
    <header>
      <video id='video-cover' class="d-none d-md-inline-block" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src={video} type="video/mp4" />
      </video>
    </header>
  )
}