import "./index.scss";
import PrimaryButton from "../../../common/primaryButton/primaryButton";
import useWallet from "../../../../hooks/useWallet";
import useReduxState from "../../../../hooks/useReduxState";
import useDidUpdateEffect from "../../../../hooks/useDidUpdateEffect";
import { useMediaQuery } from "react-responsive";
import { TWallet } from "../../../../hooks/useWallet";

import { ReactComponent as Phamtom } from "../../../../../assets/images/pictures/icons/phantom.svg";
import { ReactComponent as Sollet } from "../../../../../assets/images/pictures/icons/sollet.svg";
import { ReactComponent as Metamask } from "../../../../../assets/images/pictures/icons/metamask.svg";
import { 
  notify,
  connectWallet
} from "../../../../../utils/mint/mintScholaroid";

import { useMetamask } from "use-metamask";
import { useEffect } from "react";

declare var window: any;

export default function WalletList(): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width:800px)",
  });
  const [wallet, setWallet, connectToMetamask] = useWallet();
  const [, setGlobalData] = useReduxState((state) => state.globalData);

  const { metaState } = useMetamask();

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setWallet(walletResponse.address);
  };

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts: any) => {
        console.log("accountsChanged", accounts[0]);
        if (accounts.length > 0) {
          setWallet(accounts[0]);
        } else {
          setWallet(undefined);
        }
      });
    } else {
    }
  }

  useEffect(() => {
    addWalletListener();
  });

  useDidUpdateEffect(() => {
    if (wallet) {
      setGlobalData({
        type: "SET_GLOBAL_DATA",
        arg: {
          wallet,
        },
      });
    }
  }, [wallet]);

  const handleWallet = (walletType: TWallet) => {
    if( window.ethereum == null ){
      notify('warning', "You didn't install metamask. Please install metamask!");
      return;
    }
    if( metaState.isAvailable && !metaState.isConnected ){
      connectWalletPressed();
      // connectToMetamask();
    }
    setWallet(walletType);
  };

  return (
    <div className="w-list">
      <PrimaryButton 
        className="wl-metamask"
        onClick={() =>{ handleWallet("Metamask");}}
      >
        <Metamask />
        Metamask
      </PrimaryButton>
    </div>
  );
}
