import {
	AiFillGithub,
	AiFillTwitterCircle,
	AiFillLinkedin,
	AiFillYoutube,
	AiFillInstagram,
	AiOutlineArrowDown,
	AiOutlineClockCircle,
	AiTwotoneHourglass,
	AiOutlineHome,
} from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import { BsFillPencilFill, BsSunFill, BsInboxesFill } from "react-icons/bs";
import { CiDark } from "react-icons/ci";
import { SiHashnode } from "react-icons/si";
import { MdOutlineArticle } from "react-icons/md";

export const DownArrow = () => {
	return (
		<AiOutlineArrowDown
			size={20}
			className="w-full text-center mx-auto dark:text-gray-400 my-2"
		/>
	);
};

export const EmptyIcon = () => {
	return (
		<BsInboxesFill
			size={36}
			className="w-full text-center mx-auto dark:text-gray-400 my-2"
		/>
	);
};

export const HomeIcon = () => {
	return <AiOutlineHome size={18} className="dark:text-gray-400" />;
};
export const BlogsIcon = () => {
	return <MdOutlineArticle size={18} className="dark:text-gray-400" />;
};
export const WriteIcon = () => {
	return <BsFillPencilFill size={18} className="dark:text-gray-400" />;
};
export const DateIcon = () => {
	return <AiOutlineClockCircle size={18} className="dark:text-gray-400 my-2" />;
};

export const LightThemeIcon = () => {
	return <BsSunFill size={18} className="text-gray-400" />;
};

export const DarkThemeIcon = () => {
	return <CiDark size={18} className="text-gray-900" />;
};

export const TwitterIcon = () => {
	return (
		<AiFillTwitterCircle
			size={18}
			className="dark:text-gray-400 text-gray-400"
		/>
	);
};

export const GithubIcon = () => {
	return (
		<AiFillGithub size={18} className="dark:text-gray-400 text-gray-400" />
	);
};
export const LinkedInIcon = () => {
	return (
		<AiFillLinkedin size={18} className="dark:text-gray-400 text-gray-400" />
	);
};
export const DevToIcon = () => {
	return <FaDev size={18} className="dark:text-gray-400 text-gray-400" />;
};

export const YoutubeIcon = () => {
	return (
		<AiFillYoutube size={18} className="dark:text-gray-400 text-gray-400" />
	);
};

export const HashnodeIcon = () => {
	return <SiHashnode size={18} className="dark:text-gray-400 text-gray-400" />;
};

export const InstagramIcon = () => {
	return (
		<AiFillInstagram size={18} className="dark:text-gray-400 text-gray-400" />
	);
};

export const ReadingTime = () => {
	return <AiTwotoneHourglass size={18} className="dark:text-gray-400" />;
};
const RenderIconComponent = ({ name }) => {
	if (name === "Twitter") {
		return <TwitterIcon />;
	} else if (name === "Github") return <GithubIcon />;
	else if (name === "LinkedIn") return <LinkedInIcon />;
	else if (name === "DevTo") return <DevToIcon />;
	else if (name === "Youtube") return <YoutubeIcon />;
	else if (name === "Hashnode") return <HashnodeIcon />;
	else if (name === "Instagram") return <InstagramIcon />;
	else if (name === "Date") return <DateIcon />;
	else return null;
};
export default RenderIconComponent;
