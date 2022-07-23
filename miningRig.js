function miningRig(input) {
    let gpuPrice = Number(input[0]);
    let adapterPrice = Number(input[1]);
    let electricityPerDay = Number(input[2]);
    let profitPerDay = Number(input[3]);

    let totalGpuPrice = gpuPrice * 13;
    let totalAdapterPrice = adapterPrice * 13;
    let totalSpend = totalGpuPrice + totalAdapterPrice + 1000;
    let totalProfitPerDay = profitPerDay - electricityPerDay;
    let profitPerGpu = 13 * totalProfitPerDay;
    let returnOnInvestment = Math.ceil(totalSpend / profitPerGpu);

    console.log(totalSpend);
    console.log(returnOnInvestment);
}

miningRig(["700",
    "15",
    "0.20",
    "2"])
miningRig(["800",
    "10",
    "0.32",
    "6.4"])