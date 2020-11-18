import React, { useState, useContext } from 'react';
import UserProfileHeader from '../components/UserProfileHeader';
import Gallery from '../components/Gallery';
import Navigation from '../components/Navigation';
import { SessionContext } from '../contexts/sessionContext';

const DashboardContainer = () => {
  // Temp Data
  const temp = [
    {
      plantId: '1',
      url:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_monstera_variant_medium_grant_pale_grey_360x.jpg?v=1605639668',
    },
    {
      plantId: '2',
      url:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_coffee-plant_variant_small_grant_terracotta_360x.jpg?v=1604008555',
    },
    {
      plantId: '3',
      url:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_calathea-rattlesnake_variant_medium_acadia_peach_360x.jpg?v=1605638407',
    },
    {
      plantId: '4',
      url:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_pothos-marble_variant_small_cream_360x.jpg?v=1605276830',
    },
    {
      plantId: '5',
      url:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-zeylanica_variant_small_balboa_cream_360x.jpg?v=1604683567',
    },
    {
      plantId: '6',
      url:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_hoya-heart_variant_mini_hyde_black_360x.jpg?v=1604096041',
    },
    {
      plantId: '7',
      url:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_maranta_variant_small_hyde_terracotta_360x.jpg?v=1603634998',
    },
    {
      plantId: '8',
      url:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_pothos-jade_variant_medium_hyde_mint_360x.jpg?v=1604959595',
    },
    {
      plantId: '9',
      url:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_calathea-medallion_variant_medium_hyde_cream_360x.jpg?v=1604966131',
    },
    {
      plantId: '10',
      url:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-moonshine_variant_grant_terracotta_360x.jpg?v=1604695122',
    },
    {
      plantId: '11',
      url:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_ponytail-palm_variant_grant_blush_360x.jpg?v=1601591232',
    },
    {
      plantId: '12',
      url:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_parlor-palm_variant_small_hyde_cream_360x.jpg?v=1605639195',
    },
    {
      plantId: '13',
      url:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_maple-sunrise-propagation-vase_variant_01_360x.jpg?v=1594934102',
    },
    {
      plantId: '14',
      url:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_petite-white-orchid_variant_x-small_hyde_cream_360x.jpg?v=1603637955',
    },
  ];

  const { currentUser } = useContext(SessionContext);
  const [images, setImages] = useState(temp);

  fetch('/plants', { headers: { userid: '1' } })
    .then((data) => data.json())
    .then((plants) => {
      setImages(plants);
    });

  return (
    <div className="flex flex-col h-screen" id="dashboard-container">
      <UserProfileHeader />
      <Gallery images={images} type="dashboard" />
      <Navigation />
    </div>
  );
};

export default DashboardContainer;
