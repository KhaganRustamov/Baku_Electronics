"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/getData";
import styles from "./products.module.scss";
import Comparisor from "@/assets/images/Comparisor";
import Card from "@/assets/images/Card";
import Favourite from "@/assets/images/Favourite";

const Products = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Hamısı");

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setItems(data);
      setFilteredItems(data);
    };
    fetchProducts();
  }, []);

  const categories = [
    "Hamısı",
    "Smartfonlar",
    "Noutbuklar",
    "Smart saatlar",
    "Televizorlar",
  ];

  useEffect(() => {
    if (selectedCategory === "Hamısı") {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter((item) => item.title === selectedCategory));
    }
  }, [selectedCategory, items]);

  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.specialOfferText}>
          <div className={styles.title}>Özəl təkliflər</div>
          <div className={styles.desc}>
            Payız gəldi, şərtlər daha da sadələşdi!
          </div>
        </div>
        <div className={styles.categories}>
          {categories.map((category, i) => (
            <div
              key={i}
              className={`${styles.category} ${
                selectedCategory === category ? styles.active : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.grid}>
        {filteredItems.map((item, i) => (
          <div key={i} className={styles.products}>
            <div className={styles.discountAndImage}>
              <div className={styles.discountAndComparisor}>
                <div className={styles.discount}>-{item.discount}₼</div>
                <a
                  href="https://new.bakuelectronics.az/catalog/muqayise-et"
                  className={styles.comparisor}
                >
                  <Comparisor />
                </a>
              </div>
              <img src={item.image} className={styles.productImage} />
            </div>
            <div className={styles.text}>
              <p>{item.name}</p>
            </div>
            <div className={styles.prices}>
              <div className={styles.price}>{item.price}₼</div>
              <div className={styles.border}></div>
              <div className={styles.monthPrice}>
                <div className={styles.monthCount}>{item.monthCount} ay</div>
                <div className={styles.pricePerMonth}>
                  {item.pricePerMonth}₼
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.cardButton}>
                <div className={styles.card}>
                  <Card />
                </div>
                <div className={styles.cardText}>Səbətə əlavə et</div>
              </div>
              <div className={styles.favourite}>
                <Favourite />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
