export const signIn = user =>
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user }
  });
export const register = user =>
  $.ajax({
    method: "POST",
    url: "/api/user",
    data: { user }
  });
export const logout = () =>
  $.ajax({
    method: "DELETE",
    url: "/api/session"
  });
