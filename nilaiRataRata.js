
  const kalkulkasi = (mtk, bhsIndo, bhsInggris, ipa) => {
    mtk + bhsIndo + bhsInggris + ipa
    const result = mtk + bhsIndo + bhsInggris + ipa
    const rataRata = result / 4
    console.log(rataRata)

    if (rataRata >= 90) {
      console.log('Grade A')
    } else if (rataRata >= 80) {
      console.log('Grade B')
    } else if (rataRata >= 70) {
      console.log('Grade C')
    } else if (rataRata >= 60) {
      console.log('Grade D')
    } else if (rataRata >= 0) {
      console.log('Grade E')
    }
  }

kalkulkasi(90, 90, 92, 90)