// home screen
import Logo from "./home/logo/logo";
import Welcome from "./home/welcome/welcome";

// Sign up and Sign In
import SignUp from "./sign-up/sign-up";
import Login from "./login/login";


 // Dashboard screen
 import { default as DashboardSummary } from "./dashboard/summary/summary";
 import { default as DashboardSearchButton } from "./dashboard/search/search";
 import { default as DashboardUpcomingEvent } from "./dashboard/upcoming/upcoming";

 
 import EventList from "./event-list/event-list";
 import EventDetails from "./event-details/event-details";
 import TicketPage from "./ticket/ticket";
 import TicketQRCode from "./ticket-qrcode/ticket-qrcode";
 
 
// common
 import Footer from "./common/footer/footer";
 import Header from "./common/header/header";
 import ModalMessage from "./common/modal/modal";
export {
  Logo,
  Welcome,
  SignUp,
  Login,
  Footer,
  Header,
  DashboardSummary,
  DashboardSearchButton,
  DashboardUpcomingEvent,
  EventList,
  EventDetails,
  ModalMessage,
  TicketPage,
  TicketQRCode
};
