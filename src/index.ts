import commander from 'commander'

const command = commander
  .version('0.1.0')
  .option('-c --city [name]', 'Add city name')
  .parse(process.argv)

if (!command.city) command.outputHelp()