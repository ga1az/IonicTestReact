import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';


const Details: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Details Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          hello
        </IonContent>
      </IonPage>
    );
};
export default Details;
