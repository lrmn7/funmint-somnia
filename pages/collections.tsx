import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import {
  CollectionCard,
  CollectionCardAccount,
  CollectionCardImage,
  CollectionCardImageContainer,
  CollectionCardUser,
  CollectionCardUserIconContainer,
  CollectionContainer,
  CollectionsMain,
  CollectionText,
} from "./../styles/Collections/styles";
import axios from "axios";
import LoadingModal from "../components/Modals/Loading";
import ErrorModal from "../components/Modals/ErrorModal";
import { FaUserShield } from "react-icons/fa";

const Collections: NextPage = () => {
  const [nftCollections, setNFTCollections] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.BACKEND_URL}`)
      .then((res) => {
        const nftData = [];
        for (let item of res.data.reverse()) {
          const data = JSON.parse(item.fields.data);
          nftData.push(data);
        }
        setNFTCollections(nftData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  }, []);

  console.log(nftCollections);

  return (
    <div>
      <Head>
        <title>SomMint</title>
        <meta name="description" content="Draw your NFT and mint them" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CollectionsMain>
        <Header />
        {nftCollections?.length > 0 ? (
          <React.Fragment>
            <LoadingModal show={loading} closeModal={() => setLoading(false)} />
            <ErrorModal show={error} closeModal={() => setError(false)} />
            <CollectionContainer>
              {nftCollections.map((item, index) => (
                <CollectionCard key={index}>
                  <CollectionCardImageContainer>
                    <CollectionCardImage alt="image" src={item.imageUrl} />
                  </CollectionCardImageContainer>
                  <CollectionCardUser>
                    <CollectionCardUserIconContainer>
                      <FaUserShield />
                    </CollectionCardUserIconContainer>
                    <CollectionCardAccount>
                      {item.address}
                    </CollectionCardAccount>
                  </CollectionCardUser>
                </CollectionCard>
              ))}
            </CollectionContainer>
          </React.Fragment>
        ) : (
          <CollectionText>No NFT Found. Let's Create One!</CollectionText>
        )}
      </CollectionsMain>
    </div>
  );
};

export default Collections;
