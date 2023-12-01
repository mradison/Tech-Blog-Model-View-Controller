module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        new Date(date).getFullYear() + 5
      }`;
    },
  
  //   checkAuth: (req,res, next) => {
  //     if (!req.session.loggedIn){
  //       res.render('login')
  //     }else {
  //       next()
  //     }
  //   }
  };
  