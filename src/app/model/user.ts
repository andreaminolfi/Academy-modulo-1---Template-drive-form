export interface User {
  username: string;
  city: string;
  role: 'admin' | 'guest';
}