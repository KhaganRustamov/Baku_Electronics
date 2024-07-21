import Image from "next/image";
import styles from "./header.module.scss";
import be_logo from "@/assets/images/be_logo.png";

import Compare from "@/assets/images/Compare";
import Card from "@/assets/images/Card";
import Favourite from "@/assets/images/Favourite";
import Login from "@/assets/images/Login";
import Theme from "../theme/Theme";
import Catalog from "@/assets/images/Catalog";
import Search from "@/assets/images/Search";

const Header = () => {
  return (
    <header>
      {/* Первая часть */}
      <div className={styles.topSection}>
        <div className={styles.leftPart}>
          <a
            href="https://new.bakuelectronics.az/kampaniyalar"
            className={styles.list}
          >
            Kampaniyalar
          </a>
          <a
            href="https://new.bakuelectronics.az/korporativ-satishlar"
            className={styles.list}
          >
            Xidmətlər
          </a>
          <a
            href="https://new.bakuelectronics.az/magazalar"
            className={styles.list}
          >
            Mağazalar
          </a>
          <a
            href="https://www.bakuelectronics.az/nisyealis/"
            className={styles.list}
          >
            Aylıq Ödəniş
          </a>
          <a
            href="https://new.bakuelectronics.az/arxayin-al"
            className={styles.list}
          >
            Digər
          </a>
        </div>
        <div className={styles.rightPart}>
          <a href="https://www.bakuelectronics.az/" className={styles.link}>
            Əvvəlki versiyaya keçid
          </a>
          <select className={styles.dropdown}>
            <option value="">Aze</option>
            <option value="1">Rus</option>
            <option value="2">Eng</option>
          </select>
          <Theme />
        </div>
      </div>

      {/* Вторая часть */}
      <div className={styles.bottomSection}>
        <div className={styles.logo}>
          <a href="http://localhost:3000/">
            <Image
              alt="be_logo"
              src={be_logo}
              className={styles.logo}
              width={48}
              height={48}
            />
          </a>
        </div>
        <div className={styles.catalog}>
          <Catalog />
          <span>Kataloq</span>
        </div>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Məhsul axtar..."
            className={styles.searchBar_input}
          />
          <div className={styles.search}>
            <Search />
          </div>
        </div>
        <div className={styles.icons}>
          <a
            href="https://new.bakuelectronics.az/catalog/muqayise-et"
            className={styles.icon}
          >
            <Compare />
          </a>
          <a
            href="https://new.bakuelectronics.az/sebet"
            className={styles.icon}
          >
            <Card />
          </a>
          <a
            href="https://new.bakuelectronics.az/sevimli-mehsullar"
            className={styles.icon}
          >
            <Favourite />
          </a>
          <a
            href="https://new.bakuelectronics.az/giris/login"
            className={styles.icon}
          >
            <Login />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
