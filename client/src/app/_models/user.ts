export interface User {
  username: string;
  token: string;
  photoUrl?: string;
  knownAs: string;
  gender: string;
}

// SAME AS THE LINE ABOVE
// export type User = {
//   username: string;
//   token: string;
// }
