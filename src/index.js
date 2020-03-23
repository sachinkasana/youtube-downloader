const fs = require('fs')
const youtubedl = require('youtube-dl')
const express = require('express');
const path = require('path');

const app =express();


app.get('/', (req,res)=>{
    res.status(200).send('hello world')
})
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
})
 
// const url = 'https://www.youtube.com/watch?v=Csqbs61RL7Q';
// const video = youtubedl(url,
//   // Optional arguments passed to youtube-dl.
//   ['--format=18'],
//   // Additional options can be given for calling `child_process.execFile()`.
//   { cwd: __dirname })

//   const options = ['--username=user', '--password=hunter2']
 
// youtubedl.getInfo(url, options, function(err, info) {
//   if (err) throw err
 
//   console.log('id:', info.id)
//   console.log('title:', info.title)
//   console.log('url:', info.url)
//   console.log('thumbnail:', info.thumbnail)
//   console.log('description:', info.description)
//   console.log('filename:', info._filename)
//   console.log('format id:', info.format_id)
// })
 
// // Will be called when the download starts.
// video.on('info', function(info) {
//   console.log('Download started')
//   console.log('filename: ' + info._filename)
//   console.log('size: ' + info.size)
// })
//  try{
//     video.pipe(fs.createWriteStream('myvideo.mp4'))
//  }
//  catch(error){
//      console.log(error)
//  }
