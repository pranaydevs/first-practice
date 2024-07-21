export const baseUrl = process.env.NEXT_APP_BASE_URL;
export const baseUrlApi = `${process.env.NEXT_APP_BASE_URL}/api/`;
export const baseUrlMedia = process.env.NEXT_APP_BASE_URL;

export const mediaUrl = (url: string) => {
  return `${baseUrlMedia}/uploads/${url}`;
};

export const endpoints = {
  auth: {
    signup: "/register",
    login: "/login",
  },

  contactus: {
    contactus: "contact-us"
  },

};

export const sucessNotificationEndPoints = [
  // endpoints.auth.signup,

];
