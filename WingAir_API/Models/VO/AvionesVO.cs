using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WingAir_API.Models.VO
{
    public class AvionesVO
    {
        public int AvionId { get; set; }
        public int TipoId { get; set; }
        public string Codigo { get; set; }
        public double HorasVuelo { get; set; }
        public int CapacidadPasajeros { get; set; }
    }
}