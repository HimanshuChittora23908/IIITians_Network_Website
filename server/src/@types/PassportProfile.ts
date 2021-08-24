import { GithubProfile } from './GithubProfile';
import { LinkedinProfile } from './LinkedinProfile';
import { FacebookProfile } from './FacebookProfile';
import { GoogleProfile } from './GoogleProfile';
import { DiscordProfile } from './DiscordProfile';
import { Profile } from "passport";


export type PassportProfile = Profile | DiscordProfile | GoogleProfile | FacebookProfile | LinkedinProfile | GithubProfile;