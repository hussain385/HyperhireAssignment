export interface IAccount {
  competition: ICompetition | undefined;
  email: string;
  confirm_password: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface ICompetition {
  title: string;
  start_date: string;
  end_date: string;
  address: string;
}
