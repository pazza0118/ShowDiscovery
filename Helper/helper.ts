export type Event = {
  eventName: string;
  callback: () => void;
};
export interface MovieProps {
  title: string;
  date: string;
  poster_path: string;
}
