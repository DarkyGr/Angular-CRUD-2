using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WingAir_API.Models.VO
{
    public class VuelosVO
    {
        public int VueloId { get; set; }
        public int AeropuertoOrigenId { get; set; }
        public int AeropuertoDestinoId { get; set; }
        public int AvionId { get; set; }
        public int PilotoId { get; set; }
        public int EstatusId { get; set; }
        public string Nombre { get; set; }
        public System.DateTime FechaSalida { get; set; }
        public System.DateTime FechaLlegadaEstimada { get; set; }
        public System.DateTime FechaLlegadaReal { get; set; }
        public double HorasVuelo { get; set; }
    }
}