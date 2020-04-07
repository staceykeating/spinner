let spinnerSymbols = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   \n"]

for (let i = 0; i < spinnerSymbols.length; i++) {
setTimeout(() => {
  process.stdout.write(spinnerSymbols[i]); 
}, i * 200);
}