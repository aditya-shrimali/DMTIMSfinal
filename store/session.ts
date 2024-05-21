const storeInSession = (key:string, value:string) => {
    return sessionStorage.setItem(key, value);
  };
  
  const lookinSession = (key:string) => {
    return sessionStorage.getItem(key);
  };
  
  const removeFromSession = (key:string) => {
    return sessionStorage.removeItem(key);
  };
  
  const clearSession = () => {
    sessionStorage.clear();
  };
  
  export { storeInSession, lookinSession, removeFromSession, clearSession };
  