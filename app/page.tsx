import { Form } from "@/app/components/Form/Form";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Form/>
      </main>
    </div>
  );
}
