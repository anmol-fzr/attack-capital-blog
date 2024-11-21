type ICreds = {
  token: string | null;
  isLogin: boolean;
  email: string;
};

type IAuthStoreData = {
  creds: ICreds;
};

type IAuthStoreActions = {
  resetCreds: () => void;
  updateCreds: (creds: Partial<ICreds>) => void;
};

type IAuthStore = IAuthStoreData & IAuthStoreActions;

export type { ICreds, IAuthStore };
