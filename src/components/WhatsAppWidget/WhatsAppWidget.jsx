import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./whatsappWidget.css";

const WhatsappWidget = () => {
  useEffect(() => {
    const zap = () => {
      const zapElement = document.getElementById("zap");
      if (zapElement) {
        zapElement.style.visibility = "visible";
      }
    };

    const showMsg = () => {
      const msgElement = document.getElementById("msg1");
      if (msgElement) {
        msgElement.style.visibility = "visible";
      }
    };

    const alertW = () => {
      const alertElement = document.getElementById("alertWapp");
      if (alertElement) {
        alertElement.style.visibility = "visible";
      }
    };

    setTimeout(zap, 45000);
    setTimeout(showMsg, 45000);
    setTimeout(alertW, 45000);
  }, []);

  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=5562992136842&text=Ol%C3%A1!%20Preciso%20de%20ajuda%20para%20aumentar%20a%20visibilidade%20do%20meu%20neg%C3%B3cio.%20Voc%C3%AA%20pode%20me%20ajudar?"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
      >
        <FaWhatsapp
          id="zap"
          style={{ visibility: "hidden", width: "60px", height: "60px" }}
        />
      </a>
      <span
        id="alertWapp"
        style={{
          right: "30px",
          visibility: "hidden",
          position: "fixed",
          width: "17px",
          height: "17px",
          bottom: "90px",
          background: "red",
          zIndex: "101",
          fontSize: "11px",
          color: "#fff",
          textAlign: "center",
          borderRadius: "50px",
          fontWeight: "bold",
          lineHeight: "normal",
        }}
      >
        1
      </span>
      <div
        id="msg1"
        style={{
          right: "90px",
          visibility: "hidden",
          background: "#fff",
          color: "#000",
          position: "fixed",
          width: "125px",
          bottom: "40px",
          fontSize: "14px",
          lineHeight: "13px",
          padding: "8px",
          borderRadius: "10px",
          border: "1px solid #e2e2e2",
          boxShadow: "2px 2px 3px #999",
          zIndex: "100",
        }}
      >
        Opa! Tudo bem? Posso ajudar?
      </div>
    </>
  );
};

export default WhatsappWidget;
