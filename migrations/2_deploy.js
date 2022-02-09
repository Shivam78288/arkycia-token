const ArkyciaToken = artifacts.require('ArkyciaToken.sol');
const ArkyciaPresaleContract = artifacts.require('ArkyciaPresaleContract.sol');

const quickswapRouter = "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff";
const admin = "0x6868BdCAB03E52fAE2BA137f928c090C087f9418"

module.exports = async function(deployer){
    await deployer.deploy(ArkyciaToken, quickswapRouter, admin);
    await deployer.deploy(ArkyciaPresaleContract, admin, ArkyciaToken.address);
}