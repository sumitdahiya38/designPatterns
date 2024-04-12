class ComplaintHandler {
  setNextHandler(handler) {
    this.nextHandler = handler;
  }

  handleComplaint(complaint) {
    if (this.nextHandler) {
      this.nextHandler.handleComplaint(complaint);
    } else {
      console.log("Complaint not resolved. Please contact customer service.");
    }
  }
}

class CustomerSupportHandler extends ComplaintHandler {
  handleComplaint(complaint) {
    if (complaint.severity === "Low") {
      console.log("Customer Support handled a low-severity complaint.");
    } else {
      super.handleComplaint(complaint);
    }
  }
}

class TechnicalSupportHandler extends ComplaintHandler {
  handleComplaint(complaint) {
    if (complaint.severity === "Medium") {
      console.log("Technical Support handled a medium-severity complaint.");
    } else {
      super.handleComplaint(complaint);
    }
  }
}

class ManagerHandler extends ComplaintHandler {
  handleComplaint(complaint) {
    if (complaint.severity === "High" && complaint.complexity === "Complex") {
      console.log("Manager handled a high-severity and complex complaint.");
    } else {
      super.handleComplaint(complaint);
    }
  }
}

function processComplaint(complaint, handler) {
  handler.handleComplaint(complaint);
}

const customerSupport = new CustomerSupportHandler();
const technicalSupport = new TechnicalSupportHandler();
const manager = new ManagerHandler();

customerSupport.setNextHandler(technicalSupport);
technicalSupport.setNextHandler(manager);

const lowSeverityComplaint = { severity: "Low", complexity: "Simple" };
const mediumSeverityComplaint = { severity: "Medium", complexity: "Simple" };
const highComplexityComplaint = { severity: "High", complexity: "Complex" };

processComplaint(lowSeverityComplaint, customerSupport);
processComplaint(mediumSeverityComplaint, customerSupport);
processComplaint(highComplexityComplaint, customerSupport);
