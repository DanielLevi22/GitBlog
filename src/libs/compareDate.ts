import dayjs from "dayjs";
export function compareDate(data: string) {
  const postcreationdate = dayjs(data)
  const currentdate = dayjs()
  const differenceindays = currentdate.diff(postcreationdate, 'day')
  const diferencaEmAnos = currentdate.diff(postcreationdate, 'year');
  const diferencaEmMeses = currentdate.diff(postcreationdate, 'month');

  let date;
  if(diferencaEmAnos > 0) {
    date  = `há ${diferencaEmMeses} anos`
  } else if(diferencaEmMeses > 0) {
    date  = `há ${diferencaEmMeses} mes`
  }else  {
    date = `há ${differenceindays} días`
  }

  return date
}