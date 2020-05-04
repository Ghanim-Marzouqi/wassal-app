import { IonContent, IonPage, IonText, IonButton } from "@ionic/react";
import React from "react";
import "./TruckerHome.css";
import { useHistory } from "react-router";

const TruckerHome: React.FC = () => {
  // variables
  const history = useHistory();

  // methods
  const goBack = () => {
    history.goBack();
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="ion-text-center">
          <IonText>الصفحة الرئيسية للسائق</IonText>
        </div>
        <div className="ion-text-center ion-margin-top">
          <IonButton onClick={goBack}>رجوع</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TruckerHome;
