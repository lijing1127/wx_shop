// pages/parallelShop/stockOrder/stockOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proList: [
      { id: 1, name: "甘净", num: '10', scanCode: "../../../images/scancode.png", addManully: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASDSURBVGhD7VpLrxRFFG6iQa8zVV01RAxINL52oiSw8MkCE2P0B5ho2PoCrv9CxJvrki3rYboHUOEKIWELatxJQnCDXIw7RTDx6jX4fd2nq/tOepjq6R5mQuZLTjKp867nqeoJ5phjjnuPC0HwYKTUc1Hb7I21fYvUa5vXu1o/S56IzR7uBMEmBhppsxQp+wMCXwPdGUJrsbLfx9p80VP2FeqKmenhq23bHomVWUTwP5cE7EWprjnUDXYsiNl7B/ZipMx+jMCvZcGRIm3/RZLXIHOZxN9oXx+Uyyi1Zd4XF5NH3GptRVDflgSzjmDOIJgDccs+fzwINouKA9vIg9xBdMQKdQZsYITMSrfdflRUJoMTYbg77bmCc2Vucb6fXNiyXcS80V3oPA57S6mNgk1tVuFrl4g1C+5A6K0/NzhUJmIwIjI24k5nB9ZKPGD7Jn2KSDPoab0HO80fBUdrUWg/EHZjoE3adn7g80TL7BR2PZxqbX2sOJ04Kr0wfEPYjYO2iyMP3zdqrxnuThjis5lR0FochvuEPTHQR+LL+TWnhTUe0DP7c2PonQlMp2Hoa/vRBt/avCesauABBeXfnDEsbGF5o9+2rzF5En9LszdwFvXzZMzqWIcmRuPTQhK3xtmdoHe0YOOoNHvjuLVPQO+2s4EzSlh+SE/uYtlhjgirEuomQsD3cm7DXpVmP7AAzJRZaoxz2BFNJMKZAH1XAfSVfVlYo5GctqKIKbYizZXRRCIEYjhXsHNYmkcjLbNFseq8LKCpRBDDocwOkrokzXcHLz5Q+CdT7BnzgrAqo7FEjHnR2cH5guLzAWENB292mRLXR1kV64umEkmq5sI6icLwaWENB/d7p6DMdWkuBStUyHw+jDBFf8xs8XeZTEajql1Mr9XMlteZhJ57xznX5idpLgVP21y2Ho06ucG/7GSVfVuah+O+SeS+mVp8snHOscBmYbGfCYKHGEtmqxuGTwlrOGZx++VoOTu+2y+Bof4uV5yBA1GZxUI8F6V5NCB8JFNEUjNWotjPpHk0orZ91Slibk6zaOTDBPT/y+10XhLWaAyW8dj6loRVCU0kAt9fFuK4Is3+wPRyhRqCuM2eEZY36ibCixWm1V/OhjafCMsfctXNX09w7RSWN7jf17zqnnL+caYdC558WFjVgEQGT+4PhTVxwPfHRd9I6l1hVUfyHKTN6YLBqTwHIalvhDU++DiGZFx5gCGe7AOd7ryJ9eTeguHvl75SW4RdD3y2xP49+SdTbQ7StvPT5JNphuQzmjI3nRMQ5u1J7iwiMjaS3amwsBPbyv7ORxARaRZpzZNPs4SSdyezPM67V/pCYpY3brGJzWt1ajwvcM3AMT/S5I5TWkf7OQSxyCBYsYqKQ1LF8v7N2knZ89QZsMFR/rqxNeEDbs2gG4OBFIiJXYdM8umNv9k2IOMola2xxdYBDyhMjQPo3atlwfkQkrxCG2UjOBXwBRBT5jB69hICHPp5Gr3+NwK/SNlKr4bTAC8+fa2fkWtz8ocBVtRs874UzTHHHA0iCP4HzPfb/tvwmT0AAAAASUVORK5CYII=" },
      { id: 2, name: "阿拉伯糖", num: '10', scanCode: "../../../images/scancode.png", addManully: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASDSURBVGhD7VpLrxRFFG6iQa8zVV01RAxINL52oiSw8MkCE2P0B5ho2PoCrv9CxJvrki3rYboHUOEKIWELatxJQnCDXIw7RTDx6jX4fd2nq/tOepjq6R5mQuZLTjKp867nqeoJ5phjjnuPC0HwYKTUc1Hb7I21fYvUa5vXu1o/S56IzR7uBMEmBhppsxQp+wMCXwPdGUJrsbLfx9p80VP2FeqKmenhq23bHomVWUTwP5cE7EWprjnUDXYsiNl7B/ZipMx+jMCvZcGRIm3/RZLXIHOZxN9oXx+Uyyi1Zd4XF5NH3GptRVDflgSzjmDOIJgDccs+fzwINouKA9vIg9xBdMQKdQZsYITMSrfdflRUJoMTYbg77bmCc2Vucb6fXNiyXcS80V3oPA57S6mNgk1tVuFrl4g1C+5A6K0/NzhUJmIwIjI24k5nB9ZKPGD7Jn2KSDPoab0HO80fBUdrUWg/EHZjoE3adn7g80TL7BR2PZxqbX2sOJ04Kr0wfEPYjYO2iyMP3zdqrxnuThjis5lR0FochvuEPTHQR+LL+TWnhTUe0DP7c2PonQlMp2Hoa/vRBt/avCesauABBeXfnDEsbGF5o9+2rzF5En9LszdwFvXzZMzqWIcmRuPTQhK3xtmdoHe0YOOoNHvjuLVPQO+2s4EzSlh+SE/uYtlhjgirEuomQsD3cm7DXpVmP7AAzJRZaoxz2BFNJMKZAH1XAfSVfVlYo5GctqKIKbYizZXRRCIEYjhXsHNYmkcjLbNFseq8LKCpRBDDocwOkrokzXcHLz5Q+CdT7BnzgrAqo7FEjHnR2cH5guLzAWENB292mRLXR1kV64umEkmq5sI6icLwaWENB/d7p6DMdWkuBStUyHw+jDBFf8xs8XeZTEajql1Mr9XMlteZhJ57xznX5idpLgVP21y2Ho06ucG/7GSVfVuah+O+SeS+mVp8snHOscBmYbGfCYKHGEtmqxuGTwlrOGZx++VoOTu+2y+Bof4uV5yBA1GZxUI8F6V5NCB8JFNEUjNWotjPpHk0orZ91Slibk6zaOTDBPT/y+10XhLWaAyW8dj6loRVCU0kAt9fFuK4Is3+wPRyhRqCuM2eEZY36ibCixWm1V/OhjafCMsfctXNX09w7RSWN7jf17zqnnL+caYdC558WFjVgEQGT+4PhTVxwPfHRd9I6l1hVUfyHKTN6YLBqTwHIalvhDU++DiGZFx5gCGe7AOd7ryJ9eTeguHvl75SW4RdD3y2xP49+SdTbQ7StvPT5JNphuQzmjI3nRMQ5u1J7iwiMjaS3amwsBPbyv7ORxARaRZpzZNPs4SSdyezPM67V/pCYpY3brGJzWt1ajwvcM3AMT/S5I5TWkf7OQSxyCBYsYqKQ1LF8v7N2knZ89QZsMFR/rqxNeEDbs2gG4OBFIiJXYdM8umNv9k2IOMola2xxdYBDyhMjQPo3atlwfkQkrxCG2UjOBXwBRBT5jB69hICHPp5Gr3+NwK/SNlKr4bTAC8+fa2fkWtz8ocBVtRs874UzTHHHA0iCP4HzPfb/tvwmT0AAAAASUVORK5CYII=" },
      { id: 13, name: "御邦C筑", num: '10', scanCode: "../../../images/scancode.png", addManully: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASDSURBVGhD7VpLrxRFFG6iQa8zVV01RAxINL52oiSw8MkCE2P0B5ho2PoCrv9CxJvrki3rYboHUOEKIWELatxJQnCDXIw7RTDx6jX4fd2nq/tOepjq6R5mQuZLTjKp867nqeoJ5phjjnuPC0HwYKTUc1Hb7I21fYvUa5vXu1o/S56IzR7uBMEmBhppsxQp+wMCXwPdGUJrsbLfx9p80VP2FeqKmenhq23bHomVWUTwP5cE7EWprjnUDXYsiNl7B/ZipMx+jMCvZcGRIm3/RZLXIHOZxN9oXx+Uyyi1Zd4XF5NH3GptRVDflgSzjmDOIJgDccs+fzwINouKA9vIg9xBdMQKdQZsYITMSrfdflRUJoMTYbg77bmCc2Vucb6fXNiyXcS80V3oPA57S6mNgk1tVuFrl4g1C+5A6K0/NzhUJmIwIjI24k5nB9ZKPGD7Jn2KSDPoab0HO80fBUdrUWg/EHZjoE3adn7g80TL7BR2PZxqbX2sOJ04Kr0wfEPYjYO2iyMP3zdqrxnuThjis5lR0FochvuEPTHQR+LL+TWnhTUe0DP7c2PonQlMp2Hoa/vRBt/avCesauABBeXfnDEsbGF5o9+2rzF5En9LszdwFvXzZMzqWIcmRuPTQhK3xtmdoHe0YOOoNHvjuLVPQO+2s4EzSlh+SE/uYtlhjgirEuomQsD3cm7DXpVmP7AAzJRZaoxz2BFNJMKZAH1XAfSVfVlYo5GctqKIKbYizZXRRCIEYjhXsHNYmkcjLbNFseq8LKCpRBDDocwOkrokzXcHLz5Q+CdT7BnzgrAqo7FEjHnR2cH5guLzAWENB292mRLXR1kV64umEkmq5sI6icLwaWENB/d7p6DMdWkuBStUyHw+jDBFf8xs8XeZTEajql1Mr9XMlteZhJ57xznX5idpLgVP21y2Ho06ucG/7GSVfVuah+O+SeS+mVp8snHOscBmYbGfCYKHGEtmqxuGTwlrOGZx++VoOTu+2y+Bof4uV5yBA1GZxUI8F6V5NCB8JFNEUjNWotjPpHk0orZ91Slibk6zaOTDBPT/y+10XhLWaAyW8dj6loRVCU0kAt9fFuK4Is3+wPRyhRqCuM2eEZY36ibCixWm1V/OhjafCMsfctXNX09w7RSWN7jf17zqnnL+caYdC558WFjVgEQGT+4PhTVxwPfHRd9I6l1hVUfyHKTN6YLBqTwHIalvhDU++DiGZFx5gCGe7AOd7ryJ9eTeguHvl75SW4RdD3y2xP49+SdTbQ7StvPT5JNphuQzmjI3nRMQ5u1J7iwiMjaS3amwsBPbyv7ORxARaRZpzZNPs4SSdyezPM67V/pCYpY3brGJzWt1ajwvcM3AMT/S5I5TWkf7OQSxyCBYsYqKQ1LF8v7N2knZ89QZsMFR/rqxNeEDbs2gG4OBFIiJXYdM8umNv9k2IOMola2xxdYBDyhMjQPo3atlwfkQkrxCG2UjOBXwBRBT5jB69hICHPp5Gr3+NwK/SNlKr4bTAC8+fa2fkWtz8ocBVtRs874UzTHHHA0iCP4HzPfb/tvwmT0AAAAASUVORK5CYII=" },
      { id: 4, name: "赤霞珠干红葡萄酒", num: '10', scanCode: "../../../images/scancode.png", addManully: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASDSURBVGhD7VpLrxRFFG6iQa8zVV01RAxINL52oiSw8MkCE2P0B5ho2PoCrv9CxJvrki3rYboHUOEKIWELatxJQnCDXIw7RTDx6jX4fd2nq/tOepjq6R5mQuZLTjKp867nqeoJ5phjjnuPC0HwYKTUc1Hb7I21fYvUa5vXu1o/S56IzR7uBMEmBhppsxQp+wMCXwPdGUJrsbLfx9p80VP2FeqKmenhq23bHomVWUTwP5cE7EWprjnUDXYsiNl7B/ZipMx+jMCvZcGRIm3/RZLXIHOZxN9oXx+Uyyi1Zd4XF5NH3GptRVDflgSzjmDOIJgDccs+fzwINouKA9vIg9xBdMQKdQZsYITMSrfdflRUJoMTYbg77bmCc2Vucb6fXNiyXcS80V3oPA57S6mNgk1tVuFrl4g1C+5A6K0/NzhUJmIwIjI24k5nB9ZKPGD7Jn2KSDPoab0HO80fBUdrUWg/EHZjoE3adn7g80TL7BR2PZxqbX2sOJ04Kr0wfEPYjYO2iyMP3zdqrxnuThjis5lR0FochvuEPTHQR+LL+TWnhTUe0DP7c2PonQlMp2Hoa/vRBt/avCesauABBeXfnDEsbGF5o9+2rzF5En9LszdwFvXzZMzqWIcmRuPTQhK3xtmdoHe0YOOoNHvjuLVPQO+2s4EzSlh+SE/uYtlhjgirEuomQsD3cm7DXpVmP7AAzJRZaoxz2BFNJMKZAH1XAfSVfVlYo5GctqKIKbYizZXRRCIEYjhXsHNYmkcjLbNFseq8LKCpRBDDocwOkrokzXcHLz5Q+CdT7BnzgrAqo7FEjHnR2cH5guLzAWENB292mRLXR1kV64umEkmq5sI6icLwaWENB/d7p6DMdWkuBStUyHw+jDBFf8xs8XeZTEajql1Mr9XMlteZhJ57xznX5idpLgVP21y2Ho06ucG/7GSVfVuah+O+SeS+mVp8snHOscBmYbGfCYKHGEtmqxuGTwlrOGZx++VoOTu+2y+Bof4uV5yBA1GZxUI8F6V5NCB8JFNEUjNWotjPpHk0orZ91Slibk6zaOTDBPT/y+10XhLWaAyW8dj6loRVCU0kAt9fFuK4Is3+wPRyhRqCuM2eEZY36ibCixWm1V/OhjafCMsfctXNX09w7RSWN7jf17zqnnL+caYdC558WFjVgEQGT+4PhTVxwPfHRd9I6l1hVUfyHKTN6YLBqTwHIalvhDU++DiGZFx5gCGe7AOd7ryJ9eTeguHvl75SW4RdD3y2xP49+SdTbQ7StvPT5JNphuQzmjI3nRMQ5u1J7iwiMjaS3amwsBPbyv7ORxARaRZpzZNPs4SSdyezPM67V/pCYpY3brGJzWt1ajwvcM3AMT/S5I5TWkf7OQSxyCBYsYqKQ1LF8v7N2knZ89QZsMFR/rqxNeEDbs2gG4OBFIiJXYdM8umNv9k2IOMola2xxdYBDyhMjQPo3atlwfkQkrxCG2UjOBXwBRBT5jB69hICHPp5Gr3+NwK/SNlKr4bTAC8+fa2fkWtz8ocBVtRs874UzTHHHA0iCP4HzPfb/tvwmT0AAAAASUVORK5CYII=" },
      { id: 5, name: "龙脑精油", num: '10', scanCode: "../../../images/scancode.png", addManully: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASDSURBVGhD7VpLrxRFFG6iQa8zVV01RAxINL52oiSw8MkCE2P0B5ho2PoCrv9CxJvrki3rYboHUOEKIWELatxJQnCDXIw7RTDx6jX4fd2nq/tOepjq6R5mQuZLTjKp867nqeoJ5phjjnuPC0HwYKTUc1Hb7I21fYvUa5vXu1o/S56IzR7uBMEmBhppsxQp+wMCXwPdGUJrsbLfx9p80VP2FeqKmenhq23bHomVWUTwP5cE7EWprjnUDXYsiNl7B/ZipMx+jMCvZcGRIm3/RZLXIHOZxN9oXx+Uyyi1Zd4XF5NH3GptRVDflgSzjmDOIJgDccs+fzwINouKA9vIg9xBdMQKdQZsYITMSrfdflRUJoMTYbg77bmCc2Vucb6fXNiyXcS80V3oPA57S6mNgk1tVuFrl4g1C+5A6K0/NzhUJmIwIjI24k5nB9ZKPGD7Jn2KSDPoab0HO80fBUdrUWg/EHZjoE3adn7g80TL7BR2PZxqbX2sOJ04Kr0wfEPYjYO2iyMP3zdqrxnuThjis5lR0FochvuEPTHQR+LL+TWnhTUe0DP7c2PonQlMp2Hoa/vRBt/avCesauABBeXfnDEsbGF5o9+2rzF5En9LszdwFvXzZMzqWIcmRuPTQhK3xtmdoHe0YOOoNHvjuLVPQO+2s4EzSlh+SE/uYtlhjgirEuomQsD3cm7DXpVmP7AAzJRZaoxz2BFNJMKZAH1XAfSVfVlYo5GctqKIKbYizZXRRCIEYjhXsHNYmkcjLbNFseq8LKCpRBDDocwOkrokzXcHLz5Q+CdT7BnzgrAqo7FEjHnR2cH5guLzAWENB292mRLXR1kV64umEkmq5sI6icLwaWENB/d7p6DMdWkuBStUyHw+jDBFf8xs8XeZTEajql1Mr9XMlteZhJ57xznX5idpLgVP21y2Ho06ucG/7GSVfVuah+O+SeS+mVp8snHOscBmYbGfCYKHGEtmqxuGTwlrOGZx++VoOTu+2y+Bof4uV5yBA1GZxUI8F6V5NCB8JFNEUjNWotjPpHk0orZ91Slibk6zaOTDBPT/y+10XhLWaAyW8dj6loRVCU0kAt9fFuK4Is3+wPRyhRqCuM2eEZY36ibCixWm1V/OhjafCMsfctXNX09w7RSWN7jf17zqnnL+caYdC558WFjVgEQGT+4PhTVxwPfHRd9I6l1hVUfyHKTN6YLBqTwHIalvhDU++DiGZFx5gCGe7AOd7ryJ9eTeguHvl75SW4RdD3y2xP49+SdTbQ7StvPT5JNphuQzmjI3nRMQ5u1J7iwiMjaS3amwsBPbyv7ORxARaRZpzZNPs4SSdyezPM67V/pCYpY3brGJzWt1ajwvcM3AMT/S5I5TWkf7OQSxyCBYsYqKQ1LF8v7N2knZ89QZsMFR/rqxNeEDbs2gG4OBFIiJXYdM8umNv9k2IOMola2xxdYBDyhMjQPo3atlwfkQkrxCG2UjOBXwBRBT5jB69hICHPp5Gr3+NwK/SNlKr4bTAC8+fa2fkWtz8ocBVtRs874UzTHHHA0iCP4HzPfb/tvwmT0AAAAASUVORK5CYII=" },
    ],
    showModal: false,//是否展示模态框
    date: '2015-09-01',
    date1: '2015-09-01',
    proinfoList: [
      { name: "L-阿拉伯糖", batch: "2017-09-10", num: '10', productDate: '2017-02-26', validityPeriod: '2019-09-10' },
      { name: "L-阿拉伯糖", batch: "2017-09-10", num: '10', productDate: '2017-02-26', validityPeriod: '2019-09-10' },
      { name: "L-阿拉伯糖", batch: "2017-09-10", num: '10', productDate: '2017-02-26', validityPeriod: '2019-09-10' },
      { name: "L-阿拉伯糖", batch: "2017-09-10", num: '10', productDate: '2017-02-26', validityPeriod: '2019-09-10' },
      { name: "L-阿拉伯糖", batch: "2017-09-10", num: '10', productDate: '2017-02-26', validityPeriod: '2019-09-10' },
      { name: "L-阿拉伯糖", batch: "2017-09-10", num: '10', productDate: '2017-02-26', validityPeriod: '2019-09-10' },
      { name: "L-阿拉伯糖", batch: "2017-09-10", num: '10', productDate: '2017-02-26', validityPeriod: '2019-09-10' },
      { name: "L-阿拉伯糖", batch: "2017-09-10", num: '10', productDate: '2017-02-26', validityPeriod: '2019-09-10' },
      { name: "L-阿拉伯糖", batch: "2017-09-10", num: '10', productDate: '2017-02-26', validityPeriod: '2019-09-10' },
    ],
    inputVal: ''
  },

  toScan: function () {
    var that = this;
    wx.scanCode({
      success: (res) => {
        that.setData({
          showModal: true
        })

      },
      fail: (res) => {
        wx.showToast({
          title: '失败',
          icon: 'success',
          duration: 2000
        })
      },
      complete: (res) => {
      }
    })
  },

  addManu: function (e) {
    var that = this;
    console.log(e.currentTarget.id)

    this.setData({
      showModal: true,
      inputVal: that.data.proList.name
    })
  },


  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindDateChangeOne: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date1: e.detail.value
    })
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    var that = this;
    // var date = this.data.date[e.detail.value.instrument];
    // console.log(date);
    if (e.detail.value.batch == "" || e.detail.value.number == "") {
      wx.showToast({
        title: '内容不能为空',
        icon: 'fail',
        duration: 2000
      })
    } else {
      this.setData({
        showModal: false
      })
    }
  },
  //模态框点击展示功能
  preventTouchMove: function () {
  },

  showDetail() {
    this.setData({
      showModal: true
    });
  },

  hideDetail() {
    this.setData({
      showModal: false
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})