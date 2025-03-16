import { jsPDF } from "jspdf";

export const PDF = (waitTimeChart: HTMLCanvasElement | null, turnaroundTimeChart: HTMLCanvasElement | null) => {
    const doc = new jsPDF();

    doc.setFontSize(14);

    let currentY = 30;

    if (waitTimeChart) {
        const waitTimeImage = waitTimeChart.toDataURL("image/png");
        doc.addImage(waitTimeImage, 'PNG', 14, currentY, 180, 90);
        currentY += 100;
    }

    if (turnaroundTimeChart) {
        const turnaroundTimeImage = turnaroundTimeChart.toDataURL("image/png");
        doc.addImage(turnaroundTimeImage, 'PNG', 14, currentY, 180, 90);
    }

    doc.save("results.pdf");
};