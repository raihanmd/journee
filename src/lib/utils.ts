import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import moment from "moment";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomDate() {
  const randomMonth = Math.floor(Math.random() * 12) + 1;

  const daysInMonth = moment(`${randomMonth}`, 'M').daysInMonth();

  const randomStartDay = Math.floor(Math.random() * (daysInMonth - 10 + 1)) + 1;

  let randomEndDay = randomStartDay + Math.floor(Math.random() * (daysInMonth - randomStartDay + 1));

  if (randomEndDay - randomStartDay < 10) {
    randomEndDay = randomStartDay + 10;
  }

  if (randomEndDay > daysInMonth) {
    randomEndDay = daysInMonth;
  }

  const startDate = moment(`${randomStartDay}-${randomMonth}`, 'D-M');
  const endDate = moment(`${randomEndDay}-${randomMonth}`, 'D-M');


  return `${startDate.format("DD")}-${endDate.format("DD")} ${startDate.format("MMM")}`;
}
