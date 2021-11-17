const main = async () => {
    const helloWorldFactory = await hre.ethers.getContractFactory("HelloWorld");
    const helloContract = await helloWorldFactory.deploy();
    await helloContract.deployed();

    console.log("Contract deployed to:", helloContract.address);

    let newMessage = await helloContract.changeMessage("This is the new message I just updated");

    await newMessage.wait();
    
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();