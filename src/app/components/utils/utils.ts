export class Utils {
  getFormattedDate() {
    let month = new Date().toLocaleString('default', { month: 'long' });
    month = month.charAt(0).toUpperCase() + month.slice(1);
    let year = new Date().getFullYear();
    return month + ' ' + year;
  }

  getUltimos30Dias(): string {
    const hoy = new Date();
    const hace30Dias = new Date();
    hace30Dias.setDate(hoy.getDate() - 30);

    const opciones = { day: '2-digit', month: 'long', year: 'numeric' };

    const inicio = hace30Dias.toLocaleDateString('es-ES', opciones as any);
    const fin = hoy.toLocaleDateString('es-ES', opciones as any);

    return `(${inicio} a ${fin})`;
  }
}
