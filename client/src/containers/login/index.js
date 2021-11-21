import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

/* Compnents */
import Form from "../../components/login/form";
import Modal from "../../components/login/modal";

import { IntlProvider } from "react-intl";

import messages_es from "../../translate/es";
import messages_en from "../../translate/en";

const messages = {
  es: messages_es,
  en: messages_en,
};
let language = navigator.language.split(/[-_]/)[0];

if (language !== "es" && language !== "en") {
  language = "en";
} else {
  language = "en";
}

const Login = () => {
  const [modal, setModal] = useState(false);

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <section className="container--login">
        <section className="module--login">
          <div className="module--loginImg"></div>
          <div className="module--loginBox">
            <Form setModal={setModal} status={0} loading={false} />
          </div>
        </section>
        <div className="container--dataon">
          <h4>TMC</h4>
          <h4>
            <FormattedMessage id="SiteDevelopedBy" /> Cristóbal Maturana
          </h4>
        </div>
        <Modal modal={modal} setModal={setModal} />
      </section>
    </IntlProvider>
  );
};

export default Login;
