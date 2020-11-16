const axios = require('axios');

const userController = {};

// SESSIONS
userController.checkIfSessionActive = async (req, res, next) => {
  try {
    // get sessionID out of cookies
    const { sessionID } = req.cookies;
    // ADD CODE HERE TO CHECK FOR ACTIVE FOR SESSIONID IN SQL DATABASE
    // SAVE SESSION TO LOCALS AND RETURN
    // if(session) {
    //  res.locals.session = session;
    //  return next();
    // }

    // return to homepage if no session is active
    return res.redirect('/home');
  } catch (err) {
    return next({
      log: `Error caught in userController.checkIfSessionActive. \n Error Message: ${err}`,
      message: { err },
    });
  }
};

userController.createSession = async (req, res, next) => {
  try {
  // ADD CODE HERE TO CREATE NEW SESSION AND RETURN THE USERID AND SESSIONID
  // if(session) {
  //  res.locals.sessionID = session;
  //  res.locals.userID = userID;
  //  return next();
  // }

  } catch (err) {
    return next({
      log: `Error caught in userController.createSession. \n Error Message: ${err}`,
      message: { err },
    });
  }
};

userController.saveSessionIDToCookies = async (req, res, next) => {
  try {
  //  res.cookie('sessionID', res.locals.sessionID, { httpOnly: true });
  } catch (err) {
    return next({
      log: `Error caught in userController.saveSessionIDToCookies. \n Error Message: ${err}`,
      message: { err },
    });
  }
};

userController.deleteSession = async (req, res, next) => {
  try {
    const { sessionID } = req.cookies;
    //  res.locals.sessionID = session;
    //  ADD CODE HERE TO DELETE THE SESSION WITH THE CURRENT SESSION ID
    //  return next();
  } catch (err) {
    return next({
      log: `Error caught in userController.deleteSession. \n Error Message: ${err}`,
      message: { err },
    });
  }
};

userController.deleteSessionCookie = async (req, res, next) => {
  try {
  //  res.cookie('sessionID', res.locals.sessionID, { expires: Date.now() });
  } catch (err) {
    return next({
      log: `Error caught in userController.deleteSessionCookie. \n Error Message: ${err}`,
      message: { err },
    });
  }
};

// USER INFO
userController.createUser = async (req, res, next) => {
  try {
    // INSERT DATABASE FUNCTIONALITY TO CREATE USER
    // if(user) {
    //  res.locals.userId = user.id;
    //  return next();
    // }
  } catch (err) {
    return next({
      log: `Error caught in userController.createUser. \n Error Message: ${err}`,
      message: { err },
    });
  }
};

userController.verifyUser = async (req, res, next) => {
  try {
    // INSERT CHECK TO SEE IF USER WITH GIVEN PASSWORD IS IN DATABASE
    // if(user) {
    //  res.locals.userId = user.id;
    //  return next();
    // }

  } catch (err) {
    return next({
      log: `Error caught in userController.verifyUser. \n Error Message: ${err}`,
      message: { err },
    });
  }
};

userController.getUserInfo = async (req, res, next) => {
  try {
    // INSERT QUERY TO GET USER INFORMATION
    // if(user) {
    //  res.locals.user = user;
    //  return next();
    // }

  } catch (err) {
    return next({
      log: `Error caught in userController.getUserInfo. \n Error Message: ${err}`,
      message: { err },
    });
  }
};

userController.updateUserInfo = async (req, res, next) => {
  try {
    // INSERT QUERY TO UPDATE USER INFORMATION
    // if(user) {
    //  res.locals.user = user;
    //  return next();
    // }
  } catch (err) {
    return next({
      log: `Error caught in userController.updateUserInfo. \n Error Message: ${err}`,
      message: { err },
    });
  }
};

module.exports = userController;
