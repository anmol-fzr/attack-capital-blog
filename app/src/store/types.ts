type InitCreds = {
  isLogin: false;
  token: null;
  email: null;
  userId: null;
};

type StoredCreds = {
  isLogin: true;
  token: string;
  email: string;
  userId: string;
};

type ICreds = Readonly<InitCreds> | StoredCreds;

type IAuthStoreData = {
  creds: ICreds;
};

type IAuthStoreActions = {
  resetCreds: () => void;
  updateCreds: (creds: StoredCreds) => void;
};

type IAuthStore = IAuthStoreData & IAuthStoreActions;

export type { ICreds, IAuthStore };
