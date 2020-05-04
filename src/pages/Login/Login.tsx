import {
  IonContent,
  IonPage,
  IonList,
  IonItem,
  IonInput,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonButton,
} from "@ionic/react";
import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router";

const Login: React.FC = () => {
  // page states
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userType, setUserType] = useState<string>("customer");
  const history = useHistory();

  // methods
  const signIn = () => {
    if (
      phone === "96132329" &&
      password === "Ghanim@123" &&
      userType === "customer"
    ) {
      console.log("Go To Customer Home");
      history.push("/customer-home");
    } else if (
      phone === "96132329" &&
      password === "Ghanim@123" &&
      userType === "trucker"
    ) {
      console.log("Go To Driver Home");
      history.push("/trucker-home");
    }
  };

  return (
    <IonPage>
      <IonContent
        className="ion-text-center ion-padding ion-justify-content-center ion-align-items-center"
        fullscreen={true}
      >
        <img
          src="assets/icon/icon.png"
          alt="App Logo"
          width="150px"
          height="auto"
        />
        <IonList>
          <IonItem>
            <IonInput
              type="number"
              value={phone}
              placeholder="رقم الهاتف"
              onIonChange={(e) => setPhone(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              type="password"
              value={password}
              placeholder="كلمة المرور"
              onIonChange={(e) => setPassword(e.detail.value!)}
            ></IonInput>
          </IonItem>
        </IonList>
        <IonSegment
          value={userType}
          onIonChange={(e) => setUserType(e.detail.value!)}
        >
          <IonSegmentButton value="customer">
            <IonLabel>زبون</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="trucker">
            <IonLabel>سائق</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        <IonButton
          className="ion-margin-top"
          expand="block"
          color="primary"
          onClick={signIn}
        >
          تسجيل الدخول
        </IonButton>
        <IonButton
          expand="block"
          fill="clear"
          routerLink="/register"
          routerDirection="forward"
        >
          لا تملك حساب؟ سجل الآن
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
