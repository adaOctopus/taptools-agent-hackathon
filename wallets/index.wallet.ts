import nami from "./nami.wallet";
import yoroi from "./yoroi.wallet";
import eternl from "./eternl.wallet";

export const Wallets: any = {
  nami,
  yoroi,
  eternl
};

export const walletIcons: any = {
  nami: "/public/assets/img/nami.png",
  yoroi: "/public/assets/img/yoroi.png",
  eternl: "/public/assets/img/eternl.png"
}

export const getWalletsMetadata = () => {
  return Object.keys(Wallets).map((key) => {
    const wallet = new Wallets[key]();
    const walletIcon = walletIcons[key];
    const metadata = wallet.getMetadata();
    metadata["walletIcon"] = walletIcon;
    console.log(metadata)

    return Object.assign({ id: key }, metadata);
  });
};
