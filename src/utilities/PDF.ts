import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export const PDF = (results: string, table: HTMLElement | null) => {
    const doc = new jsPDF();

    doc.setFontSize(14);
    doc.text("Gantt Chart Results", 14, 22);

    doc.setFontSize(12);
    doc.text(results, 14, 30);

    if (table && table instanceof HTMLTableElement) {
        autoTable(doc, {
            html: table,
            startY: 40,
            theme: 'grid',
            styles: { fontSize: 10 },
        });
    }

    doc.save("gantt_chart_results.pdf");
};
