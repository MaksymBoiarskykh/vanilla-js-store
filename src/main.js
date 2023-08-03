import { createRequest } from "./components/createRequest.js";
import "./style/style.scss";

const categories = document.querySelector(".navigation__list");
createRequest(categories);
