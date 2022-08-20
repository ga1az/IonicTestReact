import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { useData } from "../hooks/useData";

const Home: React.FC = () => {
  const { data } = useData();

  return (
    // Pagina inicial do aplicativo
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* // Contenido de la pagina */}
      <IonContent fullscreen>
        <IonList>
          {data.map((item: any, index) => (
            <IonItem key={index} routerLink={`home/details/${item.email}`}>
              <IonAvatar slot="start">
                <IonImg src={item.picture.thumbnail} />
              </IonAvatar>
              <IonLabel>
                {item.name.first} {item.name.last}
                <p>{item.email}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
