import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  Bars2Icon,
  HomeIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createElement, useContext, useEffect, useState } from "react";
import { authContext } from "../context/AuthProvider";
// profile menu component

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { SignOutUser, user } = useContext(authContext);
  const navigate = useNavigate();

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    SignOutUser()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const profileNavigate = () => {
    return navigate("/my-profile");
  };

  const profileMenuItems = [
    {
      label: "My Profile",
      icon: UserCircleIcon,
      onClick: profileNavigate,
    },
    {
      label: "Edit Profile",
      icon: Cog6ToothIcon,
    },
    {
      label: "Inbox",
      icon: InboxArrowDownIcon,
    },
    {
      label: "Help",
      icon: LifebuoyIcon,
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
      onClick: handleLogout, // Use the function after it's defined
    },
  ];

  
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 scale-125 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={`${
              user.photoURL
                ? user.photoURL
                : "https://i.ibb.co/rHzPb0S/icon-256x256.png"
            }`}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>

      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, onClick }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => {
                closeMenu();
                onClick();
              }}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// nav list component
const navListItems = [
  {
    label: "Home",
    icon: HomeIcon,
    path: "/",
  },
  {
    label: "Account",
    icon: UserCircleIcon,
    path: "/my-profile",
  },
  {
    label: "Services",
    icon: ExclamationCircleIcon,
    path: "/services",
  },
  {
    label: "About Us",
    icon: ExclamationCircleIcon,
    path: "/about",
  },
  {
    label: "Contact Us",
    icon: ExclamationCircleIcon,
    path: "/contact",
  },
];

function NavList() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row   lg:items-center xl:scale-110 ">
      {navListItems.map(({ label, icon, path }) => (
        <Link
          key={label}
          to={path}
          variant="small"
          color="blue-gray"
          duration={500}
          className={`font-normal ${
            path === activePath ? "text-primary" : "text-gray-700"
          } `}
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {createElement(icon, {
              className: `h-[18px] w-[18px] ${
                path === activePath ? "text-primary" : "text-gray-700"
              }`,
            })}{" "}
            {label}
          </MenuItem>
        </Link>
      ))}
    </ul>
  );
}
export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { user, loading } = useContext(authContext);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto p-5 rounded-none shadow-none   lg:pl-6 ">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to={"/"}>
          <Typography
            href="#"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium text-xl text-black"
          >
            Social Event{" "}
            <span className="text-primary text-3xl hover:text-black duration-500">
              {" "}
              Agency
            </span>
          </Typography>
        </Link>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        {loading ? (
          <span className="loading loading-ring loading-md scale-150 mr-5"></span>
        ) : user ? (
          <ProfileMenu />
        ) : (
          <Link to={"/login"}>
            <button className="btn btn-primary">Login</button>
          </Link>
        )}
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
