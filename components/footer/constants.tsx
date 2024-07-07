import React from 'react';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

interface Social {
    icon: React.ReactNode | string;
    link: string;
}

export const socials: Social[] = [
    {
        icon:  <TelegramIcon />,
        link: "https://www.telegram.com"
    },
    {
        icon:  <TwitterIcon />,
        link: "https://www.twitter.com"
    },
    {
        icon:  <YouTubeIcon />,
        link: "https://www.youtube.com"
    },
];