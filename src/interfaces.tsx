interface User {
  id: number;
  name: string;
  email: string;
  links: string[];
  createdAt: number;
}

interface Vote {
  id: number;
  link: LinkProps;
  user: User;
}

export interface LinkProps {
  link: {
    id: string;
    description?: string;
    url?: string;
    postedBy?: User;
    createdAt: number;
    votes: Vote[];
  };
  index: number;
  updateStoreAfterVote?: any;
}

export interface IQuery {
  loading?: any;
  error?: any;
  data?: any;
  subscribeToMore?: any;
}

export interface IClient {
  client: any;
}
