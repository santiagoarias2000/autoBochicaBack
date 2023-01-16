"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_details_1 = require("./../../repo/person/sql_details");
const Details_1 = __importDefault(require("../../dao/person/Details"));
const pdfkit_1 = __importDefault(require("pdfkit"));
class PersonControllerDetails extends Details_1.default {
    DetailsOne(req, res) {
        const id_person = req.params.idPerson;
        const parametro = [id_person];
        PersonControllerDetails.detailsById(sql_details_1.SQL_PERSON_DETAILS.DETAILS, parametro, res);
    }
    DetailsOneUpdate(req, res) {
        const id_person = req.params.idPerson;
        const parametro = [id_person];
        PersonControllerDetails.detailsById(sql_details_1.SQL_PERSON_DETAILS.DETAILSUPPDATE, parametro, res);
    }
    createPDF(req, res) {
        const doc = new pdfkit_1.default({ bufferPages: true });
        const id_person = req.params.idPerson;
        const parametro = [id_person];
        PersonControllerDetails.detailsById(sql_details_1.SQL_PERSON_DETAILS.DETAILS, parametro, res);
        const filename = `Facturas${Date.now()}.pdf`;
        const stream = res.writeHead(200, {
            "Content-Type": "application/pdf",
            "Content-disposition": `attachment;filename=${filename}`,
        });
        doc.on('data', (data) => { stream.write(data); });
        doc.on('end', () => { stream.end(); });
        doc.fontSize(18).text("Auto bochica", 30, 30);
        doc.font('Times-Roman').text(`Nombres: ${id_person}`, 30, 60);
        doc.text(`Apellidos: ${id_person}`, 30, 90);
        doc.text(`Documento: ${id_person}`, 30, 120);
        doc.text(`Correo electronico: ${id_person}`, 30, 150);
        doc.text(`Fecha de cumpleaños: ${id_person}`, 30, 180);
        doc.text(`Dirección: ${id_person}`, 30, 210);
        doc.text(`Numero de contacto: ${id_person}`, 30, 240);
        doc.text(`Ocupacion: ${id_person}`, 30, 270);
        doc.text(`Fecha de matrícula: ${id_person}`, 30, 300);
        doc.text(`Curso: ${id_person}`, 30, 330);
        doc.text(`Tiempo de curso: ${id_person}`, 30, 360);
        doc.text(`Estrato: ${id_person}`, 30, 390);
        doc.text(`Sisben: ${id_person}`, 30, 420);
        doc.text(`Estado civil: ${id_person}`, 30, 450);
        doc.text(`Nivel de estudios: ${id_person}`, 30, 480);
        doc.text(`Cuidad de origen: ${id_person}`, 30, 510);
        doc.text(`Género: ${id_person}`, 30, 540);
        // const platos = [
        // const platos = [
        //   {
        //     nro: `cc`,
        //     desc: "sañsda",
        //     cantidad: 2,
        //   },
        //   {
        //     nro: 1,
        //     desc: "sañsda",
        //     cantidad: 2,
        //   },
        //   {
        //     nro: 1,
        //     desc: "sañsda",
        //     cantidad: 2,
        //   },
        // ];
        // doc.addTable(
        //   [
        //     { key: "nro", label: "Nro", align: "left" },
        //     { key: "desc", label: "Descripcion", align: "left" },
        //     { key: "cantidad", label: "Canridad", align: "left" },
        //   ],
        //   platos,
        //   {
        //     border: null,
        //     width: "fill_body",
        //     striped: true,
        //     stripedColors: ["#f6f6f6", "#d6c4dd"],
        //     cellsPadding: 10,
        //     marginLeft: 45,
        //     marginRight: 45,
        //     headAlign: "center",
        //   }
        // );
        // doc.render();
        doc.end();
        //     const pdfDoc = await PDFDocument.create()
        //     const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
        //     const page = pdfDoc.addPage()
        //     const { width, height } = page.getSize()
        //     const fontSize = 30
        //     page.drawText('Creating PDFs in JavaScript is awesome!', {
        //       x: 50,
        //       y: height - 4 * fontSize,
        //       size: fontSize,
        //       font: timesRomanFont,
        //       color: rgb(0, 0.53, 0.71),
        //     })
        //     const pdfBytes = await pdfDoc.save()
    }
}
const personControllerDetails = new PersonControllerDetails();
exports.default = personControllerDetails;
