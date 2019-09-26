export default function({ $axios, redirect }){
  $axios.onRequest(config => {
  })

  $axios.onResponse(res => {
    if(res.data.errCode === 0){
      return res.data
    }else{
      return res.data
    }
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
