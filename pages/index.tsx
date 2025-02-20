import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import {
  HomeMain,
  HomeImageMain,
  HomeBanner,
  HomeBannerContainer,
  HomeContainer,
  HomeContent,
  HomeContentHead,
  HomeButton,
} from "./../styles/Home/styles";
import bannerImage from "./../assets/banner.png";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SomMint</title>

        <meta name="dscvr:canvas:version" content="vNext" />
        <meta name="og:image" content="https://my-canvas.com/preview-image.png" />
        <meta name="description" content="Draw your NFT and mint them" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeMain>
        <Header />
        <HomeContainer>
          <HomeImageMain>
            <HomeContent>
              <HomeContentHead>
                Somniacs <span>Instant NFTs</span>
              </HomeContentHead>
              <Link href="/draw">
                <HomeButton>Let's Draw</HomeButton>
              </Link>
            </HomeContent>
            <HomeBannerContainer>
              <HomeBanner>
                <Image src={bannerImage} />
              </HomeBanner>
            </HomeBannerContainer>
          </HomeImageMain>
        </HomeContainer>
      </HomeMain>
    </div>
  );
};

export default Home;
