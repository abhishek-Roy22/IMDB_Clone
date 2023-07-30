import {
  MdOutlineLocalMovies,
  MdLaptopChromebook,
  MdOutlineAnimation,
  MdOutlineTheaterComedy,
  MdOutlineFamilyRestroom,
} from 'react-icons/md';
import { AiOutlineStar, AiOutlineHeart } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { FaFantasyFlightGames } from 'react-icons/fa';
import { BsCameraReels } from 'react-icons/bs';
import {
  GiDramaMasks,
  GiEmptyHourglass,
  GiCeremonialMask,
  GiMusicSpell,
  GiBatMask,
  GiMaterialsScience,
  GiPistolGun,
  GiGunRose,
} from 'react-icons/gi';

export const categories = [
  {
    id: 1,
    title: 'Popular',
    icon: <MdOutlineLocalMovies />,
  },
  {
    id: 2,
    title: 'Top Rated',
    icon: <AiOutlineStar />,
  },
  {
    id: 3,
    title: 'Upcomming',
    icon: <MdLaptopChromebook />,
  },
];

export const geners = [
  {
    id: 1,
    title: 'Action',
    icon: <GiGunRose />,
  },
  {
    id: 2,
    title: 'Adventure',
    icon: <BiTime />,
  },
  {
    id: 3,
    title: 'Animation',
    icon: <MdOutlineAnimation />,
  },
  {
    id: 4,
    title: 'Comedy',
    icon: <MdOutlineTheaterComedy />,
  },
  {
    id: 5,
    title: 'Crime',
    icon: <GiPistolGun />,
  },
  {
    id: 6,
    title: 'Documentary',
    icon: <BsCameraReels />,
  },
  {
    id: 7,
    title: 'Drama',
    icon: <GiDramaMasks />,
  },
  {
    id: 8,
    title: 'Family',
    icon: <MdOutlineFamilyRestroom />,
  },
  {
    id: 9,
    title: 'Sci-Fi',
    icon: <GiMaterialsScience />,
  },
  {
    id: 10,
    title: 'Fantasy',
    icon: <FaFantasyFlightGames />,
  },
  {
    id: 11,
    title: 'History',
    icon: <GiEmptyHourglass />,
  },
  {
    id: 12,
    title: 'Horror',
    icon: <GiCeremonialMask />,
  },
  {
    id: 13,
    title: 'Music',
    icon: <GiMusicSpell />,
  },
  {
    id: 14,
    title: 'Mystry',
    icon: <GiBatMask />,
  },
  {
    id: 15,
    title: 'Romance',
    icon: <AiOutlineHeart />,
  },
];
