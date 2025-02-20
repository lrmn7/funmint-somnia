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
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log("Connected with Public Key:", response.publicKey.toString());
      onSetWalletAddress(response.publicKey.toString());
    } else {
      alert("Please Install Phantom!!");
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
