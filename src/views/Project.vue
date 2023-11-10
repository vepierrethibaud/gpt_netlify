<template>
  <div id="project">
    <nav :class="{ 'scroll': !view.topOfPage}">
      <div class="container">
        <router-link to="/" class="socials project_nav">
          <i class="fa-solid fa-arrow-left-long"></i>
          <p>Retour à l'accueil</p>
        </router-link>

        <div class="links project_nav">
          <p>{{this.project.name}}</p>

          <a v-for="(social, index) in socials" :key="index" :href="this.socials[index].url" target="_blank">
            <i v-if="this.socials[index].name === 'twitch'" class="fa-brands fa-twitch"></i>
            <i v-if="this.socials[index].name === 'twitter'" class="fa-brands fa-twitter"></i>
            <i v-if="this.socials[index].name === 'youtube'" class="fa-brands fa-youtube"></i>
            <i v-if="this.socials[index].name === 'linkedin'" class="fa-brands fa-linkedin-in"></i>
            <i v-if="this.socials[index].name === 'tiktok'" class="fa-brands fa-tiktok"></i>
            <i v-if="this.socials[index].name === 'instagram'" class="fa-brands fa-instagram"></i>
            <i v-if="this.socials[index].name === 'facebook'" class="fa-brands fa-facebook"></i>
          </a>
        </div>

        <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 33.61" style="enable-background:new 0 0 100 33.61;" xml:space="preserve">
          <g>
            <path d="M96.79,19.34v5.52h-1.93v-0.34c0-1.34,0-2.69,0-4.03c0-0.11,0-0.23-0.01-0.34c-0.08-0.78-0.3-1.01-1-1.09
              c-0.77-0.09-1.38,0.22-1.57,0.85c-0.08,0.27-0.12,0.57-0.12,0.85c-0.01,1.35-0.01,2.71-0.01,4.08h-1.9v-7.22h1.81v0.97
              c0.1-0.12,0.14-0.16,0.17-0.2c0.82-1.21,2.92-1.19,3.77-0.47c0.4,0.34,0.63,0.75,0.75,1.25C96.74,19.23,96.77,19.29,96.79,19.34z"
              />
            <path d="M34.02,10.06v1.19h1.59c-0.04,0.19-0.06,0.34-0.11,0.49c-0.24,0.68-0.76,1.05-1.46,1.13c-0.73,0.09-1.32-0.21-1.72-0.83
              c-0.48-0.75-0.52-1.57-0.4-2.42c0.07-0.51,0.26-0.98,0.62-1.36c0.95-0.99,2.67-0.49,2.9,0.53c0.01,0.06,0.1,0.14,0.16,0.14
              c0.45,0.01,0.9,0.01,1.38,0.01c-0.01-0.52-0.19-0.94-0.48-1.31c-0.62-0.78-1.47-1.1-2.44-1.15c-0.65-0.03-1.27,0.07-1.95,0.37
              c0.53-0.89,0.88-1.74,1.11-2.65c0.28-1.12,0.44-2.25,0.22-3.4c-0.08-0.41-0.31-0.67-0.72-0.75C32.5,0.02,32.27-0.01,32.05,0
              c-1.34,0.05-2.61,0.38-3.82,0.95c-1.6,0.74-2.86,1.91-3.99,3.22c-1.17,1.35-2.27,2.76-3.41,4.14c-0.09,0.1-0.2,0.22-0.33,0.25
              c-0.93,0.26-1.87,0.5-2.81,0.74c-0.92,0.23-1.85,0.44-2.53,1.14c-1.02,1.05-2,2.14-2.99,3.22c-0.07,0.08-0.1,0.29-0.05,0.37
              c0.05,0.09,0.24,0.16,0.35,0.15c0.95-0.1,1.91-0.22,2.86-0.33c0.49-0.06,0.97-0.12,1.44-0.18c-0.14,0.36-0.34,0.68-0.37,1.02
              c-0.03,0.33,0.02,0.65-0.37,0.96c0.43,0.35,0.82,0.67,1.19,0.97c-0.39,0.5-0.78,0.9-1.03,1.36c-0.19,0.36-0.45,0.6-0.72,0.86
              c-0.14,0.14-0.28,0.28-0.43,0.4c-0.36,0.29-0.72,0.59-1.1,0.85c-0.12,0.08-0.3,0.06-0.46,0.08c0-0.15-0.05-0.33,0.01-0.46
              c0.26-0.6,0.58-1.19,0.83-1.79c0.12-0.28,0.15-0.6,0.22-0.91c-0.04-0.03-0.07-0.06-0.11-0.08c-0.15,0.06-0.32,0.1-0.45,0.19
              c-0.28,0.22-0.55,0.47-0.81,0.72c-0.4,0.37-0.78,0.76-1.19,1.13c-0.14,0.13-0.31,0.25-0.48,0.34c-0.56,0.28-0.7,0.23-1.03-0.3
              c-1.06-1.7-3.08-2.29-4.89-1.4c-1.12,0.55-1.8,1.5-2.18,2.66c-0.22,0.66-0.53,1.2-1.03,1.69c-0.98,0.96-1.06,2.29-0.26,3.4
              c0.14,0.2,0.14,0.35,0.06,0.56c-0.4,1.08-0.62,2.17-0.46,3.33c0.34,2.56,2.49,4.43,5.07,4.36c1.07-0.03,2.07-0.34,3.02-0.82
              c0.13-0.07,0.34-0.08,0.48-0.04c0.92,0.3,1.78,0.2,2.55-0.38c0.31-0.23,0.55-0.56,0.84-0.82c0.25-0.23,0.5-0.46,0.77-0.66
              c0.54-0.4,1.14-0.72,1.63-1.16c1.6-1.44,1.74-3.84,0.31-5.39c-0.33-0.36-0.39-0.7-0.28-1.11c0.09-0.35,0.18-0.7,0.31-1.03
              c0.3-0.77,0.63-1.52,0.94-2.29c0.04-0.1,0.05-0.22,0.07-0.34c-0.03-0.02-0.05-0.04-0.08-0.06c-0.12,0.08-0.27,0.13-0.36,0.23
              c-0.39,0.4-0.76,0.82-1.15,1.21c-0.17,0.17-0.38,0.29-0.57,0.44c-0.02-0.03-0.04-0.05-0.06-0.08c0.9-1.3,1.72-2.66,3-3.69
              c0.28,0.23,0.57,0.48,0.87,0.71c0.08,0.06,0.28,0.1,0.31,0.06c0.2-0.25,0.46-0.22,0.73-0.24c0.18-0.01,0.35-0.11,0.51-0.19
              c0.17-0.09,0.33-0.2,0.51-0.32c0,0.15,0,0.27,0,0.4c-0.05,1.29-0.11,2.58-0.16,3.87c-0.01,0.17-0.03,0.35,0.18,0.45
              c0.22,0.1,0.34-0.06,0.45-0.18c0.86-0.91,1.73-1.81,2.56-2.74c0.53-0.59,0.94-1.26,1.08-2.06c0.2-1.11,0.38-2.22,0.58-3.32
              c0.05-0.27,0.1-0.61,0.28-0.78c1.03-1.03,2.1-2.02,3.16-3.02c0.41-0.38,0.83-0.75,1.16-1.04c-0.19,0.91-0.15,1.95,0.29,2.95
              c0.69,1.55,2.14,2.28,3.75,1.88c0.49-0.12,0.91-0.36,1.26-0.78c0.02,0.25,0.03,0.44,0.05,0.63h1.25v-3.85H34.02z M28.5,6.89
              c-0.92,0-1.65-0.73-1.66-1.65c0-0.93,0.74-1.68,1.67-1.67c0.92,0,1.65,0.73,1.66,1.65C30.17,6.15,29.43,6.9,28.5,6.89z"/>
            <path d="M37.86,17.5c-0.32-1.52-1.49-2.41-3.12-2.42c-1.18,0-2.36,0-3.53,0h-0.69v9.77h2.05v-3.53c0.8,0,1.55,0.01,2.31,0
              C37.21,21.26,38.27,19.43,37.86,17.5z M35.04,19.57c-0.81,0.07-1.62,0.02-2.46,0.02v-2.83c0.85,0.03,1.68,0.01,2.49,0.11
              c0.7,0.09,1.08,0.64,1.07,1.35C36.12,18.96,35.74,19.51,35.04,19.57z"/>
            <path d="M55.58,14.97v3.53c-1.21-1.64-4.01-1.45-4.81,0.86c-0.45,1.28-0.43,2.58,0.08,3.84c0.38,0.93,1.07,1.57,2.08,1.78
              c1.02,0.21,1.93,0.02,2.62-0.84c0,0,0.02,0,0.06,0c0.02,0.23,0.03,0.46,0.05,0.7h1.82v-9.87H55.58z M55.24,22.83
              c-0.63,0.87-1.82,0.88-2.4-0.03c-0.62-0.99-0.58-2.05-0.07-3.07c0.27-0.54,0.81-0.67,1.37-0.66c0.58,0.02,1.03,0.28,1.24,0.82
              c0.17,0.45,0.24,0.93,0.35,1.4C55.68,21.86,55.57,22.38,55.24,22.83z"/>
            <path d="M78.72,20.1c-0.04,0.95,0,1.91-0.13,2.84c-0.18,1.22-1.14,1.98-2.47,2.09c-0.41,0.03-0.83,0.01-1.23-0.07
              c-1.27-0.25-2.07-1.19-2.1-2.52c-0.04-1.56-0.01-3.12-0.02-4.68c0-0.69,0-1.38,0-2.09h1.89v1.93h4.01v1.36H74.7
              c-0.01,0.09-0.03,0.15-0.03,0.2c0,0.97,0,1.94,0,2.91c0,0.15,0.02,0.31,0.06,0.46c0.13,0.56,0.48,0.84,1.03,0.84
              c0.56,0,0.92-0.27,1.05-0.81c0.05-0.21,0.07-0.43,0.07-0.64c0.01-0.6,0-1.2,0-1.82H78.72z"/>
            <path d="M86.32,17.46c-1.24-0.14-2.39,0.13-3.28,1.09c-0.65,0.7-0.89,1.56-0.93,2.5c-0.08,2.1,1.03,3.78,3.26,3.98
              c1.21,0.11,2.33-0.13,3.2-1.06c0.72-0.77,0.95-1.71,0.96-2.73C89.53,19.07,88.38,17.7,86.32,17.46z M87.53,21.99
              c-0.22,1.21-1.35,1.8-2.47,1.3c-0.48-0.22-0.74-0.61-0.86-1.11c-0.15-0.59-0.16-1.19-0.02-1.78c0.21-0.92,0.79-1.38,1.7-1.36
              c0.93,0.02,1.51,0.53,1.67,1.47c0.04,0.24,0.05,0.49,0.08,0.74C87.58,21.5,87.57,21.75,87.53,21.99z"/>
            <path d="M46.7,17.45c-1.44-0.15-2.72,0.23-3.57,1.51c-0.57,0.85-0.69,1.82-0.58,2.82c0.15,1.35,0.74,2.43,2.04,2.94
              c1.41,0.56,2.81,0.5,4.05-0.45c0.98-0.75,1.28-1.83,1.3-2.8C49.95,19.07,48.77,17.66,46.7,17.45z M47.81,22.44
              c-0.26,0.74-0.94,1.08-1.8,0.99c-0.8-0.09-1.3-0.59-1.45-1.46c-0.04-0.24-0.05-0.49-0.08-0.74c-0.01,0-0.03-0.01-0.04-0.01
              c0.1-0.42,0.15-0.86,0.3-1.25c0.26-0.68,0.84-0.9,1.52-0.91c0.74-0.01,1.29,0.32,1.53,0.94C48.1,20.8,48.1,21.63,47.81,22.44z"/>
            <path d="M64.82,17.62v7.23h-1.77v-0.94c-0.1,0.11-0.15,0.17-0.2,0.23c-0.97,1.19-2.94,1.23-3.91,0.08
              c-0.37-0.43-0.58-0.95-0.59-1.5c-0.03-1.69-0.01-3.39-0.01-5.1h1.91v4.22c0,0.07,0,0.14,0,0.22c0.01,0.87,0.36,1.31,1.07,1.37
              c0.83,0.07,1.47-0.41,1.6-1.22c0.03-0.16,0.03-0.33,0.03-0.49c0-1.25,0-2.5,0-3.75v-0.35H64.82z"/>
            <path d="M72.2,22.23c-0.14,1.41-1.2,2.52-2.6,2.75c-1.16,0.19-2.23,0.01-3.09-0.87c-0.46-0.47-0.71-1.06-0.84-1.7
              c-0.17-0.83-0.18-1.66,0-2.49c0.36-1.65,1.53-2.54,3.31-2.5c0.95,0.02,1.82,0.26,2.5,0.97c0.47,0.5,0.69,1.1,0.75,1.8h-1.92
              c-0.02-0.06-0.05-0.13-0.07-0.2c-0.18-0.58-0.61-0.93-1.19-0.96c-0.65-0.04-1.14,0.22-1.36,0.8c-0.37,0.97-0.34,1.95,0.12,2.88
              c0.27,0.54,0.73,0.77,1.26,0.7c0.61-0.08,0.99-0.41,1.17-1c0.02-0.08,0.13-0.19,0.21-0.19C71.02,22.22,71.6,22.23,72.2,22.23z"/>
            <path d="M50.79,10.1c-0.03-0.86-0.52-1.37-1.34-1.57c-0.65-0.16-1.31-0.15-1.96,0.03c-0.86,0.23-1.36,0.93-1.25,1.74h1.25
              c0.28-0.71,0.82-0.96,1.5-0.69c0.22,0.09,0.38,0.23,0.37,0.48c0,0.25-0.15,0.4-0.38,0.47c-0.15,0.04-0.3,0.07-0.45,0.1
              c-0.55,0.13-1.12,0.2-1.65,0.39c-0.68,0.25-0.97,0.96-0.84,1.82c0.09,0.61,0.53,1.02,1.22,1.14c0.78,0.14,1.49,0.01,2.08-0.46
              c0.11,0.14,0.2,0.35,0.31,0.36c0.37,0.04,0.76,0.02,1.12,0.02c0.03-0.05,0.04-0.07,0.04-0.08C50.81,12.6,50.84,11.35,50.79,10.1z
              M49.31,12.25c-0.16,0.52-0.74,0.84-1.31,0.78c-0.26-0.03-0.47-0.12-0.53-0.4c-0.06-0.28-0.03-0.55,0.23-0.72
              c0.16-0.1,0.35-0.17,0.54-0.23c0.37-0.1,0.76-0.19,1.18-0.29C49.38,11.69,49.39,11.99,49.31,12.25z"/>
            <path d="M44.75,12.33c-0.32-0.01-0.62-0.05-0.81,0.32c-0.06,0.12-0.27,0.19-0.42,0.24c-0.8,0.22-1.51-0.37-1.47-1.25h3.68
              c-0.08-0.54-0.12-1.02-0.24-1.49c-0.26-1-0.92-1.57-1.97-1.7c-1.44-0.18-2.59,0.58-2.87,1.95c-0.14,0.67-0.1,1.34,0.08,1.99
              c0.25,0.88,0.82,1.43,1.72,1.59c0.45,0.08,0.93,0.08,1.38,0.02c0.86-0.12,1.59-0.85,1.74-1.66C45.3,12.33,45.02,12.34,44.75,12.33z
              M43.18,9.57c0.6,0.02,1,0.47,1.01,1.14h-2.11C42.12,10,42.56,9.55,43.18,9.57z"/>
            <path d="M42.59,17.36v1.99c-0.25,0-0.51-0.02-0.76,0c-0.97,0.08-1.5,0.64-1.5,1.62c-0.01,1.17,0,2.33,0,3.5v0.36h-1.9v-7.22h1.77
              v0.69c0.35-0.24,0.68-0.56,1.07-0.71C41.66,17.44,42.12,17.44,42.59,17.36z"/>
            <path d="M55.74,12.34c-0.16,1.24-1.2,1.9-2.53,1.7c-1.14-0.17-1.77-0.9-1.77-2.06c0-1.51,0-3.02,0-4.53v-0.3h1.37v1.42h2.96v1.01
              h-2.96c0,0.22,0,0.42,0,0.61c0.01,0.61-0.01,1.22,0.04,1.83c0.04,0.55,0.33,0.81,0.8,0.81c0.45,0,0.73-0.26,0.79-0.79
              c0.04-0.31,0.03-0.62,0.03-0.93c0-0.23,0-0.45,0-0.69h1.29C55.75,11.06,55.82,11.71,55.74,12.34z"/>
            <rect x="79.51" y="17.62" width="1.88" height="7.23"/>
            <path d="M40.62,8.45v1.39c-0.26,0.02-0.52,0.02-0.78,0.07c-0.47,0.08-0.78,0.38-0.81,0.85c-0.05,0.7-0.04,1.4-0.06,2.1
              c-0.01,0.35,0,0.69,0,1.06h-1.41V8.6h1.32v0.47C39.36,8.53,39.94,8.38,40.62,8.45z"/>
            <rect x="79.5" y="14.98" width="1.89" height="1.75"/>
            <path d="M68.91,27.6v2.53h-0.29v-1.74c-0.02,0-0.03,0-0.05-0.01c-0.13,0.58-0.26,1.15-0.39,1.73c-0.25,0.1-0.35,0.01-0.4-0.24
              c-0.08-0.45-0.2-0.9-0.3-1.35c-0.03,0-0.05,0-0.08,0c0,0.46,0,0.93,0,1.39c0,0.21-0.01,0.21-0.28,0.21V27.6
              c0.49-0.08,0.48-0.08,0.58,0.36c0.1,0.46,0.19,0.92,0.34,1.39c0.09-0.46,0.18-0.92,0.28-1.38C68.42,27.52,68.43,27.52,68.91,27.6z"
              />
            <path d="M63.76,27.58h-0.47c-0.15,0.85-0.29,1.69-0.44,2.54h0.27c0.21-0.18-0.04-0.54,0.35-0.57c0.49-0.05,0.24,0.4,0.42,0.58h0.31
              C64.05,29.27,63.91,28.43,63.76,27.58z M63.34,29.24c0.05-0.33,0.1-0.64,0.15-0.96c0.02,0,0.04,0,0.06,0
              c0.05,0.31,0.1,0.61,0.16,0.96H63.34z"/>
            <path d="M59.98,29.82v0.31h-0.93v-2.55h0.89c0.01,0.09,0.01,0.18,0.02,0.29c-0.2,0.01-0.38,0.02-0.57,0.03v0.72
              c0.17,0.01,0.33,0.02,0.51,0.03c0.01,0.09,0.01,0.18,0.02,0.29c-0.18,0.01-0.34,0.02-0.53,0.03v0.85H59.98z"/>
            <path d="M56.11,27.88c-0.15,0.01-0.27,0.02-0.42,0.03v2.22c-0.13,0.01-0.23,0.01-0.35,0.02v-2.23c-0.17-0.01-0.29-0.03-0.42-0.04
              v-0.3h1.18C56.1,27.67,56.11,27.77,56.11,27.88z"/>
            <path d="M18.53,20.32c-0.04,0.23-0.29,0.33-0.49,0.25c-0.15-0.06-0.25-0.26-0.35-0.41c-0.03-0.05,0-0.17,0.04-0.23
              c0.2-0.34,0.42-0.68,0.65-1.06C18.53,19.35,18.62,19.84,18.53,20.32z"/>
            <path d="M15.41,17.88c-0.14,0.32-0.23,0.57-0.37,0.79c-0.06,0.1-0.21,0.21-0.32,0.21c-0.09,0-0.26-0.14-0.27-0.23
              c-0.01-0.13,0.07-0.31,0.17-0.38C14.83,18.13,15.08,18.04,15.41,17.88z"/>
          </g>
        </svg>
      </div>
    </nav>

    <section class="header container" v-if="this.project.logo">
      <img :src="getImgUrl(this.project.header)" :alt="this.project.name">
      <img :src="getImgUrl(this.project.logo)" :alt="this.project.name">
    </section>

    <section class="header container" v-else>
      <img :src="getImgUrl(this.project.header)" :alt="this.project.name" class="single">
    </section>

    <div class="container content">
      <section class="project container">
        <h1>{{this.project.name}}</h1>
        <p class="desc">{{this.project.description}}</p>

        <iframe
            width="560" height="315"
            frameborder="0" 
            :src="this.project.embed_video.url" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
        ></iframe>

        <div class="main_project" v-if="this.project.approach">
          <div>
            <h3>Notre approche</h3>
          </div>

          <p>{{this.project.approach}}</p>
        </div>
      </section>
    </div>

    <div v-if="this.expertise !== null" class="line"></div>
    
    <div class="container content" v-if="this.expertise !== null">
      <section class="skills container">
        <div>
            <h3>Expertise</h3>
          </div>

          <div>
            <p v-for="(expertise, index) in expertise" :key="index"><b>+</b> {{this.expertise[index]}}</p>
          </div>
      </section>
    </div> 

    <div class="line"></div>

    <section class="container content">
      <div class="pictures">
        <img v-for="(picture, index) in pictures" :key="index" :src="getImgUrl(this.pictures[index])" :alt="this.project.name">
      </div>
    </section>

    <GlobalFooter />
  </div>
</template>

<script>

import GlobalFooter from '../components/Footer.vue';

export default {
  name: 'GPTProjet',
  components: {
    GlobalFooter
  },
  data(){
    return{
      view: {
        topOfPage: true
      },
      project: {},
      socials: {},
      expertise: {},
      pictures: {},
    }
  },
  created(){
    window.scrollTo(0, 0);

    let url = window.location.href.split("projet/")[1]
    url = url.replace(/_/g, " ")
    
    if(url === "zenemission"){

      this.zenEmission();
      document.title = "Zen | GreatProd.fr"

    } else if(url === "zenauzenith"){

      this.zenAuZenith();
      document.title = "Zen au Zénith | GreatProd.fr"

    } else if(url === "lesprolongs"){

      this.lesProlongs();
      document.title = "Les Prolong’ | GreatProd.fr"

    } else if(url === "lesgourmands"){

      this.lesGourmands();
      document.title = "Les Gourmands | GreatProd.fr"

    } else if(url === "superfans"){

      this.superFans();
      document.title = "Superfans | GreatProd.fr"

    } else if(url === "flopsinger"){

      this.flopSinger();
      document.title = "Flop Singer | GreatProd.fr"

    } else if(url === "magesport"){

      this.magEsport();
      document.title = "Mag Esport | GreatProd.fr"

    } else if(url === "thesandboxlivestream"){

      this.sandboxLivestream();
      document.title = "The SandBox Livestream | GreatProd.fr"

    }
  },  
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {  
    handleScroll(){
      if(window.pageYOffset>0){
        if(this.view.topOfPage) this.view.topOfPage = false
      } else {
        if(!this.view.topOfPage) this.view.topOfPage = true
      }
    },

    async zenEmission(){

      this.project = {
        name: "Zen",
        header: "projet/zen/flop_city.jpg",
        logo: "projet/zen/logo.png",
        description: "L’émission numéro 1 sur Twitch et Youtube présentée par Maxime Biaggi et Grimkujow un lundi sur deux à 20h00. À chaque show son invité qui vient se prêter au jeu d'une interview rythmée par les happenings et les sketchs. Improvisation, humour absurde, mises en scènes théâtrales, Zen est un late show divertissant où vous (re)découvrez des personnalités d'internet, de l'humour, du cinéma et de la musique sous un angle inédit. L’émission réunit chaque semaine plus de 300 000 spectateurs en direct et génère plus d’un million de vues en replay et des millions d’impressions sur les réseaux sociaux.",
        embed_video: {
          url: "https://www.youtube.com/embed/OqAKDVlB-3k?si=KvL2_xCOY5BJfFuQ",
        },
        approach: "Avec Zen, nous voulions créer un show complètement inédit sur Twitch. Si la plateforme regorge déjà d’émissions, de talkshows et de podcasts de qualité, nous voulions apporter un grain de folie, d’humour et de comédie, un terrain sur lequel peu ont osé s’aventurer en direct. Un pari réussi avec trois saisons qui ont réunit des millions de téléspectateurs et accueilli des invités du calibre de Kev Adams, Squeezie, Mister V, Léna Situations, Bigflo ou encore Fabrice Éboué.",    
      }

      this.socials = [
        {
          name: "twitch",
          url: "https://www.twitch.tv/maximebiaggi",
        },
        {
          name: "youtube",
          url: "https://www.youtube.com/c/Zen%C3%A9mission/featured",
        },
        {
          name: "twitter",
          url: "https://twitter.com/ZenEmission",
        },
      ]

      this.expertise = null

      this.pictures = [
        "projet/zen/©CorentinBoutrige_ZenKevAdams_181.jpg",
        "projet/zen/©CorentinBoutrige_ZenMisterV_023.jpg",
        "projet/zen/Clement_CELLIER_@Cloumzy-ZenEmission_11-71.jpg",
        "projet/zen/A7409312.jpg",

        "projet/zen/A7401448.jpg",
        "projet/zen/Clement_CELLIER_@Cloumzy-ZenS3E01-11.jpg",
        "projet/zen/Clement_CELLIER_@Cloumzy-ZenS3E02-61.jpg",
        "projet/zen/Clement_CELLIER_@Cloumzy-ZenS3E02-96.jpg",
        "projet/zen/Clement_CELLIER_@Cloumzy-ZenS3E03-167.jpg",
      ]
    },

    async zenAuZenith(){

      this.project = {
        name: "Zen au Zénith",
        header: "projet/zen_au_zenith/fond_nologo.jpg",
        logo: "projet/zen_au_zenith/logo.png",
        description: "Pour clôturer la 2ème saison de Zen,nous avons ont vu les choses en grand en réalisant l’épisode final en direct du Zénith de Paris. Squeezie était l’invité de cette émission très spéciale devant plus de 5 700 personnes sur place et plus d’un million en ligne. Sold out en moins de 30 secondes, le show a été marqué par la présence de nombreux guests tels que Bigflo et Oli, Seb La Frite, Djilsi, Théodort, Ziak, Winnterzuko ou encore Keen’V ! Un spectacle écrit, mis en scène et produit par Great Production Team.",
        embed_video: {
          url: "https://www.youtube.com/embed/6_9uMfInpTg?si=pCxq3Dbu5KzsacBH",
        },
        approach: "Avec Zen Au Zénith, nous souhaitions casser la barrière du divertissement sur internet et proposer un véritable spectacle écrit et mis en scène qui mêle interview, représentation théâtrale et prestations musicales. Un succès salué notamment par France Inter, Libération, Le Figaro, Clique, Society et BFM TV.",    
      }

      this.socials = []

      this.expertise = null

      this.pictures = [
        "projet/zen_au_zenith/Clement_CELLIER_@Cloumzy-ZenAuZenith-1.jpg",
        "projet/zen_au_zenith/Clement_CELLIER_@Cloumzy-ZenAuZenith-12.jpg",
        "projet/zen_au_zenith/Clement_CELLIER_@Cloumzy-ZenAuZenith-14.jpg",
        "projet/zen_au_zenith/Clement_CELLIER_@Cloumzy-ZenAuZenith-31.jpg",
        "projet/zen_au_zenith/Clement_CELLIER_@Cloumzy-ZenAuZenith-49.jpg",
        "projet/zen_au_zenith/Clement_CELLIER_@Cloumzy-ZenAuZenith-67-(1).jpg",
        "projet/zen_au_zenith/Clement_CELLIER_@Cloumzy-ZenAuZenith-73-(1).jpg",
        "projet/zen_au_zenith/Clement_CELLIER_@Cloumzy-ZenAuZenith-186.jpg",
        "projet/zen_au_zenith/Clement_CELLIER_@Cloumzy-ZenAuZenith-220.jpg",
      ]
    },

    async lesGourmands(){

      this.project = {
        name: "Les Gourmands",
        header: "projet/les_gourmands/key_visuel.jpg",
        logo: "",
        description: "Maxime Biaggi réunit une belle tablée d’amis créateurs de contenu pour son repas de fêtes chic et choc dans un cadre chaleureux et feutré. Un stream de fin d’année plein de réconfort et d’esprit de Noël qui comporte, réunion de famille oblige, son petit lot de rebondissements. La première édition a eu lieu à l’hôtel Mariott des Champs Élysées et a été vue plus d’un million de fois.",
        embed_video: {
          url: "https://www.youtube.com/embed/HDtC6jtO160?si=bysFQ5kaNVOpjX8Z",
        },
        approach: "",    
      }

      this.socials = []

      this.expertise = null

      this.pictures = [
        "projet/les_gourmands/13.jpg",
        "projet/les_gourmands/14.jpg",
      ]
    },

    async flopSinger(){

      this.project = {
        name: "Flopsinger",
        header: "projet/flop_singer/fond_logo.jpg",
        // logo: "projet/flop_singer/logo.png",
        description: "Dans Flopsinger, huit personnalités costumées et masquées livrent une performance sur une chanson de leur choix. Le jury et les spectateurs devineront-ils qui se cache sous le masque ? Pour sa première édition, le prime événementiel de Grimkujow a rassemblé plus de 50 000 spectateurs en pic, une performance exceptionnelle qui a prouvé la force du concept et l’attrait autour de la première grosse production de Grim.",
        embed_video: {
          url: "https://www.youtube.com/embed/CcB1qYWUr18?si=gm0CFhuIsXZ2iXMR",
        },
        approach: "",    
      }

      this.socials = []

      this.expertise = null

      this.pictures = [
        "projet/flop_singer/A7404470.jpg",
        "projet/flop_singer/A7404701.jpg",
        "projet/flop_singer/A7404893.jpg",
        "projet/flop_singer/A7404986.jpg",
        "projet/flop_singer/A7405182.jpg",
        "projet/flop_singer/A7405199.jpg",
      ]
    },

    async superFans(){

      this.project = {
        name: "Superfans",
        header: "projet/superfans/superfans1.jpg",
        logo: "",
        description: "Un nouveau courant est en train de naître chez les supporters esport. D’abord afficionados, puis fans, les supporters se rassemblent aujourd’hui en groupes d’ultras. Notre mini-série documentaire pour Riot Games a suivi les groupes de supporters de Team Vitality et Karmine Corp qui ont fait le déplacement jusqu’à Berlin pour la première édition des VCT, le championnat européen de Valorant. La série est disponible sur la chaîne YouTube officielle de l’éditeur du jeu.",
        embed_video: {
          url: "https://www.youtube.com/embed/RrU2cc8Ts_8?si=2JdJ7HBISuZYeCfH",
        },
        approach: "",    
      }

      this.socials = []

      this.expertise = [
        "Écriture des reportages",
        "Organisation des tournages",
        "Tournage",
        "Montage",
        "Direction artistique",
        "Motion Design",
        "Sous-titrage",
      ]

      this.pictures = [
      ]
    },

    async lesProlongs(){

      this.project = {
        name: "Les Prolong'",
        header: "projet/prolongs/black.png",
        logo: "",
        description: "Amazon et Prime Vidéo nous on fait confiance pour bâtir leur première émission de football sur Twitch exploitant les droits de la Ligue 1 Uber Eats. Zack Nani, JoelPostbad et Yassencore sont réunis pour exposer leurs avis tranchés et pas toujours très objectifs sur le championnat de France ! Le trio iconique est rejoint par Natacha Basdevant, journaliste sportive, pour former l'équipe type de cette émission en partie inspirée par la mise en scène théâtrale du show espagnol de référence El Chiringuito de Jugones.",
        embed_video: {
          url: "https://www.youtube.com/embed/YsmQEw99G6s?si=K6l9ytduHNxTQ3_P",
        },
        approach: "",    
      }

      this.socials = []

      this.expertise = [
        "Conceptualisation de l’émission en adéquation avec la stratégie de Prime Vidéo",
        "Élaboration du casting",
        "Écriture de l’émission",
        "Mise en scène",
        "Live Production",
        "Brief des équipes de tournage"
      ]

      this.pictures = [
      ]
    },

    async magEsport(){

      this.project = {
        name: "Le MAG Esport",
        header: "projet/mag_esport/MagEsport.png",
        logo: "projet/mag_esport/LOGO_MAGESPORT_00000.png",
        description: "Le rendez-vous 100% esport du vendredi soir en access prime-time sur MGG TV, la première chaîne télévisée entièrement consacrée à l’esport avec 1,1 million de téléspectateurs mensuels. Présenté par Thibault Braccio, Stéphane Cochara et JoelPostbad avec les chroniqueurs MGG, le MAG Esport revient sur toute l’actualité et les résultats de la semaine sur League of Legends, Counter-Strike, Valorant, Fortnite et les autres jeux de référence avec des interviews des meilleurs joueurs mondiaux. Disponible sur Canal+, Amazon Prime, Orange, Bouygues, Free, SFR et Molotov.",
        embed_video: {
          url: "https://www.youtube.com/embed/Q7NTmvppPBU",
        },
        approach: "En plus d’être un rendez-vous apprécié par les fans d’esport, le MAG Esport, avec ses discussions très mouvementées et son large spectre éditorial, est aussi un divertissement pouvant toucher une large audience qui ne connait pas nécessairement la discipline. Ce magazine hebdomadaire de 52 minutes reprend les codes des émissions de sport de référence à la télévision et la radio en les adaptant à la culture internet.",    
      }

      this.expertise = [
        "Présentation et chroniques",
        "Booking des chroniqueurs et invités",
        "Création du conducteur",
        "Production des assets vidéo",
        "Brief des équipes de tournage",
        "Supervision de la post–production",
        "Relais sociaux",
      ]

      this.pictures = [
        "projet/mag_esport/P1044800.jpg",
        "projet/mag_esport/P1044899.jpg",
        "projet/mag_esport/IMG_3738.jpg",
      ]
    },

    async sandboxLivestream(){

      this.project = {
        name: "The Sandbox Livestream",
        header: "projet/sandboxlivestream/bg_sandbox.jpg",
        logo: "projet/sandboxlivestream/sandbox-logo-colour.png",
        description: "Réalisation du pilote The Sandbox Livestream commandé par Webedia. Une émission autour de l’actualité du jeu, du metaverse et des NFT présentée en anglais par Laure Valée et Brandon Smith. Diffusion en direct sur les chaînes Twitch, YouTube et le compte Facebook de The Sandbox.",
        embed_video: {
          url: "https://www.youtube.com/embed/8canppirUiY",
        },
        approach: "The Sandbox souhaitait faire découvrir le Web 3 et le métaverse à une nouvelle audience tout en proposant un show rafraichissant à sa communauté internationale. Remy Bompar, Operations Manager chez The Sandbox et Pandapops étaient en studio pour parler des dernières news du métaverse, de l’évènement NFT NYC qui s’était tenu quelques jours auparavant à Manhattan et de la saison 3 du jeu.",    
      }

      this.expertise = [
        "Écriture de l’émission",
        "Création du conducteur en collaboration avec les équipes de The Sandbox",
        'Écriture et réalisation du reportage “Deep Dive Into Steve Aoki’s Experience"',
        "Direction Artistique",
        "Live Production",
        "Brief des équipes de tournage",
      ]

      this.pictures = [
        "projet/sandboxlivestream/FXtdQysUUAMus8B.jpg",
        "projet/sandboxlivestream/SANDBOX_SCREEN_2.png",
        "projet/sandboxlivestream/Screenshot_5.png",
      ]
    },

    getImgUrl(pic) {
        return require('../assets/img/'+pic)
    },
  }
}
</script>

<style lang="scss">

@import "../styles/components/_nav.scss";
@import "../styles/components/_project.scss";

</style>