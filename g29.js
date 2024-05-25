const g = require('logitech-g29');
const loudness = require('loudness');

volam = 2 // How many volume to add and remove

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function blink() {
    let increasing = true;

    for (let i = 0; i < 5; i++) {
        if (increasing) {
            await blinkSequence('1', '01', '001', '0001', '00001');
        } else {
            await blinkSequence('0001', '001', '01');
        }

        increasing = !increasing;
    }
    g.leds('');
    g.leds('00001');
    await sleep(150);
    g.leds('');
    await sleep(150);
    g.leds('0011');
    await sleep(150);
    g.leds('');
    await sleep(150);
    g.leds('11');
    await sleep(300);
    g.leds('1111');
    await sleep(300);
    g.leds('11111');
    await sleep(1200);
    g.leds('');
}

async function blinkSequence(...patterns) {
    for (let i = 0; i < patterns.length; i++) {
        g.leds(patterns[i]);
        await sleep(90);
        if (i !== patterns.length - 1) continue;
    }
}

function logo() {
    console.log('====================================================================================================')
    console.log(`                        ░▒▒▒▒▒                           
                  ▒▒▒▒▒▒▒▒▒▒▒▒                           
               ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                           
            ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                  
          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                           
        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                           
       ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                           
      ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░                                  
     ▒▒▒▒▒▒▒▒▒▒▒▒▒▒░                                     
    ▒▒▒▒▒▒▒▒▒▒▒▒▒░                                       
   ▒▒▒▒▒▒▒▒▒▒▒▒▒                   GMediaKeys v1.0                     
  ▒▒▒▒▒▒▒▒▒▒▒▒▒                     Made by aki0               
  ▒▒▒▒▒▒▒▒▒▒▒▒                                           
  ▒▒▒▒▒▒▒▒▒▒▒▒                ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  
 ▒▒▒▒▒▒▒▒▒▒▒▒                 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  
 ▒▒▒▒▒▒▒▒▒▒▒▒                 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  
 ▒▒▒▒▒▒▒▒▒▒▒▒                 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
  ▒▒▒▒▒▒▒▒▒▒▒▒                ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  
  ▒▒▒▒▒▒▒▒▒▒▒▒                ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  
  ▒▒▒▒▒▒▒▒▒▒▒▒▒                            ░▒▒▒▒▒▒▒▒▒▒▒  
   ▒▒▒▒▒▒▒▒▒▒▒▒▒                           ░▒▒▒▒▒▒▒▒▒▒▒  
    ▒▒▒▒▒▒▒▒▒▒▒▒▒░                         ░▒▒▒▒▒▒▒▒▒▒▒  
     ▒▒▒▒▒▒▒▒▒▒▒▒▒▒░                       ░▒▒▒▒▒▒▒▒▒▒▒  
      ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                     ░▒▒▒▒▒▒▒▒▒▒▒  
       ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒             ░▒▒▒▒▒▒▒▒▒▒▒  
        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒             ░▒▒▒▒▒▒▒▒▒▒▒  
          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                           
            ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒     github.com/z3ro-c0nfig/gmediakeys                   
               ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                           
                  ▒▒▒▒▒▒▒▒▒▒▒▒                           
                        ░▒▒▒▒▒                           `)
    console.log('====================================================================================================')
}

process.title = 'GMediaKeys v1.0'
console.clear();
g.connect(async function(err) {
    if (err) {
        console.error('Error connecting to G29:', err);
        return;
    }
    logo();
    blink();
    console.log("Ready!");
});

g.on('wheel-spinner', async function(val) { // Volume Control
    g.leds('');
    const vol = await loudness.getVolume();
    if (val === 1) {
        if (vol === 100) {
            await loudness.setMuted(false);
        } else {
            await loudness.setMuted(false);
            const addvol = volam + vol;
            await loudness.setVolume(addvol);
        }
    } else if (val === -1) {
        if (vol === 1) {
            await loudness.setMuted(true);
        } else {
            const minvol = vol - volam;
            await loudness.setVolume(minvol);
        }
    }
    const endvol = await loudness.getVolume();
    if (endvol > 2) {
        g.leds('1');
    }
    if (endvol > 40) {
        g.leds('11');
    }
    if (endvol > 60) {
        g.leds('111');
    }
    if (endvol > 80) {
        g.leds('1111');
    }
    if (endvol === 100) {
        g.leds('11111');
    }
});

g.on('wheel-button_spinner', async function() { // Volume Mute
    const isMuted = await loudness.getMuted();
    if (isMuted) {
        g.leds('');
        await loudness.setMuted(false);
    } else {
        g.leds('00001');
        await loudness.setMuted(true);
    }
});