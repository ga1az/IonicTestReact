import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import { useState } from "react";
import { RouteComponentProps } from "react-router";
import { useData } from "../hooks/useData";
import "./Details.css";

interface UserDetailPageProps
  extends RouteComponentProps<{
    email: string;
  }> {}

const Details: React.FC<UserDetailPageProps> = ({ match }) => {
  const { getUserByEmail } = useData();
  const [user, setUser] = useState(null as any);

  useIonViewWillEnter(async () => {
    const user = await getUserByEmail(match.params.email);
    setUser(user);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="home/"></IonBackButton>
          </IonButtons>
          <IonTitle>{user?.email}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard class="card-center">
          <IonCardHeader>
            <IonTitle>
              {user?.name.first} {user?.name.last}
            </IonTitle>
          </IonCardHeader>
          <IonCardContent>
            <img src={user?.picture.large} alt={user?.name.first} />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Details;
