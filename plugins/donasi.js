let handler = async m => m.reply(`
╭─「 Donasi • Pulsa / Dana 」
│ •  [081247822525 / Pulsa]
│ •  [081247822525 / Dana]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
