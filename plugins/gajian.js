let handler = async (m, { conn }) => {
  let LastClaim = global.db.data.users[m.sender].lastclaim
let cdm = `${MeNit(new Date - LastClaim)}`
let cds = `${DeTik(new Date - LastClaim)}`
let cd1 = Math.ceil(44 - cdm)
let cd2 = Math.ceil(59 - cds)
duik = ['5000','6000','7000','8000','9000','10000','11000','12000','13000','14000','15000','20000','30000','40000','50000','60000','70000','80000','90000','100000']
randol = duik[Math.floor(Math.random() * duik.length)]
  if (new Date - global.db.data.users[m.sender].lastclaim > 2700000) {
    global.db.data.users[m.sender].money += ${randol}
    m.reply('Gajimu Udah Dikirim Ke Inventorimu')
    global.db.data.users[m.sender].lastclaim = new Date * 1
  } else throw `Kamu Sudah Ambil Gaji Tadi.\n\nTunggu ${cd1} Menit ${cd2} Detik!`
}
handler.help = ['gaji', 'gajian']
handler.tags = ['rpg']
handler.command = /^(gaji|gajian)$/i
handler.owner = false
handler.mods = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler

function JaM(ms) {
  let h = isNaN(ms) ? '60' : Math.floor(ms / 3600000) % 60
  return [h].map(v => v.toString().padStart(2, 0) ).join(':')
}

function MeNit(ms) {
  let m = isNaN(ms) ? '60' : Math.floor(ms / 60000) % 60
  return [m].map(v => v.toString().padStart(2, 0) ).join(':')
}

function DeTik(ms) {
  let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
  return [s].map(v => v.toString().padStart(2, 0) ).join(':')
}
