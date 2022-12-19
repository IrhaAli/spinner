const spinner2 = function() {
  let positions = '|/-\\|/-\\|';
  for (let i = 0; i < positions.length; i++) {
    setTimeout(() => {
      (i !== positions.length - 1) ?
        process.stdout.write(`\r${positions[i]}    `) : process.stdout.write(`\r${positions[i]} \n`);
    }, 100 + i * 200);
  }
};

spinner2();