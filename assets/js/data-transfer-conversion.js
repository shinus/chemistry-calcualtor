let area = [
  { value: "bit/s", name: "Bit/Second" },
  { value: "B/s", name: "Byte/Second" },
  { value: "kbit/s", name: "Kilobit/Second" },
  { value: "kB/s", name: "Kilobyte/Second" },
  { value: "Mbit/s", name: "Megabit/Second" },
  { value: "MB/s", name: "Megabyte/Second" },
  { value: "Gbit/s", name: "Gigabit/Second" },
  { value: "GB/s", name: "Gigabyte/Second" },
  { value: "Tbit/s", name: "Terabit/Second" },
  { value: "TB/s", name: "Terabyte/Second (SI Def.)" },
  { value: "Tb/s", name: "Terabyte/Second" },
  { value: "AGP", name: "AGP" },
  { value: "AGP 2X", name: "AGP 2X" },
  { value: "AGP 4X", name: "AGP 4X" },
  { value: "AGP 8X", name: "AGP 8X" },
  { value: "ATM", name: "ATM" },
  { value: "CD 12x", name: "CD-ROM 12X" },
  { value: "CD 16x", name: "CD-ROM 16X" },
  { value: "CD 1x", name: "CD-ROM 1X" },
  { value: "CD 24x", name: "CD-ROM 24X" },
  { value: "CD 2x", name: "CD-ROM 2X" },
  { value: "CD 32x", name: "CD-ROM 32X" },
  { value: "CD 3x", name: "CD-ROM 3X" },
  { value: "CD 40x", name: "CD-ROM 40X" },
  { value: "CD 48x", name: "CD-ROM 48X" },
  { value: "CD 4x", name: "CD-ROM 4X" },
  { value: "CD 52x", name: "CD-ROM 52X" },
  { value: "CD 6x", name: "CD-ROM 6X" },
  { value: "CD 8x", name: "CD-ROM 8X" },
  { value: "char./s", name: "Character/Second" },
  { value: "DVD 1x", name: "DVD-ROM 1X" },
  { value: "DVD 2x", name: "DVD-ROM 2X" },
  { value: "DVD 3x", name: "DVD-ROM 3X" },
  { value: "DVD 4x", name: "DVD-ROM 4X" },
  { value: "DVD 6x", name: "DVD-ROM 6X" },
  { value: "DVD 8x", name: "DVD-ROM 8X" },
  { value: "E.P.T.A. 1 (signal)", name: "E.P.T.A. 1 (signal)" },
  { value: "E.P.T.A. 2 (payload)", name: "E.P.T.A. 2 (payload)" },
  { value: "E.P.T.A. 2 (signal)", name: "E.P.T.A. 2 (signal)" },
  { value: "E.P.T.A. 3 (payload)", name: "E.P.T.A. 3 (payload)" },
  { value: "E.P.T.A. 3 (signal)", name: "E.P.T.A. 3 (signal)" },
  { value: "Ethernet", name: "Ethernet" },
  { value: "Ethernet (10 Gigabit) ", name: "Ethernet (10 Gigabit) " },
  { value: "Ethernet(Fast Ethernet)", name: "Ethernet(Fast Ethernet)" },
  { value: "Ethernet(gbit)", name: "Ethernet(Gigabit)" },
  { value: "Fiber Channel", name: "Fiber Channel" },
  { value: "Firewire", name: "Firewire(IEEE-1394)" },
  {
    value: "Gigabit/Second (SI Def.) (Gbit/s)",
    name: "Gigabit/Second (SI Def.) (Gbit/s)",
  },
  {
    value: "Gigabyte/Second (SI Def.) (GB/s)",
    name: "Gigabyte/Second (SI Def.) (GB/s)",
  },
  { value: "Ethernet (IEEE 802.3)", name: "Ethernet (IEEE 802.3)" },
  { value: "H0", name: "H0" },
  { value: "H11", name: "H11" },
  { value: "H12", name: "H12" },
  { value: "IDE (DMA Mode 0)", name: "IDE (DMA Mode 0)" },
  { value: "IDE (DMA Mode 1)", name: "IDE (DMA Mode 1)" },
  { value: "IDE (DMA Mode 2)", name: "IDE (DMA Mode 2)" },
  { value: "IDE (PIO Mode 0)", name: "IDE (PIO Mode 0)" },
  { value: "IDE (PIO Mode 1)", name: "IDE (PIO Mode 1)" },
  { value: "IDE (PIO Mode 2)", name: "IDE (PIO Mode 2)" },
  { value: "IDE (PIO Mode 3)", name: "IDE (PIO Mode 3)" },
  { value: "IDE (PIO Mode 4)", name: "IDE (PIO Mode 4)" },
  { value: "ide-udma-mode-0", name: "IDE (UDMA Mode 0)" },
  { value: "ide-udma-mode-1", name: "IDE (UDMA Mode 1)" },
  { value: "ide-udma-mode-2", name: "IDE (UDMA Mode 2)" },
  { value: "ide-udma-mode-3", name: "IDE (UDMA Mode 3)" },
  { value: "ide-udma-mode-4", name: "IDE (UDMA Mode 4)" },
  { value: "ide-udma-mode-5", name: "IDE (UDMA Mode 5)" },
  { value: "ide-udma-mode-6", name: "IDE (UDMA Mode 6)" },
  { value: "ide-udma-100", name: "IDE (UDMA-100)" },
  { value: "ide-udma-133", name: "IDE (UDMA-133)" },
  { value: "ide-udma-33", name: "IDE (UDMA-33)" },
  { value: "ide-udma-66", name: "IDE (UDMA-66)" },
  { value: "IrDA", name: "IrDA" },
  { value: "IrDA-2", name: "IrDA-2" },
  { value: "ISA (16-Bit)", name: "ISA (16-Bit)" },
  { value: "ISA (8-Bit)", name: "ISA (8-Bit)" },
  { value: "ISDN (dual Channel)", name: "ISDN (dual Channel)" },
  { value: "ISDN (single Channel)", name: "ISDN (single Channel)" },
  {
    value: "Kilobit/Second (SI Def.) (kbit/s)",
    name: "Kilobit/Second (kbit/s)",
  },
  { value: "Kilobyte/Second (SI Def.) (kB/s)", name: "Kilobyte/Second (kB/s)" },
  {
    value: "Megabit/Second (SI Def.) (Mbit/s)",
    name: "Megabit/Second (Mbit/s)",
  },
  { value: "Megabyte/Second (SI Def.) (MB/s)", name: "Megabyte/Second (MB/s)" },
  { value: "Modem (110)", name: "Modem (110)" },
  { value: "Modem (1200)", name: "Modem (1200)" },
  { value: "Modem (14.4k)", name: "Modem (14.4k)" },
  { value: "Modem (2400)", name: "Modem (2400)" },
  { value: "Modem (28.8k)", name: "Modem (28.8k)" },
  { value: "Modem (300)", name: "Modem (300)" },
  { value: "Modem (33.6k)", name: "Modem (33.6k)" },
  { value: "Modem (56k)", name: "Modem (56k)" },
  { value: "Modem (9600)", name: "Modem (9600)" },
  { value: "OC1", name: "OC1" },
  { value: "OC12", name: "OC12" },
  { value: "OC192", name: "OC192" },
  { value: "OC24", name: "OC24" },
  { value: "OC3", name: "OC3" },
  { value: "OC48", name: "OC48" },
  { value: "OC768", name: "OC768" },
  { value: "PCI", name: "PCI" },
  { value: "PCI (64-Bit 66MHz)", name: "PCI (64-Bit 66MHz)" },
  { value: "PCI (64-Bit)", name: "PCI (64-Bit)" },
  { value: "PCI-X", name: "PCI-X" },
  { value: "SCSI (Async)", name: "SCSI (Async)" },
  { value: "SCSI (Fast Ultra Wide)", name: "SCSI (Fast Ultra Wide)" },
  { value: "SCSI (Fast Ultra)", name: "SCSI (Fast Ultra)" },
  { value: "SCSI (Fast Wide)", name: "SCSI (Fast Wide)" },
  { value: "SCSI (Fast)", name: "SCSI (Fast)" },
  { value: "SCSI (LVD Ultra160)", name: "SCSI (LVD Ultra160)" },
  { value: "SCSI (LVD Ultra320)", name: "SCSI (LVD Ultra320)" },
  { value: "SCSI (LVD Ultra80)", name: "SCSI (LVD Ultra80)" },
  { value: "SCSI (Sync)", name: "SCSI (Sync)" },
  { value: "SCSI (Ultra-2)", name: "SCSI (Ultra-2)" },
  { value: "SCSI (Ultra-3)", name: "SCSI (Ultra-3)" },
  { value: "STM-1 (signal)", name: "STM-1 (signal)" },
  { value: "STM-16 (signal)", name: "STM-16 (signal)" },
  { value: "STM-4 (signal)", name: "STM-4 (signal)" },
  { value: "STM-64 (signal)", name: "STM-64 (signal)" },
  { value: "STS1 (payload)", name: "STS1 (payload)" },
  { value: "STS1 (signal)", name: "STS1 (signal)" },
  { value: "STS12 (signal)", name: "STS12 (signal)" },
  { value: "STS192 (signal)", name: "STS192 (signal)" },
  { value: "STS24 (signal)", name: "STS24 (signal)" },
  { value: "STS3 (payload)", name: "STS3 (payload)" },
  { value: "STS3 (signal)", name: "STS3 (signal)" },
  { value: "STS3c (payload)", name: "STS3c (payload)" },
  { value: "STS3c (signal)", name: "STS3c (signal)" },
  { value: "STS48 (signal)", name: "STS48 (signal)" },
  { value: "T0 (B8ZS Payload)", name: "T0 (B8ZS Payload)" },
  { value: "T0 (payload)", name: "T0 (payload)" },
  { value: "T1 (payload)", name: "T1 (payload)" },
  { value: "T1 (signal)", name: "T1 (signal)" },
  { value: "T1C (payload)", name: "T1C (payload)" },
  { value: "T1C (signal)", name: "T1C (signal)" },
  { value: "T1Z (payload)", name: "T1Z (payload)" },
  { value: "T2 (signal)", name: "T2 (signal)" },
  { value: "T3 (payload)", name: "T3 (payload)" },
  { value: "T3 (signal)", name: "T3 (signal)" },
  { value: "T3Z (payload)", name: "T3Z (payload)" },
  { value: "T4 (signal)", name: "T4 (signal)" },
  {
    value: "Terabit/Second (SI Def.) (Tbit/s)",
    name: "Terabit/Second (Tbit/s)",
  },
  { value: "Token Ring", name: "Token Ring" },
  { value: "USB", name: "USB" },
  { value: "USB 2.0", name: "USB 2.0" },
  {
    value: "Virtual Tributary 2 (payload) (v.t 2)",
    name: "Virtual Tributary 2 (v.t 2)",
  },
  {
    value: "Virtual Tributary 6 (signal) (v.t 6)",
    name: "Virtual Tributary 6 (v.t 6)",
  },
  {
    value: "Virtual Tributary 6 (payload) (v.t 6)",
    name: "Virtual Tributary 6 (v.t 6)",
  },
  {
    value: "Virtual Tributary 2 (signal) (v.t 2)",
    name: "Virtual Tributary 2 (v.t 2)",
  },
  {
    value: "Virtual Tributary 1 (signal) (v.t 1)",
    name: "Virtual Tributary 1 (v.t 1)",
  },
  {
    value: "Virtual Tributary 1 (payload) (v.t 1)",
    name: "Virtual Tributary 1 (v.t 1)",
  },
  { value: "VLB", name: "VLB" },
];

let selectFrom = document.getElementById("from");
let selectTo = document.getElementById("to");
let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");
let defaultval = document.getElementById("from1");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

defaultval.value = 100;

calcBtn.addEventListener("click", convertArea);

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectFrom.add(option);
  selectFrom.value = "bit/s";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "kB/s";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInKilobytePerSecond = 0;
  let output = 0;

  // Convert input to Celsius
  switch (from) {
    case "bit/s":
      inputInKilobytePerSecond = input * 0.00012;
      break;
    case "B/s":
      inputInKilobytePerSecond = input * 0.00098;
      break;
    case "kbit/s":
      inputInKilobytePerSecond = input * 0.125;
      break;
    case "kB/s":
      inputInKilobytePerSecond = input;
      break;
    case "Mbit/s":
      inputInKilobytePerSecond = input * 125;
      break;
    case "MB/s":
      inputInKilobytePerSecond = input * 1000;
      break;
    case "Gbit/s":
      inputInKilobytePerSecond = input * 125000;
      break;
    case "GB/s":
      inputInKilobytePerSecond = input * 1000000;
      break;
    case "Tbit/s":
      inputInKilobytePerSecond = input * 125000000;
      break;
    case "TB/s":
      inputInKilobytePerSecond = input * 1000000000;
      break;
    case "Tb/s":
      inputInKilobytePerSecond = input * 1073741824.00001;
      break;
    case "AGP":
      inputInKilobytePerSecond = input * 260416.66667;
      break;
    case "AGP 2X":
      inputInKilobytePerSecond = input * 520833.33333;
      break;
    case "AGP 4X":
      inputInKilobytePerSecond = input * 520833.33333;
      break;
    case "AGP 8X":
      inputInKilobytePerSecond = input * 2083333.33333;
      break;
    case "ATM":
      inputInKilobytePerSecond = input * 18920.89844;
      break;
    case "CD 12x":
      inputInKilobytePerSecond = input * 1757.8125;
      break;
    case "CD 16x":
      inputInKilobytePerSecond = input * 2343.75;
      break;
    case "CD 1x":
      inputInKilobytePerSecond = input * 146.48438;
      break;
    case "CD 24x":
      inputInKilobytePerSecond = input * 3515.625;
      break;
    case "CD 2x":
      inputInKilobytePerSecond = input * 292.96875;
      break;
    case "CD 32x":
      inputInKilobytePerSecond = input * 4687.5;
      break;
    case "CD 3x":
      inputInKilobytePerSecond = input * 439.45313;
      break;
    case "CD 40x":
      inputInKilobytePerSecond = input * 5859.375;
      break;
    case "CD 48x":
      inputInKilobytePerSecond = input * 7031.25;
      break;
    case "CD 4x":
      inputInKilobytePerSecond = input * 585.9375;
      break;
    case "CD 52x":
      inputInKilobytePerSecond = input * 7617.1875;
      break;
    case "CD 6x":
      inputInKilobytePerSecond = input * 878.90625;
      break;
    case "CD 8x":
      inputInKilobytePerSecond = input * 1171.875;
      break;
    case "char./s":
      inputInKilobytePerSecond = input * 0.00098;
      break;
    case "DVD 1x":
      inputInKilobytePerSecond = input * 1249.5;
      break;
    case "DVD 2x":
      inputInKilobytePerSecond = input * 2499;
      break;
    case "DVD 3x":
      inputInKilobytePerSecond = input * 3748.5;
      break;
    case "DVD 4x":
      inputInKilobytePerSecond = input * 4998;
      break;
    case "DVD 6x":
      inputInKilobytePerSecond = input * 7497;
      break;
    case "DVD 8x":
      inputInKilobytePerSecond = input * 9996;
      break;
    case "E.P.T.A. 1 (payload)":
      inputInKilobytePerSecond = input * 234.375;
      break;
    case "E.P.T.A. 1 (signal)":
      inputInKilobytePerSecond = input * 250;
      break;
    case "E.P.T.A. 2 (payload)":
      inputInKilobytePerSecond = input * 937.5;
      break;
    case "E.P.T.A. 2 (signal)":
      inputInKilobytePerSecond = input * 1031.25;
      break;
    case "E.P.T.A. 3 (payload)":
      inputInKilobytePerSecond = input * 3750;
      break;
    case "E.P.T.A. 3 (signal)":
      inputInKilobytePerSecond = input * 4195.3125;
      break;
    case "Ethernet":
      inputInKilobytePerSecond = input * 1220.70313;
      break;
    case "Ethernet (10 Gigabit) ":
      inputInKilobytePerSecond = input * 1220703.125;
      break;
    case "Ethernet(Fast Ethernet)":
      inputInKilobytePerSecond = input * 12207.03125;
      break;
    case "Ethernet(Gigabit)":
      inputInKilobytePerSecond = input * 122070.3125;
      break;
    case "Fiber Channel":
      inputInKilobytePerSecond = input * 390625;
      break;
    case "Firewire":
      inputInKilobytePerSecond = input * 48828.125;
      break;
    case "Gigabit/Second (SI Def.) (Gbit/s)":
      inputInKilobytePerSecond = input * 122070.3125;
      break;
    case "Gigabyte/Second (SI Def.) (GB/s)":
      inputInKilobytePerSecond = input * 976562.5;
      break;
    case "H0":
      inputInKilobytePerSecond = input * 46.875;
      break;
    case "H11":
      inputInKilobytePerSecond = input * 187.5;
      break;
    case "H12":
      inputInKilobytePerSecond = input * 234.375;
      break;
    case "IDE (DMA Mode 0)":
      inputInKilobytePerSecond = input * 4101.5625;
      break;
    case "IDE (DMA Mode 1)":
      inputInKilobytePerSecond = input * 12988.28125;
      break;
    case "IDE (DMA Mode 2)":
      inputInKilobytePerSecond = input * 16210.9375;
      break;
    case "IDE (PIO Mode 0)":
      inputInKilobytePerSecond = input * 3222.65625;
      break;
    case "IDE (PIO Mode 1)":
      inputInKilobytePerSecond = input * 5078.125;
      break;
    case "IDE (PIO Mode 2)":
      inputInKilobytePerSecond = input * 8105.46875;
      break;
    case "IDE (PIO Mode 3)":
      inputInKilobytePerSecond = input * 10839.84375;
      break;
    case "IDE (PIO Mode 4)":
      inputInKilobytePerSecond = input * 16210.9375;
      break;
    case "ide-udma-mode-0":
      inputInKilobytePerSecond = input * 16210.9375;
      break;
    case "ide-udma-mode-1":
      inputInKilobytePerSecond = input * 24414.0625;
      break;
    case "ide-udma-mode-2":
      inputInKilobytePerSecond = input * 32226.5625;
      break;
    case "ide-udma-mode-3":
      inputInKilobytePerSecond = input * 48828.125;
      break;
    case "ide-udma-mode-4":
      inputInKilobytePerSecond = input * 64453.125;
      break;
    case "ide-udma-mode-5":
      inputInKilobytePerSecond = input * 97656.25;
      break;
    case "ide-udma-mode-6":
      inputInKilobytePerSecond = input * 130208.33333;
      break;
    case "ide-udma-100":
      inputInKilobytePerSecond = input * 97656.25;
      break;
    case "ide-udma-133":
      inputInKilobytePerSecond = input * 130208.33333;
      break;
    case "ide-udma-33":
      inputInKilobytePerSecond = input * 32226.5625;
      break;
    case "ide-udma-66":
      inputInKilobytePerSecond = input * 64453.125;
      break;
    case "IrDA":
      inputInKilobytePerSecond = input * 14.0625;
      break;
    case "IrDA-2":
      inputInKilobytePerSecond = input * 488.28125;
      break;
    case "ISA (16-Bit)":
      inputInKilobytePerSecond = input * 16276.04167;
      break;
    case "ISA (8-Bit)":
      inputInKilobytePerSecond = input * 8138.02083;
      break;
    case "ISDN (dual Channel)":
      inputInKilobytePerSecond = input * 15.625;
      break;
    case "ISDN (single Channel)":
      inputInKilobytePerSecond = input * 7.8125;
      break;
    case "Kilobit/Second (SI Def.) (kbit/s)":
      inputInKilobytePerSecond = input * 0.12207;
      break;
    case "Kilobyte/Second (SI Def.) (kB/s)":
      inputInKilobytePerSecond = input * 0.97656;
      break;
    case "Megabit/Second (SI Def.) (Mbit/s)":
      inputInKilobytePerSecond = input * 122.07031;
      break;
    case "Megabyte/Second (SI Def)":
      inputInKilobytePerSecond = input * 976.5625;
      break;
    case "Modem (110)":
      inputInKilobytePerSecond = input * 0.01343;
      break;
    case "Modem (1200)":
      inputInKilobytePerSecond = input * 0.14648;
      break;
    case "Modem (14.4k)":
      inputInKilobytePerSecond = input * 1.75781;
      break;
    case "Modem (2400)":
      inputInKilobytePerSecond = input * 0.29297;
      break;
    case "Modem (28.8k)":
      inputInKilobytePerSecond = input * 3.51562;
      break;
    case "Modem (300)":
      inputInKilobytePerSecond = input * 0.03662;
      break;
    case "Modem (33.6k)":
      inputInKilobytePerSecond = input * 4.10156;
      break;
    case "Modem (56k)":
      inputInKilobytePerSecond = input * 6.83594;
      break;
    case "Modem (9600)":
      inputInKilobytePerSecond = input * 1.17187;
      break;
    case "OC1":
      inputInKilobytePerSecond = input * 6328.125;
      break;
    case "OC12":
      inputInKilobytePerSecond = input * 75937.5;
      break;
    case "OC192":
      inputInKilobytePerSecond = input * 1215000;
      break;
    case "OC24":
      inputInKilobytePerSecond = input * 151875;
      break;
    case "OC3":
      inputInKilobytePerSecond = input * 18984.375;
      break;
    case "OC48":
      inputInKilobytePerSecond = input * 303750;
      break;
    case "OC768":
      inputInKilobytePerSecond = input * 4860000;
      break;
    case "PCI":
      inputInKilobytePerSecond = input * 130208.33333;
      break;
    case "PCI (64-Bit 66MHz)":
      inputInKilobytePerSecond = input * 520833.33333;
      break;
    case "PCI (64-Bit)":
      inputInKilobytePerSecond = input * 260416.66667;
      break;
    case "PCI-X":
      inputInKilobytePerSecond = input * 1041666.66667;
      break;
    case "SCSI (Async)":
      inputInKilobytePerSecond = input * 1041666.66667;
      break;
    case "SCSI (Fast Ultra Wide)":
      inputInKilobytePerSecond = input * 39062.5;
      break;
    case "SCSI (Fast Ultra)":
      inputInKilobytePerSecond = input * 19531.25;
      break;
    case "SCSI (Fast Wide)":
      inputInKilobytePerSecond = input * 19531.25;
      break;
    case "SCSI (Fast)":
      inputInKilobytePerSecond = input * 9765.625;
      break;
    case "SCSI (LVD Ultra160)":
      inputInKilobytePerSecond = input * 156250;
      break;
    case "SCSI (LVD Ultra320)":
      inputInKilobytePerSecond = input * 312500;
      break;
    case "SCSI (LVD Ultra80)":
      inputInKilobytePerSecond = input * 78125;
      break;
    case "SCSI (Sync)":
      inputInKilobytePerSecond = input * 4882.8125;
      break;
    case "SCSI (Ultra-2)":
      inputInKilobytePerSecond = input * 78125;
      break;
    case "SCSI (Ultra-3)":
      inputInKilobytePerSecond = input * 156250;
      break;
    case "STM-1 (signal)":
      inputInKilobytePerSecond = input * 18984.375;
      break;
    case "STM-16 (signal)":
      inputInKilobytePerSecond = input * 303750;
      break;
    case "STM-4 (signal)":
      inputInKilobytePerSecond = input * 75937.5;
      break;
    case "STM-64 (signal)":
      inputInKilobytePerSecond = input * 1215000;
      break;
    case "STS1 (payload)":
      inputInKilobytePerSecond = input * 6042.48047;
      break;
    case "STS1 (signal)":
      inputInKilobytePerSecond = input * 6328.125;
      break;
    case "STS12 (signal)":
      inputInKilobytePerSecond = input * 75937.5;
      break;
    case "STS192 (signal)":
      inputInKilobytePerSecond = input * 1215000;
      break;
    case "STS24 (signal)":
      inputInKilobytePerSecond = input * 151875;
      break;
    case "STS3 (payload)":
      inputInKilobytePerSecond = input * 18351.5625;
      break;
    case "STS3 (signal)":
      inputInKilobytePerSecond = input * 18984.375;
      break;
    case "STS3c (payload)":
      inputInKilobytePerSecond = input * 18351.5625;
      break;
    case "STS3c (signal)":
      inputInKilobytePerSecond = input * 18984.375;
      break;
    case "STS48 (signal)":
      inputInKilobytePerSecond = input * 303750;
      break;
    case "T0 (B8ZS Payload)":
      inputInKilobytePerSecond = input * 7.8125;
      break;
    case "T0 (payload)":
      inputInKilobytePerSecond = input * 6.83594;
      break;
    case "T1 (payload)":
      inputInKilobytePerSecond = input * 164.0625;
      break;
    case "T1 (signal)":
      inputInKilobytePerSecond = input * 188.47656;
      break;
    case "T1C (payload)":
      inputInKilobytePerSecond = input * 328.125;
      break;
    case "T1C (signal)":
      inputInKilobytePerSecond = input * 384.76563;
      break;
    case "T1Z (payload)":
      inputInKilobytePerSecond = input * 188.47656;
      break;
    case "T2 (signal)":
      inputInKilobytePerSecond = input * 770.50781;
      break;
    case "T3 (payload)":
      inputInKilobytePerSecond = input * 4593.75;
      break;
    case "T3 (signal)":
      inputInKilobytePerSecond = input * 5460.9375;
      break;
    case "T3Z (payload)":
      inputInKilobytePerSecond = input * 5250;
      break;
    case "T4 (signal)":
      inputInKilobytePerSecond = input * 33468.75;
      break;
    case "Terabit/Second (SI Def.) (Tbit/s)":
      inputInKilobytePerSecond = input * 122070312.5;
      break;
    case "Token Ring":
      inputInKilobytePerSecond = input * 488.28125;
      break;
    case "USB":
      inputInKilobytePerSecond = input * 1464.84375;
      break;
    case "USB 2.0":
      inputInKilobytePerSecond = input * 58593.75;
      break;
    case "Virtual Tributary 2 (payload) (v.t 2)":
      inputInKilobytePerSecond = input * 250;
      break;
    case "Virtual Tributary 6 (signal) (v.t 6)":
      inputInKilobytePerSecond = input * 770.50781;
      break;
    case "Virtual Tributary 6 (payload) (v.t 6)":
      inputInKilobytePerSecond = input * 732.42187;
      break;
    case "Virtual Tributary 2 (signal) (v.t 2)":
      inputInKilobytePerSecond = input * 281.25;
      break;
    case "Virtual Tributary 1 (signal) (v.t 1)":
      inputInKilobytePerSecond = input * 210.9375;
      break;
    case "Virtual Tributary 1 (payload) (v.t 1)":
      inputInKilobytePerSecond = input * 188.47656;
      break;
    case "VLB":
      inputInKilobytePerSecond = input * 65104.16667;
      break;
  }

  // Convert Celsius to output
  switch (to) {
    case "bit/s":
      output = inputInKilobytePerSecond / 0.00012;
      break;
    case "B/s":
      output = inputInKilobytePerSecond / 0.00098;
      break;
    case "kbit/s":
      output = inputInKilobytePerSecond / 0.125;
      break;
    case "kB/s":
      output = inputInKilobytePerSecond;
      break;
    case "Mbit/s":
      output = inputInKilobytePerSecond / 128;
      break;
    case "MB/s":
      output = inputInKilobytePerSecond / 1024;
      break;
    case "Gbit/s":
      output = inputInKilobytePerSecond / 131072;
      break;
    case "GB/s":
      output = inputInKilobytePerSecond / 1048576;
      break;
    case "Tbit/s":
      output = inputInKilobytePerSecond / 134217728;
      break;
    case "TB/s":
      output = inputInKilobytePerSecond / 976562500;
      break;
    case "Tb/s":
      output = inputInKilobytePerSecond / 1073741824.00001;
      break;
    case "AGP":
      output = inputInKilobytePerSecond / 260416.66667;
      break;
    case "AGP 2X":
      output = inputInKilobytePerSecond / 520833.33333;
      break;
    case "AGP 4X":
      output = inputInKilobytePerSecond / 1041666.66667;
      break;
    case "AGP 8X":
      output = inputInKilobytePerSecond / 2083333.33333;
      break;
    case "ATM":
      output = inputInKilobytePerSecond / 18920.89844;
      break;
    case "CD 12x":
      output = inputInKilobytePerSecond / 1757.8125;
      break;
    case "CD 16x":
      output = inputInKilobytePerSecond / 2343.75;
      break;
    case "CD 1x":
      output = inputInKilobytePerSecond / 146.48438;
      break;
    case "CD 24x":
      output = inputInKilobytePerSecond / 3515.625;
      break;
    case "CD 2x":
      output = inputInKilobytePerSecond / 292.96875;
      break;
    case "CD 32x":
      output = inputInKilobytePerSecond / 4687.5;
      break;
    case "CD 3x":
      output = inputInKilobytePerSecond / 439.45313;
      break;
    case "CD 40x":
      output = inputInKilobytePerSecond / 5859.375;
      break;
    case "CD 48x":
      output = inputInKilobytePerSecond / 7031.25;
      break;
    case "CD 4x":
      output = inputInKilobytePerSecond / 60937.5;
      break;
    case "CD 52x":
      output = inputInKilobytePerSecond / 7617.1875;
      break;
    case "CD 6x":
      output = inputInKilobytePerSecond / 878.90625;
      break;
    case "CD 8x":
      output = inputInKilobytePerSecond / 1171.875;
      break;
    case "char./s":
      output = inputInKilobytePerSecond / 0.00098;
      break;
    case "DVD 1x":
      output = inputInKilobytePerSecond / 1249.5;
      break;
    case "DVD 2x":
      output = inputInKilobytePerSecond / 2499;
      break;
    case "DVD 3x":
      output = inputInKilobytePerSecond / 3748.5;
      break;
    case "DVD 4x":
      output = inputInKilobytePerSecond / 4998;
      break;
    case "DVD 6x":
      output = inputInKilobytePerSecond / 7497;
      break;
    case "DVD 8x":
      output = inputInKilobytePerSecond / 9996;
      break;
    case "E.P.T.A. 1 (payload)":
      output = inputInKilobytePerSecond / 234.375;
      break;
    case "E.P.T.A. 1 (signal)":
      output = inputInKilobytePerSecond / 250;
      break;
    case "E.P.T.A. 2 (payload)":
      output = inputInKilobytePerSecond / 937.5;
      break;
    case "E.P.T.A. 2 (signal)":
      output = inputInKilobytePerSecond / 1031.25;
      break;
    case "E.P.T.A. 3 (payload)":
      output = inputInKilobytePerSecond / 3750;
      break;
    case "E.P.T.A. 3 (signal)":
      output = inputInKilobytePerSecond / 4195.3125;
      break;
    case "Ethernet":
      output = inputInKilobytePerSecond / 1220.70313;
      break;
    case "Ethernet (10 Gigabit) ":
      output = inputInKilobytePerSecond / 1220703.125;
      break;
    case "Ethernet(Fast Ethernet)":
      output = inputInKilobytePerSecond / 12207.03125;
      break;
    case "Ethernet(Gigabit)":
      output = inputInKilobytePerSecond / 122070.3125;
      break;
    case "Fiber Channel":
      output = inputInKilobytePerSecond / 390625;
      break;
    case "Firewire":
      output = inputInKilobytePerSecond / 48828.125;
      break;
    case "Gigabit/Second (SI Def.) (Gbit/s)":
      output = inputInKilobytePerSecond / 122070.3125;
      break;
    case "Gigabyte/Second (SI Def.) (GB/s)":
      output = inputInKilobytePerSecond / 976562.5;
      break;
    case "H0":
      output = inputInKilobytePerSecond / 46.875;
      break;
    case "H11":
      output = inputInKilobytePerSecond / 187.5;
      break;
    case "H12":
      output = inputInKilobytePerSecond / 234.375;
      break;
    case "IDE (DMA Mode 0)":
      output = inputInKilobytePerSecond / 4101.5625;
      break;
    case "IDE (DMA Mode 1)":
      output = inputInKilobytePerSecond / 12988.28125;
      break;
    case "IDE (DMA Mode 2)":
      output = inputInKilobytePerSecond / 16210.9375;
      break;
    case "IDE (PIO Mode 0)":
      output = inputInKilobytePerSecond / 3222.65625;
      break;
    case "IDE (PIO Mode 1)":
      output = inputInKilobytePerSecond / 5078.125;
      break;
    case "IDE (PIO Mode 2)":
      output = inputInKilobytePerSecond / 8105.46875;
      break;
    case "IDE (PIO Mode 3)":
      output = inputInKilobytePerSecond / 10839.84375;
      break;
    case "IDE (PIO Mode 4)":
      output = inputInKilobytePerSecond / 16210.9375;
      break;
    case "ide-udma-mode-0":
      output = inputInKilobytePerSecond / 16210.9375;
      break;
    case "ide-udma-mode-1":
      output = inputInKilobytePerSecond / 24414.0625;
      break;
    case "ide-udma-mode-2":
      output = inputInKilobytePerSecond / 32226.5625;
      break;
    case "ide-udma-mode-3":
      output = inputInKilobytePerSecond / 48828.125;
      break;
    case "ide-udma-mode-4":
      output = inputInKilobytePerSecond / 64453.125;
      break;
    case "ide-udma-mode-5":
      output = inputInKilobytePerSecond / 97656.25;
      break;
    case "ide-udma-mode-6":
      output = inputInKilobytePerSecond / 130208.33333;
      break;
    case "ide-udma-100":
      output = inputInKilobytePerSecond / 97656.25;
      break;
    case "ide-udma-133":
      output = inputInKilobytePerSecond / 130208.33333;
      break;
    case "ide-udma-33":
      output = inputInKilobytePerSecond / 32226.5625;
      break;
    case "ide-udma-66":
      output = inputInKilobytePerSecond / 64453.125;
      break;
    case "IrDA":
      output = inputInKilobytePerSecond / 14.0625;
      break;
    case "IrDA-2":
      output = inputInKilobytePerSecond / 488.28125;
      break;
    case "ISA (16-Bit)":
      output = inputInKilobytePerSecond / 16276.04167;
      break;
    case "ISA (8-Bit)":
      output = inputInKilobytePerSecond / 8138.02083;
      break;
    case "ISDN (dual Channel)":
      output = inputInKilobytePerSecond / 15.625;
      break;
    case "ISDN (single Channel)":
      output = inputInKilobytePerSecond / 7.8125;
      break;
    case "Kilobit/Second (SI Def.) (kbit/s)":
      output = inputInKilobytePerSecond / 0.12207;
      break;
    case "Kilobyte/Second (SI Def.) (kB/s)":
      output = inputInKilobytePerSecond / 0.97656;
      break;
    case "Megabit/Second (SI Def.) (Mbit/s)":
      output = inputInKilobytePerSecond / 122.07031;
      break;
    case "Megabyte/Second (SI Def)":
      output = inputInKilobytePerSecond / 976.5625;
      break;
    case "Modem (110)":
      output = inputInKilobytePerSecond / 0.01343;
      break;
    case "Modem (1200)":
      output = inputInKilobytePerSecond / 0.14648;
      break;
    case "Modem (14.4k)":
      output = inputInKilobytePerSecond / 1.75781;
      break;
    case "Modem (2400)":
      output = inputInKilobytePerSecond / 0.29297;
      break;
    case "Modem (28.8k)":
      output = inputInKilobytePerSecond / 3.51562;
      break;
    case "Modem (300)":
      output = inputInKilobytePerSecond / 0.03662;
      break;
    case "Modem (33.6k)":
      output = inputInKilobytePerSecond / 4.10156;
      break;
    case "Modem (56k)":
      output = inputInKilobytePerSecond / 6.83594;
      break;
    case "Modem (9600)":
      output = inputInKilobytePerSecond / 1.17187;
      break;
    case "OC1":
      output = inputInKilobytePerSecond / 6328.125;
      break;
    case "OC12":
      output = inputInKilobytePerSecond / 75937.5;
      break;
    case "OC192":
      output = inputInKilobytePerSecond / 1215000;
      break;
    case "OC24":
      output = inputInKilobytePerSecond / 151875;
      break;
    case "OC3":
      output = inputInKilobytePerSecond / 18984.375;
      break;
    case "OC48":
      output = inputInKilobytePerSecond / 303750;
      break;
    case "OC768":
      output = inputInKilobytePerSecond / 4860000;
      break;
    case "PCI":
      output = inputInKilobytePerSecond / 130208.33333;
      break;
    case "PCI (64-Bit 66MHz)":
      output = inputInKilobytePerSecond / 520833.33333;
      break;
    case "PCI (64-Bit)":
      output = inputInKilobytePerSecond / 260416.66667;
      break;
    case "PCI-X":
      output = inputInKilobytePerSecond / 1041666.66667;
      break;
    case "SCSI (Async)":
      output = inputInKilobytePerSecond / 1041666.66667;
      break;
    case "SCSI (Fast Ultra Wide)":
      output = inputInKilobytePerSecond / 39062.5;
      break;
    case "SCSI (Fast Ultra)":
      output = inputInKilobytePerSecond / 19531.25;
      break;
    case "SCSI (Fast Wide)":
      output = inputInKilobytePerSecond / 19531.25;
      break;
    case "SCSI (Fast)":
      output = inputInKilobytePerSecond / 9765.625;
      break;
    case "SCSI (LVD Ultra160)":
      output = inputInKilobytePerSecond / 156250;
      break;
    case "SCSI (LVD Ultra320)":
      output = inputInKilobytePerSecond / 312500;
      break;
    case "SCSI (LVD Ultra80)":
      output = inputInKilobytePerSecond / 78125;
      break;
    case "SCSI (Sync)":
      output = inputInKilobytePerSecond / 4882.8125;
      break;
    case "SCSI (Ultra-2)":
      output = inputInKilobytePerSecond / 78125;
      break;
    case "SCSI (Ultra-3)":
      output = inputInKilobytePerSecond / 156250;
      break;
    case "STM-1 (signal)":
      output = inputInKilobytePerSecond / 18984.375;
      break;
    case "STM-16 (signal)":
      output = inputInKilobytePerSecond / 303750;
      break;
    case "STM-4 (signal)":
      output = inputInKilobytePerSecond / 75937.5;
      break;
    case "STM-64 (signal)":
      output = inputInKilobytePerSecond / 1215000;
      break;
    case "STS1 (payload)":
      output = inputInKilobytePerSecond / 6042.48047;
      break;
    case "STS1 (signal)":
      output = inputInKilobytePerSecond / 6328.125;
      break;
    case "STS12 (signal)":
      output = inputInKilobytePerSecond / 75937.5;
      break;
    case "STS192 (signal)":
      output = inputInKilobytePerSecond / 1215000;
      break;
    case "STS24 (signal)":
      output = inputInKilobytePerSecond / 151875;
      break;
    case "STS3 (payload)":
      output = inputInKilobytePerSecond / 18351.5625;
      break;
    case "STS3 (signal)":
      output = inputInKilobytePerSecond / 18984.375;
      break;
    case "STS3c (payload)":
      output = inputInKilobytePerSecond / 18351.5625;
      break;
    case "STS3c (signal)":
      output = inputInKilobytePerSecond / 18984.375;
      break;
    case "STS48 (signal)":
      output = inputInKilobytePerSecond / 303750;
      break;
    case "T0 (B8ZS Payload)":
      output = inputInKilobytePerSecond / 7.8125;
      break;
    case "T0 (payload)":
      output = inputInKilobytePerSecond / 6.83594;
      break;
    case "T1 (payload)":
      output = inputInKilobytePerSecond / 164.0625;
      break;
    case "T1 (signal)":
      output = inputInKilobytePerSecond / 188.47656;
      break;
    case "T1C (payload)":
      output = inputInKilobytePerSecond / 328.125;
      break;
    case "T1C (signal)":
      output = inputInKilobytePerSecond / 384.76563;
      break;
    case "T1Z (payload)":
      output = inputInKilobytePerSecond / 188.47656;
      break;
    case "T2 (signal)":
      output = inputInKilobytePerSecond / 770.50781;
      break;
    case "T3 (payload)":
      output = inputInKilobytePerSecond / 4593.75;
      break;
    case "T3 (signal)":
      output = inputInKilobytePerSecond / 5460.9375;
      break;
    case "T3Z (payload)":
      output = inputInKilobytePerSecond / 5250;
      break;
    case "T4 (signal)":
      output = inputInKilobytePerSecond / 33468.75;
      break;
    case "Terabit/Second (SI Def.) (Tbit/s)":
      output = inputInKilobytePerSecond / 122070312.5;
      break;
    case "Token Ring":
      output = inputInKilobytePerSecond / 488.28125;
      break;
    case "USB":
      output = inputInKilobytePerSecond / 1464.84375;
      break;
    case "USB 2.0":
      output = inputInKilobytePerSecond / 58593.75;
      break;
    case "Virtual Tributary 2 (payload) (v.t 2)":
      output = inputInKilobytePerSecond / 250;
      break;
    case "Virtual Tributary 6 (signal) (v.t 6)":
      output = inputInKilobytePerSecond / 770.50781;
      break;
    case "Virtual Tributary 6 (payload) (v.t 6)":
      output = inputInKilobytePerSecond / 732.42187;
      break;
    case "Virtual Tributary 2 (signal) (v.t 2)":
      output = inputInKilobytePerSecond / 281.25;
      break;
    case "Virtual Tributary 1 (signal) (v.t 1)":
      output = inputInKilobytePerSecond / 210.9375;
      break;
    case "Virtual Tributary 1 (payload) (v.t 1)":
      output = inputInKilobytePerSecond / 188.47656;
      break;
    case "VLB":
      output = inputInKilobytePerSecond / 65104.16667;
      break;
  }

  result.innerHTML = `${input} ${from} = ${output.toFixed(2)} ${to}`;
}
let queryParams = [
  {
    name: "value",
    values: defaultval,
  },
  {
    name: "convertfrom",
    values: selectFrom,
  },
  {
    name: "convertto",
    values: selectTo,
  },
];
function handleSubmit() {
  convertArea();
  resultPage2(queryParams);
}
calcBtn.addEventListener("click", handleSubmit);

function setParams(queryParams) {
  let url =
    window.location.protocol +
    "//" +
    window.location.host +
    "/" +
    permaLink +
    "?";
  for (queryP of queryParams) {
    if (history.pushState) {
      var str = "&" + queryP.name + "=" + queryP.values.value;
      url = url + str;
    }
  }
  window.history.pushState({ path: url }, "", url);
}

function setParamValues(queryParams) {
  const params = new URLSearchParams(window.location.search);
  for (queryP of queryParams) {
    var parameter_value = params.get(queryP.name);
    if (queryP.values.tagName == "INPUT") {
      queryP.values.value = parameter_value;
    } else if (queryP.values.tagName == "SELECT") {
      queryP.values.value = parameter_value;
    }
  }
}
function resultPage2(queryParams) {
  var newUrl = window.location.href;
  if (!newUrl.includes("?")) {
    setParams(queryParams);
  } else {
    setParams(queryParams);
    // gtag("event", "page_view", {
    //   page_location: window.location.pathname + location.search,
    // });
  }
}
function init() {
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    handleSubmit();
  }
}
init();
