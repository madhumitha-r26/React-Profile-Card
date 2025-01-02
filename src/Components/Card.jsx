import React, { Component } from 'react'
import profile from './img/profile_avatar.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

export class Card extends Component {

    icon_style={
        color:"black",
        fontSize:"50px"
    }
   
  render() {
    return (
      <div>
      <div class="flex flex-col bg-white border shadow-sm rounded-xl  w-full max-w-80 pt-50">
      <center>
      <img class="inline-block size-[300px] justify-around rounded-full pt-5" src={profile} alt="Avatar"/>
      </center>
      <div class="p-4 md:p-5">
    <h3 class="text-lg font-bold text-black font-sans">
      Madhumitha
    </h3>
    <h6 class="text-lg font-bold text-black font-sans">
    Upcoming Software Developer
    </h6>
    <p class="mt-1 text-black font-sans">
    Seeking an innovative and challenging environment in a growing organization that provides career growth opportunities.
    </p>
       
       <div class="flex flex-row justify-around pt-5">
        <a href="https://www.linkedin.com/in/madhumitha263-ravichandran/"> <LinkedInIcon style={this.icon_style}></LinkedInIcon> </a>
        <a href="https://github.com/madhumitha-r26"><GitHubIcon style={this.icon_style}></GitHubIcon></a>
        <a href="https://madhumitha26portfolio.netlify.app/"><PublicIcon style={this.icon_style}></PublicIcon></a>
        <a href="mailto:@madhumitharavichandran26@gmail.com"><MailIcon style={this.icon_style}></MailIcon></a>
       </div>

  </div>
</div>
      
      </div>
    )
  }
}

export default Card
