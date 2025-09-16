export const ApiRute = {
  admin: {
    login: "/admin/login",
    getadmindetail: "/admin/get-details",
    updatePRofule: "/admin/profile-update",
    adminbanner: "/banner/admindashboardbanner",
    loginbanner: "/banner/logindashboardbanner",
    updateAdmin: "/admin/update-details",
    getadminBanner: "/admin/getadminBanner",
    requestOtp: "/admin/request-otp",
    verifyOtp: "/admin/verify-otp",
    changepassword: "/admin/change-password",
  },
  currentImage: {
    upload: "/banner/upload",
    getbanner: "/banner",
    delete: "/banner/delete",
    recentCard: "/banner/all",
    addrecentCart: "/banner/bannertext",
    update: "/banner/update",
    addWithTitle: "/banner/bannertext",
  },
  advocate: {
    add: "/advocate/add",
    getAll: "/advocate/all",
    single: "/advocate/single",
  },
  terms: {
    add: "/tnc/add",
    get: "/tnc/all",
    delete: "/tnc/delete",
    update: "/tnc/update",
  },
  policy: {
    add: "/privacy/",
    get: "/privacy/",
    delete: "/privacy/",
  },
  upi: {
    get: "/upi",
    add: "/upi",
    update: "/upi/update",
  },
  kyc: {
    get: "/kyc/get-kyc",
    approve: "/kyc/approve-kyc",
  },
  driwork: {
    getAll: "/driworks/all",
    update: "/driworks/update-dri-works",
    add: "/driworks/add-dri-works",
    delete: "/driworks/delete-dri-works",
  },
  driUser: {
    getAll: "/driuser",
    search: "/driuser/search",
    singe: "/driuser/single",
    addUser: "/driuser",
  },
  adminProfileImage: "/admin/adminProfileBanner",
  emi: {
    upload: "/emi/create-emi",
    mannual: "/emi/manual",
    markaspaid: "/emi/mark-as-paid",
  },
  userLoan: {
    addloan: "/loan/create",
  },
  invoice: {
    add: "/invoice",
  },
  whatsapp: {
    add: "/whatsapp/",
    update: "/whatsapp/",
    get: "/whatsapp/",
  },
  loan: {
    addLoan: "/loan/create",
  },
  bank: {
    getbanks: "/admin/get-banks",
  },
  notifications: {
    all: "/notification/",
    custome: {
      all: "/notification/custom-notification",
      get: "/notification/get-custom-notification",
    },
  },
  service: {
    addService: "/service/",
  },
  subscription: {
    add: "/subcription/add-subscription",
  },
};
