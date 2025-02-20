import type { NextPage } from "next";
import {
  HeaderContainer,
  HeaderButton,
  HeaderText,
  HeaderNav,
  HeaderUL,
  HeaderLI,
  HeaderLink,
} from "./../../styles/Header/styles";
import { setWalletAddress } from "../../redux/reducer/wallet";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

const Header: NextPage = () => {
  const dispatch = useAppDispatch();
  const onSetWalletAddress = (walletAddress: string) =>
    dispatch(setWalletAddress(walletAddress));

  const walletAddress = useAppSelector((state) => state.wallet.walletAddress);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // Request wallet connection
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        if (accounts.length > 0) {
          console.log("Connected with Address:", accounts[0]);
          onSetWalletAddress(accounts[0]); // Simpan alamat wallet ke Redux
        }
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <HeaderContainer>
      <HeaderText>
        Somniacs<span>Mint</span>
      </HeaderText>
      <HeaderNav>
        <HeaderUL>
          <HeaderLI>
            <HeaderLink href="/">Home</HeaderLink>
          </HeaderLI>
          <HeaderLI>
            <HeaderLink href="/draw">Draw</HeaderLink>
          </HeaderLI>
          <HeaderLI>
            <HeaderLink href="/collections">Collection</HeaderLink>
          </HeaderLI>
        </HeaderUL>
        <HeaderButton onClick={connectWallet}>
          {walletAddress ? "Wallet Connected ✅" : "Connect Wallet"}
        </HeaderButton>
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;
