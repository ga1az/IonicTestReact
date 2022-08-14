import { IonAvatar, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import './Home.css';

const Home: React.FC = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const uri = 'https://randomuser.me/api/?page=1&results=50&seed=devdactic';
      const data = await fetch(uri);
      const dataJSON = await data.json();
      setData(dataJSON.results);
    }
    loadData();
  },[])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {data.map((item:any, index) => (
            <IonItem key={index}>
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
