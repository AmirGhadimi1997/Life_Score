import { Link } from "react-router-dom";
import style from "./login.module.css"
import React, { useContext, useState } from 'react';




function Login(){





    
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
    
      const handleLogin = () => {
        // اینجا می‌توانید منطق بررسی نام کاربری و رمز عبور را اضافه کنید
        if (username === 'admin' && password === '123') {
          // اگر نام کاربری و رمز عبور صحیح باشند، کاربر به صفحه بعدی هدایت می‌شود
          window.location.href = '/ScorePage';
        } else {
          // اگر نام کاربری و یا رمز عبور اشتباه باشد، نمایش یک پیام خطا
          alert('نام کاربری یا رمز عبور اشتباه است.');
        }
      };
   











    return(


     <div>
        <div className={style.Login}>
           <div className={style.login_page}>
              <label htmlFor="">USERNAME</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

              {/* <input type="text" /> */}


              <label htmlFor="">PASSWORD</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {/* <input type="text"/> */}
    
              
              {/* <Link to="/ScorePage"> */}
               <button onClick={handleLogin}>LOGIN</button>
              {/* </Link> */}
             
              
           </div>
        </div>
     </div>



    )



}

export default Login;
