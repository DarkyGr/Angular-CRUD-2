using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WingAir_API.Models.VO
{
    public class PilotosVO
    {
        public int PilotoId { get; set; }
        public string Codigo { get; set; }
        public string Nombre { get; set; }
        public string Sexo { get; set; }
        public double HorasVuelo { get; set; }
    }
}