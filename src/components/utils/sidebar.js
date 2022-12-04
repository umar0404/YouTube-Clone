import styled from "styled-components";
// import youtube from "../../assets/image/youtube.jpeg";


import { ReactComponent as home } from "../../assets/icon/home.svg";
import { ReactComponent as discover } from "../../assets/icon/discover.svg";
import { ReactComponent as subscriptions } from "../../assets/icon/subscriptions.svg";
import { ReactComponent as bookshelf } from "../../assets/icon/bookshelf.svg";
import { ReactComponent as past } from "../../assets/icon/past.svg";
import { ReactComponent as yourVideo } from "../../assets/icon/yourVideo.svg";
import { ReactComponent as watchLater } from "../../assets/icon/watchLater.svg";
import { ReactComponent as likedVideos } from "../../assets/icon/likedVideos.svg";
import { ReactComponent as downArrow } from "../../assets/icon/downArrow.svg";
import { ReactComponent as setting } from "../../assets/icon/setting.svg";

const Icons = styled.div``;

Icons.Home = styled(home)`
  width: 15px;
  height: 15px;
`;

Icons.Discover = styled(discover)`
  width: 15px;
  height: 15px;
`;

Icons.Subscriptions = styled(subscriptions)`
  width: 15px;
  height: 15px;
`;

Icons.Bookshelf = styled(bookshelf)`
  width: 15px;
  height: 15px;
`;

Icons.Past = styled(past)`
  width: 15px;
  height: 15px;
`;

Icons.YourVideos = styled(yourVideo)`
  width: 15px;
  height: 15px;
`;

Icons.WatchLater = styled(watchLater)`
  width: 15px;
  height: 15px;
`;

Icons.LikedVideos = styled(likedVideos)`
  width: 15px;
  height: 15px;
`;

Icons.DownArrow = styled(downArrow)`
  width: 15px;
  height: 15px;
`;

Icons.Setting = styled(setting)`
  width: 15px;
  height: 15px;
`;

const Picture = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: white;
`;

export const sidebar = [
  {
    id: 1,
    data: [
      { id: 1, title: "Home", icon: Icons.Home },
      { id: 2, title: "Explor", icon: Icons.Discover },
      { id: 3, title: "Subscriptions", icon: Icons.Subscriptions },
    ],
  },

  {
    id: 2,
    data: [
      { id: 1, title: "Library", icon: Icons.Bookshelf },
      { id: 2, title: "History", icon: Icons.Past },
      { id: 3, title: "Your videos", icon: Icons.YourVideos },
      { id: 4, title: "Watch later", icon: Icons.WatchLater },
      { id: 5, title: "Like videos", icon: Icons.LikedVideos },
      { id: 6, title: "Show more", icon: Icons.DownArrow },
    ],
  },

  {
    id: 3,
    title: "Subscriptions",
    data: [
      { id: 1, title: "Abdulloh domla", icon: Picture },
      { id: 2, title: "Shukurullo domla", icon: Picture },
      { id: 3, title: "Solixon domla", icon: Picture },
      { id: 4, title: "Rustamjon domla", icon: Picture },
      { id: 5, title: "Mishary Rashid", icon: Picture },
      { id: 6, title: "Raad Al Kurdi", icon: Picture },
      { id: 7, title: "Shaikh Mansour As-Salimiy", icon: Picture },
      { id: 8, title: "Show 2 more", icon: Icons.DownArrow },
    ],
  },

  {
    id: 4,
    title: "More From YouTube",
    data: [
      { id: 1, title: "YouTube Premium", icon: Icons.Discover },
      { id: 2, title: "Settings", icon: Icons.Setting },
      { id: 3, title: "Help", icon: Picture },
      { id: 4, title: "Report Issue", icon: Picture },
    ],
  },
];
