const { jsPDF } = require("jspdf");
// eslint-disable-next-line no-unused-vars
const autoTable = require("jspdf-autotable");

class Cotacao {
  constructor() {}
  //Função para aguaradar em milisegundos
  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async imprimir(dados) {
    dados = dados.row;
    dados = JSON.stringify(dados);
    console.log(dados);
    dados = JSON.parse(dados);
    const doc = new jsPDF({
      orientation: "",
      compress: true,
    });
    let img = {
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAADwCAYAAADYdbe6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QIZEh450vvpOwAALXxJREFUeNrt3Xl8XFX9//HXuUmbtBTaAi37IshaBUFlE6WIooJFILltAUVEha/ydUMhKfD9GRVp0iIqfL+ouCAi2GbSUkGtsiPyRTbZLPte1hZoC7S0Seae3x8n+TakWe6de2fOzOT9fDzmwYP03nPPuZnMZ+5ZPgdERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERESkuhjfFRAZiU44oWWTzs7RU6w12waBmRBFrANWWRs8FAQ7PpXLTc/7rqOIFJcCsEgJNTbOPtwYcwZwKFAzyGEvA1eOGmXPvfLKWSt811lEikMBWKQEWlpagoceqrvIWvPVBKe9FATBp+fPP/NfvusvItkLfFdAZCR46KH67yUMvgBbRVF0/cyZ527nu/4ikj0FYJEiC8O577KWMws8fWIU1c7x3QYRyV6t7wqIxBGG500KArOjtYwHxkcRATDeGPffmprginnzml70Xc+BWJs/wRhGF34+DWF4waa53Omv+25LqXzuc3M3Wreu+z+tZUXPPVgBEASssNauzuftMwsXnv2S73qKpKEALGXluOPO3zyfzx8cRfZDxrAHsGPPa6MoWn+c6Td7wVpuBcoyABvDR1MWMQq6Pgp0+G5LqXR3d46ztqa19/97f9/WAhhqaiAMW9cCzwLPGMNjYG8PguCWcv0iJtKfArB4F4YXjLF23QnGmBO6u7s/DNSY6poeuFX6Iuw2vhtRhuqB3YDdrOUTYL6Wz1sbhq13AVeOHr320iuuaHnDdyVFBqMALN5MndpSO3ly/anWdrYYYzb3XZ8i2jiDMsb7bkSFMMB+wH6dnfXfD8PW2bD2glyupdN3xUT60yQs8SIM52w5aVLdjdby30A1B1/ApF7La6151XcrKtAmwGyo/2dDw+ydfFdGpD8FYCm5MDxvEkQ3gfmw77qUyHNpCzDGPuu7ERVsnyAwt4dh226+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z0ZVyfZLc7IxdqXvBlQTY7jBdx1EQAFYSsgtc7F/812PUjr22LZtgUPSlWI1ZpmdB4udoUskLgVgKSljzI9816GUgoCzGTrj1rCsNa/6bkf1MHN910CklwKwlFR7e/PfjeFS3/UohTCcPcMYe2racowxGrPMxnW53JmZZFQTyYJmQUvJWTv6NOjcETjUd10KMX1662XW8q8gCG4dP378g5dccmpX338Pw9nvNsacZi1fI4MpvN3d3Xf4bnMVuH/UKDtjJM4ol/KlACwll8ud/vZJJ7UcsWbNmIustYWmE/TGWo4CToyiiBUrVhCGrSuBZcAaYAtgq8ITjmzguYULz37Jd5srXMfo0Wu/eMUVLcqAJWVFAVi8+O1vW9YCX54+ve1Ka20b8EHfdUphQs8rc9bam3w3roI9BGZWLtd0te+KiAxEAVi8am9vugnYLwzPOxCCzwGfAbb2Xa9yEQS23XcdKsxrwDVgrszlzrxeXc5SzhSApSzkcmfdDtwO9rSGhtm7GVNzYBAwxVq7A+v3q53ku54l9vSyZZ3X+q5EmVqBy3z2DPCsMfaRfL72f4NghyW5XO/+zU2+6ygyJAVgKTPGLljAI8Aj/f9l2rSWsaNH120JEARMBDCGidYGprMz/7jvmmd+J4ydU617Eg+nrq5rVT5f80mweWuDNyDKA6uiiKi+ft2rGs+VaqDtrEUSCsPWFRRpzHc9+8Dy5eveP1IDsMhIoHXAIuVndRSZ4xV8RaqbuqBFyksezEkLFjQt8V0RESkuPQGLlI9uY8wXc7mmDt8VEZHi0xOwSHlYDnZme3vzjb4rIiKloSdgEb/y1vKb7u5oj1xuloKvyAiiJ2CR5FaSfhb0SmvJ1dRE58+ff9ZjvhskIqWnACyS0JQpa3desmTsXsbkD7DW7AXsAWwHbAPUD3BKF/A88JS13AH8Y/XqsTcuXvz1db7bIiL+aB2wSIbCsHU8jK6JonUTgqBmzahR+XVXXtm8UikRRURERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERMrUaOBbwGLgGeBe4HLgaMD4rpyMDHqjlcY44ICYxz4MvOC7wuLFjsBBuPfKvsAkYGLPqwZYCbzV83oZWAI82PPffwFv+25AhdgHmA/sMsi/LwSO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",
      width: 53.33,
      height: 26.66,
    };
    //console.log(JSON.stringify(dados));

    let id = 0;
    let produtos = dados.itens.map((produto) => {
      id++;
      return [
        id,
        produto.PRODUTOCOD,
        produto.PRODUTODESC,
        produto.QUANTIDADE.toFixed(4),
        produto.PRODUTOUND,
        produto.VALORUNT.toFixed(4),
        produto.DESCONTOVALOR.toFixed(4),
        produto.VALORTOTAL.toFixed(4),
      ];
    });

    doc.addImage(img.src, 5, 0, img.width, img.height);

    doc.autoTable({
      startY: 26.66,
      body: [
        [
          {
            content: "CoreByte ERP",
            styles: {
              halign: "left",
              fontSize: 15,
              textColor: "#ffffff",
            },
          },
          {
            content: "Cotação de Compra",
            styles: {
              halign: "right",
              fontSize: 15,
              textColor: "#ffffff",
            },
          },
        ],
      ],
      theme: "plain",
      styles: {
        fillColor: "#343a40",
      },
    });

    doc.autoTable({
      body: [
        [
          {
            content:
              "CLIENTE:" +
              `\n[${dados.cliente[0].CLI_CPF_CNPJ}] ${dados.cliente[0].CLI_NOME}` +
              `\n${dados.cliente[0].ENDERECOS[0].END_RUA}, ${dados.cliente[0].ENDERECOS[0].END_NUMERO}` +
              `\n${dados.cliente[0].ENDERECOS[0].END_BAIRRO} - ${dados.cliente[0].ENDERECOS[0].END_MUNICIPIO} - ${dados.cliente[0].ENDERECOS[0].END_EST} - ${dados.cliente[0].ENDERECOS[0].END_CEP}` +
              `\n(${dados.cliente[0].TELEFONES[0].TEL_DDD}) ${dados.cliente[0].TELEFONES[0].TEL_NUMERO} ${dados.cliente[0].TELEFONES[0].TEL_CONTATO}`,
            styles: {
              halign: "left",
            },
          },
          {
            content:
              `Numero do Pedido: ${dados.cotacao.id}` +
              `\nDate: ${dados.cotacao.CRIADO_EM.split("T")[0]}` +
              `\nValidade: ${dados.cotacao.VALIDADE.replace(
                /(\d{4})(\d{2})(\d{2})/g,
                "$1-$2-$3"
              )}`,
            styles: {
              halign: "right",
            },
          },
        ],
      ],
      theme: "plain",
    });

    doc.autoTable({
      head: [
        [
          "ID",
          "Código",
          "Descrição",
          "Quant.",
          "UND",
          "Vl.Unit.",
          "Vl.Desc.",
          "Vl.Total",
        ],
      ],
      styles: {
        halign: "left",
        fontSize: 8,
      },
      body: produtos,
      theme: "striped",
      headStyles: {
        fontSize: 8,
        fillColor: "#343a40",
      },
    });
    doc.autoTable({
      body: [
        ["Descontos: ", "R$ " + dados.cotacao.DESCONTOVALOR.toFixed(2)],
        ["Total: ", "R$ " + dados.cotacao.TOTAL.toFixed(2)],
      ],
      theme: "plain",
      columnStyles: {
        0: {
          cellWidth: 160,
          halign: "right",
        },
        1: {
          cellWidth: 40,
          halign: "left",
        },
      },
      styles: {
        halign: "right",
        fontSize: 12,
        overflow: "linebreak",
      },
    });

    let retorno = await doc.output("dataurlstring");
    //console.log(retorno);
    return retorno;
  }
}
module.exports = Cotacao;
