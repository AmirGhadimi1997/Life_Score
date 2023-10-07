import style from "./score.module.css";
import React, { useEffect, useRef, useState } from 'react';


   
 



function ScorePage() {
  const scoreRef = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedScore = localStorage.getItem('score');
    if (savedScore) {
      scoreRef.current = parseInt(savedScore);
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('score', scoreRef.current.toString());
  }, [scoreRef.current]);

  const tasks = [
    { name: 'ورزش', points: 5 },
    { name: 'گیم', points: -10 },
    { name: 'غذای سالم', points: 8 },
    { name: 'انیمه', points: -3 },
  ];

  const increaseScore = (points) => {
    scoreRef.current += points;
    forceUpdate();
  };

  const decreaseScore = (points) => {
    scoreRef.current -= points;
    forceUpdate();
  };

  const resetScore = () => {
    scoreRef.current = 0;
    localStorage.removeItem('score');
    forceUpdate();
  };

  // تابعی برای به روزرسانی مقدار در صفحه DOM
  const forceUpdate = () => {
    setScore(scoreRef.current);
  };
  
  // const [score, setScore] = useState(0);





// امتیاز 50- میشود


  // const [score2, setScore2] = useState(0);

  // useEffect(() => {
  //   const storedScore = localStorage.getItem('score');
  //   if (storedScore) {
  //     setScore(parseInt(storedScore));
  //   }
  // }, []);

  // const handleButtonClick1 = () => {
  //   const currentDate = new Date().toLocaleDateString();
  //   const lastVisitedDate = localStorage.getItem('lastVisitedDate');

  //   if (currentDate !== lastVisitedDate) {
  //     setScore(score - 50);
  //     localStorage.setItem('score', score - 50);
  //     localStorage.setItem('lastVisitedDate', currentDate);
  //   }
  // };



  const resetScore1 = () => {
    scoreRef.current = 0;
    localStorage.removeItem('score');
    forceUpdate();
  };

  // تابعی برای به روزرسانیقدار در صفحه DOM
  const forceUpdate1 = () => {
    setScore(scoreRef.current);
  };

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString();
    const savedDates = localStorage.getItem('dates');
    let dates = {};

    if (savedDates) {
      dates = JSON.parse(savedDates);
    }

    if (!dates[currentDate]) {
      decreaseScore(50);
      dates[currentDate] = true;
      localStorage.setItem('dates', JSON.stringify(dates));
    }
  }, []);

  const [score, setScore] = useState(0);





// پایان بخش اول امتیازدهی






  const [isRightAligned, setIsRightAligned] = useState(false);

  function handleToggleTotalScore() {
    setIsRightAligned(!isRightAligned);
  }
  




  const [localStorageData, setLocalStorageData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("yourLocalStorageKey"); // جایگزین کنید "yourLocalStorageKey" با کلید مناسب برای داده‌های ذخیره شده در لوکال استوریج
    setLocalStorageData(data);
  }, []);









// انتقال به لوکال استرویح




   
 


    // اصلی اینه سیو میماند 


  //   const [scoreData, setScoreData] = useState([]);

  // useEffect(() => {
  //   // دریافت اطلاعات از localStorage
  //   const storedData = JSON.parse(localStorage.getItem('scoreData'));
  //   if (storedData) {
  //     setScoreData(storedData);
  //   }
  // }, []);

  // const handleScoreSubmit = () => {
  //   // اضافه کردن تاریخ و امتیاز جدید به scoreData
  //   const currentDate = new Date().toLocaleDateString();
  //   const newScoreData = [...scoreData, { date: currentDate, score: 'امتیاز جدید' }];
  //   setScoreData(newScoreData);

  //   // ذخیره اطلاعات در localStorage
  //   localStorage.setItem('scoreData', JSON.stringify(newScoreData));
  // };



  
 


  // اصلیش اینه سیو میماند بالا رو میگم

//  const [score1, setScore1] = useState(0);

//   const handleScoreSubmit = () => {
//  const currentDate = new Date().toLocaleDateString();
//     const currentTime = new Date().toLocaleTimeString();
//     const dataToSave = {
//       date: currentDate,
//       time: currentTime,
//       score: score
//     };

//     // ذخیره اطلاعات در لوکال استوریج
//     localStorage.setItem('scoreData', JSON.stringify(dataToSave));
//   };

// 


// این پایینی هم درست است عدد را می آورد

const [score1, setScore1] = useState(0);
const [scoreData, setScoreData] = useState([]);

useEffect(() => {
  const savedData = localStorage.getItem('scoreData');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    setScoreData(parsedData);
  }
}, []);

const handleScoreSubmit = () => {
const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  const dataToSave = {
    date: currentDate,
    score: score
  };

  // ذخیره اطلاعات دروکال استوریج
  localStorage.setItem('scoreData', JSON.stringify(dataToSave));
  setScoreData(dataToSave);
};


const savedScoreData = JSON.parse(localStorage.getItem('scoreData'));









// 2 این پایینی هم درست است عدد را می آورد


// const [score1, setScore1] = useState(0);
// const [scoreData, setScoreData] = useState([]);

// useEffect(() => {
//   const savedData = localStorage.getItem('scoreData');
//   if (savedData) {
//     const parsedData = JSON.parse(savedData);
//     setScoreData(parsedData);
//   }
// }, []);

// const handleScoreSubmit = () => {
//   const currentDate = new Date().toLocaleDateString();
//   const currentTime = new Date().toLocaleTimeString();
//   const dataToSave = {
//     date: currentDate,
//     score: score1
//   };

//   // ذخیره اطلاعات در لوکال استوریج
//   const updatedScoreData = [...scoreData, dataToSave];
//   localStorage.setItem('scoreData', JSON.stringify(updatedScoreData));
//   setScoreData(updatedScoreData);
// };

// const handleClick = (clickedScore) => {
//   setScore1(clickedScore);
// };

// const savedScoreData = JSON.parse(localStorage.getItem('scoreData')) || [];










// این بالایی هم درست است عدد را می آورد




// انگار این پایینی هم درست است

// const [score1, setScore1] = useState(0);
// const [scoreData, setScoreData] = useState([]);

// useEffect(() => {
//   const savedData = localStorage.getItem('scoreData');
//   if (savedData) {
//     const parsedData = JSON.parse(savedData);
//     setScoreData(parsedData);
//   }
// }, []);

// const handleScoreSubmit = () => {
//   const currentDate = new Date().toLocaleDateString();
//   const currentTime = new Date().toLocaleTimeString();
//   const dataToSave = {
//     date: currentDate,
//     score: score1
//   };

//   // دریافت داده‌های قبلی از localStorage
//   const previousData = localStorage.getItem('scoreData');
//   let newData = [];

//   if (previousData) {
//     const parsedPreviousData = JSON.parse(previousData);
//     // newData = [...parsedPreviousData, dataToSave];
//   } else {
//     newData = [dataToSave];
//   }

//   // ذخیره داده‌هایدید در localStorage
//   localStorage.setItem('scoreData', JSON.stringify(newData));
//   setScoreData(newData);
// };



// انگار این بالایی هم درست است









  // 2 اصلی اینه سیو میماند 




  // const [scoreData, setScoreData] = useState([]);

  // useEffect(() => {
  //   // دریافت اطلاعات از localStorage
  //   const storedData = JSON.parse(localStorage.getItem('scoreData'));
  //   if (storedData) {
  //     setScoreData(storedData);
  //   }
  // }, []);

  // const handleScoreSubmit = () => {
  //   // اضافه کردن تاریخ و امتیاز جدید به scoreData
  //   const currentDate = moment().format('D/M/YYYY');
  //   const newScoreData = [...scoreData, { date: currentDate, score: 'امتیاز جدید' }];
  //   setScoreData(newScoreData);

  //   // ذخیره اطلاعات در localStorage
  //   localStorage.setItem('scoreData', JSON.stringify(newScoreData));
  // };






  // 2 اصلیش اینه سیو میماند بالا رو میگم

  





// امتیاز 50- میشود


// const [score2, setScore2] = useState(0);

//   useEffect(() => {
//     const storedScore = localStorage.getItem('score');
//     if (storedScore) {
//       setScore(parseInt(storedScore));
//     }
//   }, []);

//   const handleButtonClick = () => {
//     const currentDate = new Date().toLocaleDateString();
//     const lastVisitedDate = localStorage.getItem('lastVisitedDate');

//     if (currentDate !== lastVisitedDate) {
//       setScore(score - 50);
//       localStorage.setItem('score', score - 50);
//       localStorage.setItem('lastVisitedDate', currentDate);
//     }
//   };













  
  return (

   <div className={style.scorewraper}>

    <div className={style.Score}>
      <div className={style.score_number}>
        <h1>{score}</h1>
      </div>
      <div className={style.score_text}>



      <table>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td onClick={() => increaseScore(task.points)}>{task.name}</td>
              <td onClick={() => increaseScore(task.points)}>{task.points}</td> {/* اینجا بسته بندی تگ td را تکمیل کرده‌ام */}
            </tr>
          ))}
        </tbody>
      </table>




        {/* {tasks.map((task, index) => (
          <div key={index} className={style.score_name}>
            <h3 onClick={() => increaseScore(task.points)}>
              {task.name} {task.points}
            </h3>
          </div>
        ))} */}




      </div>
      {isLoaded && (
        <div className={style.score_end}>
          <div className={style.end_text}>
            <h3>{scoreRef.current}</h3>
          </div>
          <div className={style.end_num}>
            <h3>امروز</h3>
          </div>
        </div>
      )}

      <div className={style.btn}>

        <button onClick={resetScore}>شروع مجدد</button>
        <button onClick={handleToggleTotalScore}>دیگر روزها</button>
        <button onClick={handleScoreSubmit}>ثبت امتیاز</button>
    
      </div>
    </div>


    {/* total_score  */}


    <div className={`${style.total_score} ${isRightAligned ? style.rightAlign : ""}`}>

   

      <div className={style.total_text}>
      
    {/* {score} */}


      <table>
        <tr>
          
            <th>امتیاز کل</th>
            <th>0</th>
        </tr>
      </table>
        
      </div>
      
      <div className={style.total_text2}>
         
      <table>
        <tr>
            <th>تاریخ</th>
            <th>امتیاز</th>
        </tr>
        {/* <tr> */}


           {/* لوکال */}

{/* {localStorage.getItem('scoreData')} */}

{savedScoreData && (
            <tr>
              <td>{savedScoreData.date}</td>
              <td>{savedScoreData.score}</td>
            </tr>
          )}







        {/* {scoreData.map((data, index) => (
        <tr key={index}>
          
          <td>{data.date}</td>
          <td>{data.score}</td>
        </tr>
      ))}
         */}
    
        
    </table>

      </div>

   </div>

    </div>
  );

 
 

   

}

export default ScorePage;
