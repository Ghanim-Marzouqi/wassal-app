import {
  IonContent,
  IonPage,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import React from "react";
import "./Register.css";

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size="10">
              <IonText>تسجيل مستخدم جديد</IonText>
            </IonCol>
            <IonCol size="2">
              <IonButton
                size="small"
                fill="clear"
                routerLink="/login"
                routerDirection="back"
              >
                <IonIcon slot="icon-only" icon={arrowBack}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
