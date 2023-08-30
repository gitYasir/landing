import { useEffect } from "react";

const ThankYouPage = () => {
  useEffect(() => {
    const downloadPdf = () => {
      const pdfUrl = "/5-TIPS-TO-BOOST-YOUR-BUSINESS.pdf";

      const link = document.createElement("a");
      link.href = pdfUrl;
      link.target = "_blank";
      link.download = "5 TIPS TO BOOST YOUR BUSINESS.pdf";
      link.click();
    };

    downloadPdf();
  }, []);

  return (
    <div>
      <h1>Thank You for Submitting the Form!</h1>
    </div>
  );
};

export default ThankYouPage;
