import { BZ_REQUESTER } from 'MIDDLEWARE/requester'
import { API } from 'CONSTANT/globals'
import { md5 } from 'UTIL/md5'

const USER_COMMON_REQ = 'USER_COMMON_REQ'
const USER_COMMON_SUC = 'USER_COMMON_SUC'
const USER_COMMON_FAL = 'USER_COMMON_FAL'

const USR_ADD_REQ = 'USR_ADD_REQ'
const USR_ADD_SUC = 'USR_ADD_SUC'
const USR_ADD_FAL = 'USR_ADD_FAL'

const strFormat = (str, dft) => (str ? str : dft ? dft : '')

export const userPageByBrhAction = (data, showNum) => ({
  [BZ_REQUESTER]: {
    types: [USER_COMMON_REQ, USER_COMMON_SUC, USER_COMMON_FAL],
    url: API.USER_PAGE_BY_BRH_URL,
    body:{
      userNo: strFormat(data.userNo),
      userLevel: strFormat(data.userLevel),
      userName: strFormat(data.userName),

      beginTime: strFormat(data.beginTime),
      endTime: strFormat(data.endTime),
      brhId: strFormat(data.brhId),
      brhName: strFormat(data.brhName),

      currentPage: strFormat(data.currentPage, 1),
      turnPageShowNum: strFormat(showNum)
    }
  }
})


export const addUserAction = data => ({
  [BZ_REQUESTER]: {
    types: [USR_ADD_REQ, USR_ADD_SUC, USR_ADD_FAL],
    url: API.USER_ADD_URL,
    body: {
      userName: strFormat(data.userName),
      userLoginName: strFormat(data.userLoginName),
      userPwd: md5(strFormat(data.userPwd)),
      userDesc: strFormat(data.userDesc),
      userEmail: strFormat(data.userEmail),
      userAddress: strFormat(data.userAddress),
      userCertType: strFormat(data.userCertType),
      userCertNo: strFormat(data.userCertNo),
      userMobile: strFormat(data.userMobile),
      brhId: strFormat(data.brhId),
      userLevel: strFormat(data.userLevel),
      postId: strFormat(data.postId),
      postName: strFormat(data.postName),
      brhName: strFormat(data.brhName),
      userRight: strFormat(data.userRight)
    }
  }
})

