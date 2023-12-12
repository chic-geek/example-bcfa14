export type FetchStatus = "idle" | "loading" | "success" | "error" | "empty";

export type SearchResultType = {
  categories: [];
  chains: [];
  closed_bucket: string;
  distance: number;
  fsq_id: string;
  geocodes: object;
  link: string;
  location: {
    address: string;
    country: string;
    cross_street: string;
    formatted_address: string;
    post_town: string;
    postcode: string;
  };
  name: string;
  related_places: object;
  timezone: string;
};