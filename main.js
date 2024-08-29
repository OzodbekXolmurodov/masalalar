// 1-misol
{
  let kun = 5;
  let kunNomi;

  switch (kun) {
    case 1:
      kunNomi = `Dushanba`;
      break;
    case 2:
      kunNomi = `Seshanba`;
      break;
    case 3:
      kunNomi = `Chorshanba`;
      break;
    case 4:
      kunNomi = `Payshanba`;
      break;
    case 5:
      kunNomi = `Juma`;
      break;
    case 6:
      kunNomi = `Shanba`;
      break;
    case 7:
      kunNomi = `Yakshanba`;
      break;
    default:
      kunNomi = `Xato`;
  }
  console.log(kunNomi);
}

// 2-misol

{
  let baho = 3;
  let natija;

  switch (baho) {
    case 1:
      natija = `Yomon`;
      break;
    case 2:
      natija = `Qoniqarsiz`;
      break;
    case 3:
      natija = `Qoniqarli`;
      break;
    case 4:
      natija = `Yaxshi`;
      break;
    case 5:
      natija = `alo`;
      break;
    default:
      natija = `Xato`;
  }
  console.log(natija);
}

//3-misol

{
  let month = 4;
  switch (month) {
    case 1:
    case 2:
    case 12:
      console.log("qish");
      break;

    case 3:
    case 4:
    case 5:
      console.log("bahor");
      break;
    case 6:
    case 7:
    case 8:
      console.log("kuz");
      break;
    case 9:
    case 10:
    case 11:
      console.log("qish");
      break;
    default:
      console.log(`xato`);
  }
}

// 4-misol
{
  let monthOne = 12;

  switch (monthOne) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log(`31 kun`);
      break;
    case 2:
      console.log(`29 kun`);
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log(`30 kun`);
  }
}

// 5-misol

{
  let A = 10;
  let B = 5;
  let amal = 2;

  switch (amal) {
    case 1:
      console.log(A + B);
      break;
    case 2:
      console.log(A - B);
      break;
    case 3:
      console.log(A / B);
      break;
    case 4:
      console.log(A * B);
      break;
    default:
      console.log(`xato`);
  }
}

// 6-misol

{
  let birlik = 4;
  let uzunlik = 1.5;
  let metrdaUzunlik;

  switch (birlik) {
    case 1:
      metrdaUzunlik = uzunlik * 0.1;
      break;
    case 2:
      metrdaUzunlik = uzunlik * 1000;
      break;
    case 3:
      metrdaUzunlik = uzunlik;
      break;
    case 4:
      metrdaUzunlik = uzunlik * 0.001;
      break;
    case 5:
      metrdaUzunlik = uzunlik * 0.01;
      break;
    default:
      metrdaUzunlik = "xato";
  }
  console.log(metrdaUzunlik);
}

// 7-misol

{
  let birlik = 5;
  let ogirlik = 15;
  let kgOgirlik;

  switch (birlik) {
    case 1:
      kgOgirlik = ogirlik;
      break;
    case 2:
      kgOgirlik = ogirlik * 0.000001;
      break;
    case 3:
      kgOgirlik = ogirlik * 0.001;
      break;
    case 4:
      kgOgirlik = ogirlik * 1000;
      break;
    case 5:
      kgOgirlik = ogirlik * 100;
      break;
    default:
      kgOgirlik = "xato";
  }

  console.log(kgOgirlik);
}

// 8-misol 9-misol 10-misolni shartiga tushunmadim ishlanishi qiyin ekan
