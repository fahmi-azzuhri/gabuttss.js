const totalDay = 50;
let totalThanosSpawn = 0;
let totalDrStrangeSpawn = 0;
let totalMissingVillager = 0;
let villager;

for (let day = 1; day <= totalDay; day++) {
  /* first day */
  if (day == 1) {
    villager = 1
  /* thanos spawn */
  } else if (day % 3 == 0) {
    villager = Math.floor(villager / 2)
    totalMissingVillager += villager
    totalThanosSpawn++
  } else {
  /* Dr. strange spawn */
    villager = villager * 3
    totalDrStrangeSpawn++
  }
  console.log(`hari ke : ${day}.\n total penduduk : ${villager}`);
}
console.log(`thanos muncul sebanyak : ${totalThanosSpawn} kali`);
console.log(`dr.strange muncul sebanyak : ${totalDrStrangeSpawn} kali`);
console.log(`total penduduk yang hilang sebanyak : ${totalMissingVillager} orang`);
